/**
 *  Extend core WP heading block
 *  https://wordpress.org/documentation/article/heading-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';

registerBlockStyle( 'core/heading', {
    name: 'wide',
    label: __('Wide', 'mojblocks'),
} );
