/**
 *  Extend core WP list block
 *  https://wordpress.org/documentation/article/list-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { Fragment, cloneElement } from '@wordpress/element';

registerBlockStyle( 'core/list', {
	name: 'wide',
	label: __('Wide', 'mojblocks'),
} );

addFilter(
	"blocks.registerBlockType",
	"moj-blocks/bullet-prefix-attribute",
	function (settings, name) {
		if (name !== "core/list") return settings;

		return {
			...settings,
			attributes: {
				...settings.attributes,
				bulletPrefix: {
					type: 'string',
					default: '',
				},
			},
		};
	}
);

addFilter(
	'editor.BlockEdit',
	'moj-blocks/list-controls',
	createHigherOrderComponent(
		(BlockEdit) => (props) => {
			if (props.name !== 'core/list') {
				return <BlockEdit {...props} />;
			}

			const { bulletPrefix = '' } = props.attributes;

			return (
				<Fragment>
					<BlockEdit {...props} />

					{props.attributes.ordered && (
						<InspectorControls>
							<PanelBody title="Custom bullet prefix" initialOpen={false}>
								<TextControl
									label="Bullet prefix"
									value={bulletPrefix}
									onChange={(bulletPrefix) =>
										props.setAttributes({ bulletPrefix })
									}
									maxLength={8} // Keep prefixes short so the marker doesn't become unwieldy (8 for "chapter " - the longest sensible one I could think of).
								/>
							</PanelBody>
						</InspectorControls>
					)}
				</Fragment>
			);
		},
		'withListCustomBulletPrefix'
	)
);

addFilter(
	'editor.BlockListBlock',
	'moj-blocks/list-custom-bullet-editor',
	createHigherOrderComponent(
		(BlockListBlock) => (props) => {
			if (props.name !== 'core/list') {
				return <BlockListBlock {...props} />;
			}

			const { bulletPrefix = '' } = props.attributes;

			if (!bulletPrefix) {
				return <BlockListBlock {...props} />;
			}

			return (
				<BlockListBlock
					{...props}
					wrapperProps={{
						...props.wrapperProps,
						style: {
							...props.wrapperProps?.style,
							'--bullet-prefix-width': `${getPrefixWidth(bulletPrefix)}ch`,
							'--bullet-prefix': JSON.stringify(bulletPrefix),
						},
					}}
				/>
			);
		},
		'withListCustomBulletPrefixEditor'
	)
);

addFilter(
	'blocks.getSaveElement',
	'moj-blocks/list-custom-bullet',
	(element, blockType, attributes) => {
		if (
			blockType.name !== 'core/list' ||
			!attributes.bulletPrefix || 
			!element
		) {
			return element;
		}

		return cloneElement(element, {
			style: {
				...element.props.style,
				'--bullet-prefix-width': `${getPrefixWidth(attributes.bulletPrefix)}ch`,
				'--bullet-prefix': JSON.stringify(attributes.bulletPrefix),
			},
		});
	}
);

function getPrefixWidth(prefix) {
	// Approximation for width of prefix, to use as a margin.
	const narrowChars = (prefix.match(/[ilIjtf.,:;!'|ı·˙^`´\-()[\]]/g) || []).length;
	return prefix.length - narrowChars * 0.5; // reduce the width by half for each narrow character.
}
