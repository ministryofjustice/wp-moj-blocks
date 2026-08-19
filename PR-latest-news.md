# Latest News: Block API v3 + block.json

## Why

WordPress 7.1 always iframes the post editor, with no fallback for apiVersion 1/2
blocks ([core post](https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/)).
Every block in this plugin is currently apiVersion 1. This is one of ~20 per-block PRs
migrating them.

## What changed

**`block.json`** (new) — metadata and attributes in one place instead of duplicated
between the JS and `mojblocks.php`. `editorScript` points at the existing
`mojblocks-editor-script` handle, so the single bundle is unchanged.

**`index.js`** — `registerBlockType( metadata.name, { edit, save } )`; `useBlockProps()`
on the wrapper. Five `wp.*` global destructures replaced with imports.

**`index.php`** — `get_block_wrapper_attributes()` replaces the manual class string.

**`mojblocks.php`** — registers from `block.json`; inline attributes array removed.

**`webpack.mix.js`** — copies `src/custom-blocks/*/block.json` into `build/` via
`copy-webpack-plugin`. A glob, so later block PRs need no build config change.
**`block.json` must ship from `build/`, not `src/`** — `.distignore` excludes `/src`, so
registering from source would work locally and fail in the packaged plugin.

## Bugs fixed

**Custom CSS classes have never worked on this block.** The render callback read
`$attributes['latestNewsClassName']`, which nothing has ever written — not in current
source, not anywhere in git history. Anything typed into "Additional CSS class(es)" was
silently discarded on the frontend. `get_block_wrapper_attributes()` fixes this, so
**any existing block with a custom class set will start applying it**. Same bug and same
caveat as the featured-news PR.

**`latestNewsExpiry` declared an invalid type.** It was `type: "numeric"`, which is not
a valid JSON Schema type — the valid set is string, number, integer, boolean, array,
object, null. `block.json` now declares `integer`, matching what `mojblocks.php` already
registered server-side, so server behaviour is unchanged. Values previously saved as
numeric strings still validate, since WordPress's integer check accepts them.

**Four unused imports removed** — `registerBlockStyle`, `RichText`, `MediaUpload`,
`URLInputButton`, along with the `ALLOWED_MEDIA_TYPES` constant that went with them.
This block has no media or link controls; that was leftover from a copy-paste.

## Testing

- [ ] Block appears in the inserter with correct title and icon
- [ ] Existing pages render unchanged on the frontend
- [ ] No "unexpected content" warnings on existing content
- [ ] Show/hide dates toggle works
- [ ] "Text for no news" saves and displays when there are no articles
- [ ] Auto-hide-after-weeks control saves, and articles older than that stop appearing
      on the frontend *(this is the attribute whose type changed)*
- [ ] Inner heading block still edits and saves
- [ ] `build/custom-blocks/latest-news/block.json` present after `npm run build`
- [ ] Block registers from a **packaged** build, not just a local one (`.distignore`)

## Notes for reviewers

- `latestNewsNumber` is read by the render callback with a default of 3 but has no
  editor control and is never set, so it is always 3. Kept registered rather than
  dropped, since removing a registered attribute changes how saved content is handled.
- The `mojblocks-latest-news--expiry-weeks-{n}` modifier is editor-only — nothing styles
  it and the frontend wrapper has never carried it. Kept so editor markup is unchanged.
- `save()` is unchanged. This is a dynamic block, so `save()` output becomes `$content`
  in PHP — adding `useBlockProps.save()` would double-wrap the frontend and invalidate
  every block already in the database.
- No pseudo-element styles on this block's wrapper, so none of the `::after` collisions
  seen in the featured-item and featured-news PRs apply here.
- `npm start` (wp-scripts alone) clears `build/`, which now removes the copied
  `block.json` too. If the block disappears during development, run `npm run build`.
  A missing `block.json` makes `register_block_type()` fail silently, and the block then
  renders only its saved inner content — the heading and nothing else.
