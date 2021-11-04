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
import domReady from '@wordpress/dom-ready';

/**
 * Modify the CSS styles assosiated with
 * two button blocks 'core/button' and 'core/buttons'
 */

domReady( () => {

    // Remove the default styles
	unregisterBlockStyle(
		'core/button',
		[ 'outline', 'squared', 'fill' ]
	);

    // Add custom CSS class
    registerBlockStyle( 'core/button', [
		{
			name: 'mojblocks-cta-button',
			label: __('Button - CTA style', 'mojblocks'),
			isDefault: true
		}
	]);

    // Add custom CSS class
    registerBlockStyle( 'core/buttons', [
		{
			name: 'mojblocks-cta-button',
			label: __('Button - CTA style', 'mojblocks'),
			isDefault: true
		}
	]);
} );
