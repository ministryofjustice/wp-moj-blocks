/**
 *  Extend core WP list block
 *  https://wordpress.org/documentation/article/list-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/list', {
    name: 'wide',
    label: __('Wide', 'mojblocks'),
} );
