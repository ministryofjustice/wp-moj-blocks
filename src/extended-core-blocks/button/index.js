/**
 *  Extend core WP Button, Buttons blocks
 *  https://wordpress.org/support/article/button-block/
 *  https://wordpress.org/support/article/buttons-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

/**
 * Modify the CSS styles associated with
 * two button blocks 'core/button' and 'core/buttons'.
 * Remove default core styles.
 */

domReady( () => {

	// Remove the default styles
	unregisterBlockStyle(
		'core/button',
		[ 'outline', 'squared', 'fill' ]
	);

	// Button (singular)
	// Add custom CSS class
	registerBlockStyle( 'core/button', [
		{
			name: 'button--default',
			label: __('Default', 'mojblocks'),
			isDefault: true
		}
	]);
	// Add custom CSS class
	registerBlockStyle( 'core/button', [
		{
			name: 'button--bold-text',
			label: __('Bolder', 'mojblocks'),
		}
	]);

	// Buttons (plural)
	// Add custom CSS class
	registerBlockStyle( 'core/buttons', [
		{
			name: 'buttons--default',
			label: __('Default', 'mojblocks'),
			isDefault: true
		}
	]);
	// Add custom CSS class
	registerBlockStyle( 'core/buttons', [
		{
			name: 'buttons--bold-text',
			label: __('All bold', 'mojblocks'),
		}
	]);
} );
