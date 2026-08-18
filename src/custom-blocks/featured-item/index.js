/**
 * Featured Item
 *
 * Block metadata — name, title, icon, category, keywords, attributes — lives in
 * block.json and is registered server-side from mojblocks.php. This file only
 * supplies the editor behaviour and the block styles.
 */
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
  edit,
  /**
   * Deliberately does not call useBlockProps.save().
   *
   * This is a dynamic block: what save() returns is passed to
   * render_callback_featured_item_block() as $content, and the PHP builds the
   * outer wrapper itself. Adding a wrapper here would double-wrap the frontend
   * markup and invalidate every featured item already saved in the database.
   */
  save: () => { return <InnerBlocks.Content />; }
});

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'wide',
  label: __('Wide', 'mojblocks'),
} );

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'image-left',
  label: __('Image left', 'mojblocks'),
} );

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'image-right',
  label: __('Image right', 'mojblocks'),
} );
