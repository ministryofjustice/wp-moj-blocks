/***
 *
 * Superseded — this file is no longer imported and can be deleted.
 *
 * It used to inject the editor's show/hide controls into the DOM after load,
 * using document.querySelector and a MutationObserver on document.body.
 *
 * That approach only works while the editor is not iframed. On WP 7.0 a single
 * apiVersion 1/2 block anywhere on the page forces the non-iframed editor, which
 * is why it still worked mid-migration. Once every block is apiVersion 3, or on
 * WP 7.1, the canvas becomes an iframe and this script's `document` is the
 * parent frame — which contains the admin chrome but none of the blocks. The
 * selectors would silently never match.
 *
 * The controls are now rendered by the block components in index.js, which works
 * in both the old and the iframed editor because Gutenberg renders edit() output
 * into the canvas document itself. It also fixes two things this never handled:
 * blocks added after first paint, and blocks removed or reordered.
 *
 * Left in place only so the deletion is a deliberate, reviewable step rather
 * than a silent one in a migration PR.
 *
 */
