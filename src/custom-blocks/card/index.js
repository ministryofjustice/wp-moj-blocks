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
    apiVersion: 1,
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
        cardImageId: {
            type: 'number'
        },
        cardClassName: {
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
    save: () => {
        return <InnerBlocks.Content />;
    }
});
