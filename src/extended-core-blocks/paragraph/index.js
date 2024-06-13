/**
 *  Extend core WP paragraph block
 *  https://wordpress.org/documentation/article/paragraph-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/paragraph', {
    name: 'wide',
    label: __('Wide', 'mojblocks'),
} );
