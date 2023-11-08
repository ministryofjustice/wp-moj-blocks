/**
 *  Extend core WP group block
 *  https://wordpress.org/documentation/article/group-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/group', {
    name: 'bleeding-background',
    label: __('Full-width', 'mojblocks'),
} );
