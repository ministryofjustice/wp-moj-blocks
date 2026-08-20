/**
 * Card block
 *
 * Create a flexible card pattern on the page,
 * with an image, hyperlink title and body content.
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
    edit,
    /**
     * Deliberately does not call useBlockProps.save().
     *
     * This is a dynamic block: what save() returns is passed to
     * render_callback_card_block() as $content, and the PHP builds the outer
     * wrapper itself. Adding a wrapper here would double-wrap the frontend
     * markup and invalidate every card already saved in the database.
     */
    save: () => {
        return <InnerBlocks.Content />;
    }
});
