/**
 * Card block
 *
 * Create a flexible card pattern on the page,
 * with an image, hyperlink title and body content.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import edit from './edit';

registerBlockType('mojblocks/card', {
    apiVersion: 3,
    title: __('Card', 'mojblocks'),
    description: __('Add a card pattern to a default page', 'mojblocks'),
    category: 'mojblocks',
    icon: 'table-row-after',
    keywords: [
        __('card', 'navigation', 'mojblocks')
    ],
    supports: {
        align: ['wide','full'],
        html: false
    },
    attributes: {
        cardTitle: {
            type: 'string'
        },
        cardExcerpt: {
            type: 'string'
        },
        cardImageURL: {
            type: 'string'
        },
        cardImageAlt: {
            type: 'string'
        },
        cardImageId: {
            type: 'number'
        },
        className: {
            type: 'string'
        },
        cardImagePosition: {
            type: 'string'
        },
        cardImageShape: {
            type: 'string'
        },
    },
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
