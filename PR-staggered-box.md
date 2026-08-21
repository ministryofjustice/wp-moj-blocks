# Staggered Box: Block API v3 + block.json

## Why

WordPress 7.1 always iframes the post editor, with no fallback for apiVersion 1/2
blocks ([core post](https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/)).
Every block in this plugin is currently apiVersion 1. This is one of ~20 per-block PRs
migrating them.

## What changed

**`block.json`** (new) — metadata and all seven attributes in one place instead of
duplicated between the JS and `mojblocks.php`. `editorScript` points at the existing
`mojblocks-editor-script` handle, so the single bundle is unchanged.

**`index.js`** — `registerBlockType( metadata.name, { edit, save } )`; `useBlockProps()`
on the wrapper; `setAttributes({ staggeredBoxClassName: className })` removed from the
render body (a side effect during render, and `className` is no longer passed to
`edit()` from apiVersion 2 onwards). Four `wp.*` global destructures replaced with
imports. The two `registerBlockStyle` calls are unchanged.

**`index.php`** — `get_block_wrapper_attributes()` replaces the manual class string.

**`mojblocks.php`** — registers from `block.json`; inline attributes array removed.

**`webpack.mix.js`** — copies `src/custom-blocks/*/block.json` into `build/` via
`copy-webpack-plugin`. A glob, so later block PRs need no build config change.
**`block.json` must ship from `build/`, not `src/`** — `.distignore` excludes `/src`, so
registering from source would work locally and fail in the packaged plugin.

## No bugs found

Nothing else was wrong with this block — no `class=` instead of `className=`, no phantom
attributes in the PHP registration, no pseudo-element styles on the wrapper. The diff is
the migration plus the import cleanup.

## Block styles need care here

The block registers two styles — `image-left` (`isDefault`) and
`staggered-box-image-right` — and `style.scss` targets
`.is-style-staggered-box-image-right` to flip the image alignment.

Block styles are stored in `className`, so `useBlockProps()` and
`get_block_wrapper_attributes()` both put `is-style-*` on the wrapper, which preserves
this. It's the thing most likely to break if anyone restructures the wrapper later, so
there are comments in both files saying so.

## Testing

- [ ] Block appears in the inserter with correct title, icon and description
- [ ] Existing pages render unchanged on the frontend
- [ ] No "unexpected content" warnings on existing content
- [ ] Title, content and button text all edit and save
- [ ] Button link (URLInputButton) saves and works on the frontend
- [ ] Image selection via Open Media Library works, and alt text is picked up
- [ ] **Both block styles** — image left and image right — still swap the image side, in
      the editor and on the frontend
- [ ] `build/custom-blocks/staggered-box/block.json` present after `npm run build`
- [ ] Block registers from a **packaged** build, not just a local one (`.distignore`)

## Notes for reviewers

- `staggeredBoxClassName` is kept in `block.json` but no longer read. Custom classes have
  always been saved separately in `className`, so nothing is lost — it stays only so it
  isn't stripped from existing content on next save.
- `save()` is unchanged (`() => null`). This is a dynamic block, so nothing is
  serialised and there's no invalidation risk.
- `npm start` (wp-scripts alone) clears `build/`, which now removes the copied
  `block.json` too. If the block disappears during development, run `npm run build`.
  A missing `block.json` makes `register_block_type()` fail silently, and since `save()`
  returns null the block then renders nothing at all.
