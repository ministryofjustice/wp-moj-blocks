/**
 *  Extend core WP button block
 *  https://wordpress.org/support/article/button-block/
 *
 * This makes use of WP Blocks extention filters
 * https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import { domReady } from '@wordpress/dom-ready';

wp.domReady( () => {
	wp.blocks.unregisterBlockStyle(
		'core/button',
		[ 'outline', 'squared', 'fill' ]
	);

    wp.blocks.registerBlockStyle( 'core/button', [
		{
			name: 'moj-cta-button',
			label: __('Call to action', 'mojblocks'),
			isDefault: true
		}
	]);

    wp.blocks.registerBlockStyle( 'core/buttons', [
		{
			name: 'moj-cta-button',
			label: __('Call to action', 'mojblocks'),
			isDefault: true
		}
	]);
} );
