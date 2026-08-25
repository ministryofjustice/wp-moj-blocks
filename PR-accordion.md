# Accordion: Block API v3 + block.json

## Why

WordPress 7.1 always iframes the post editor, with no fallback for apiVersion 1/2
blocks ([core post](https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/)).
Every block in this plugin is currently apiVersion 1. This is one of ~20 per-block PRs
migrating them.

**This PR covers two blocks** — `mojblocks/accordion` and its child
`mojblocks/accordion-section` — because both are registered from
`src/custom-blocks/accordion/index.js`.

It's the largest diff in the series. The mechanical migration is the same as the other
blocks, but this one also carries two changes that iframing forces, explained below.

## What changed

**Two `block.json` files** (new): `accordion/block.json` and
`accordion-section/block.json`. The section's metadata sits in its own folder even
though its JS stays in `accordion/index.js`, because `webpack.mix.js` copies
`block.json` files with a one-per-folder glob.

**`index.js`** — both blocks registered via `registerBlockType( metadata.name, … )`;
`useBlockProps()` on both; both `setAttributes({ xClassName: className })` calls removed
from the render bodies; six `wp.*` global destructures replaced with imports; both
`edit()` functions returned unkeyed arrays, now Fragments. Plus the control rewrite
below.

**`index.php`** — both render callbacks use `get_block_wrapper_attributes()`.

**`editor.scss`** — one rule moved, see below.

**`edit.js`** — no longer imported. Left in place with a comment explaining why, so
deleting it is a deliberate step rather than a silent one.

**`mojblocks.php`** — both registered from `block.json`. The accordion's inline array was
`'attributes' => []`, so none of its attributes were declared server-side at all.

## 1. Editor show/hide controls moved into the block components

**These are not currently broken. This is a pre-emptive fix.**

`edit.js` injects the show/hide controls after load using `document.querySelector` and a
`MutationObserver` on `document.body`. That works today only because the editor is not
yet iframed — on WP 7.0 a single apiVersion 1/2 block anywhere on the page forces the
non-iframed editor, and most blocks in this plugin are still v1.

Once the last block is converted, or on WP 7.1, the canvas becomes an iframe. The editor
script then runs in the parent frame, whose `document` contains the admin chrome but none
of the blocks — the selectors would silently never match and the controls would vanish
with no error.

They are now rendered by the block components: a shared `ShowHideControl`, plus a small
React context so the parent's "show/hide all" drives the sections. Gutenberg renders
`edit()` output into the canvas document itself, so this works in both the current editor
and the iframed one. That also means it can be **verified now** — if the controls behave
in this PR, they will behave after iframing.

Two details worth knowing:

- The context passes a `collapseSignal` counter, not just the boolean. Sections watch the
  signal, so "hide all" → open one section by hand → "hide all" again still works. If
  they watched the value, the second click wouldn't change anything.
- The markup deliberately reuses the class names the old script produced — `showHideAll`
  / `showHideThis`, `show-hide-arrow`, `show-hide-text`, and the `showAll` / `showThis`
  modifiers — so `editor.scss` applies unchanged, including the Welsh label overrides
  driven off `.preview-welsh-true`.

Side benefit: controls now appear on blocks added after first paint, which the
`MutationObserver` approach never handled.

## 2. Two `::after` collisions

Under apiVersion 3 the element carrying `useBlockProps` is the block's own element, and
Gutenberg draws its selection outline with `::after` and `inset: 0` on it. Any `::after`
the plugin puts on that same element merges with it — already hit on featured-item and
featured-news in this series. This block had two.

**"Accordion start" / "Accordion end" labels** are `:before` and `:after` on
`.govuk-accordion`, which was the wrapper. Moving the class inward wasn't viable —
`.govuk-accordion` carries `data-module="govuk-accordion"` for the govuk-frontend JS. So
`useBlockProps` goes on a **new outer `div`**, with `.govuk-accordion` untouched inside.
`render_callback_accordion_block()` emits the same two-element structure so editor and
frontend match.

**This adds one wrapping div to the frontend markup.** Selectors written as
`.wp-block-mojblocks-accordion.govuk-accordion` — both classes on one element — will
break. `.wp-block-mojblocks-accordion .govuk-accordion` is fine. Worth grepping the theme
before merge.

**The "content hidden" warning** was `.accordion-hidden:after`, and `.accordion-hidden`
sits on `.govuk-accordion__section` — the section block's wrapper. It's now a real
`.accordion-hidden-notice` element, with the text still supplied by CSS so both language
variants keep working.

## Testing

- [ ] Both blocks appear correctly — accordion in the inserter, section only available
      inside an accordion
- [ ] Existing pages render unchanged on the frontend
- [ ] No "unexpected content" warnings on existing content
- [ ] Show/hide controls still appear, and look the same as before
- [ ] Toggle one section, then "hide all", then "show all" — the sequence should behave
      *(this is what the collapseSignal counter is for)*
- [ ] Controls appear on a **newly inserted** accordion without reloading the editor
      *(an improvement — the old script only ran once)*
- [ ] **Select a collapsed section** — the "content hidden" warning stays in place and
      does not fill the block
- [ ] **Select the accordion block** — "Accordion start" / "Accordion end" stay in place
- [ ] Welsh toggle changes the control labels in the editor and the `data-i18n.*`
      attributes on the frontend
- [ ] Wide content toggle still applies `wide-content-true`
- [ ] **Frontend accordion still expands and collapses** — govuk-frontend binds to
      `data-module="govuk-accordion"`, which is now one level deeper
- [ ] Adding, editing, reordering and removing sections all work
- [ ] Nested blocks inside a section (heading, list, paragraph, file) still work
- [ ] `build/custom-blocks/accordion/block.json` and
      `build/custom-blocks/accordion-section/block.json` present after `npm run build`
- [ ] Blocks register from a **packaged** build, not just a local one (`.distignore`)

## Notes for reviewers

- `accordionClassName` and `accordionSectionClassName` are kept in `block.json` but no
  longer read. Custom classes have always been saved separately in `className`, so
  nothing is lost — they stay only so they aren't stripped from existing content on next
  save.
- `save()` is unchanged on both blocks. These are dynamic blocks, so `save()` output
  becomes `$content` in PHP — adding `useBlockProps.save()` would double-wrap the
  frontend and invalidate every accordion already in the database.
- The collapse state is deliberately React state, not a block attribute — it's an editing
  convenience and shouldn't be written to post content.
- `npm start` (wp-scripts alone) clears `build/`, which now removes the copied
  `block.json` files too. If the blocks disappear during development, run
  `npm run build`.

## Worth knowing for the rest of the migration

Any editor JavaScript reaching for `document` has the same latent problem `edit.js` had,
and it will all surface at once when the final v1 block is converted and the editor
starts iframing.

The two safe patterns: render it in `edit()` so Gutenberg puts it in the canvas for you,
or — when a real DOM node is genuinely needed for a third-party library — take a ref
(`useRefEffect` from `@wordpress/compose`) and reach for `node.ownerDocument` rather than
the global.

Worth grepping the plugin for `document.querySelector` and `document.body` before the
last conversions land.
