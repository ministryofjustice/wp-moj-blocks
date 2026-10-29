/**
 *  Extend core WP group block
 *  https://wordpress.org/documentation/article/group-block/
 *
 */


import { __ } from '@wordpress/i18n';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

import {
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

const NUMBER_STYLES = [
	{ label: '1, 2, 3', value: 'decimal' },
	{ label: '01, 02, 03', value: 'decimal-leading-zero' },
	{ label: 'a, b, c', value: 'lower-alpha' },
	{ label: 'A, B, C', value: 'upper-alpha' },
	{ label: 'i, ii, iii', value: 'lower-roman' },
	{ label: 'I, II, III', value: 'upper-roman' },
	{ label: 'α, β, γ', value: 'lower-greek' },
];

const VALID_STYLES = new Set(
    NUMBER_STYLES.map( ( { value } ) => value )
);

const getValidStyle = ( style ) =>
	VALID_STYLES.has( style )
	? style
	: 'decimal';

/* -------------------------------------------------------------------------- */
/* Block styles                                                                */
/* -------------------------------------------------------------------------- */

registerBlockStyle( 'core/group', {
	name: 'bleeding-background',
	label: __('Full-width', 'mojblocks'),
} );

registerBlockStyle( 'core/group', {
	name: 'text-aligned',
	label: __('Text-aligned', 'mojblocks'),
} );

registerBlockStyle( 'core/group', {
	name: 'faded-bleed',
	label: __('Fading out', 'mojblocks'),
} );

/* -------------------------------------------------------------------------- */
/* Attributes                                                                   */
/* -------------------------------------------------------------------------- */

function addGroupAttributes( settings, name ) {

	if ( name !== 'core/group' ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,

		numberedParagraphs: {
			type: 'boolean',
			default: false,
		},
		numberPrefix: {
			type: 'string',
			default: '',
		},
		numberStyle: {
			type: 'string',
			default: 'decimal',
		},
		numberSuffix: {
			type: 'string',
			default: '',
		}
	};

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'mojblocks/group-attributes',
	addGroupAttributes
);


/* -------------------------------------------------------------------------- */
/* Inspector controls                                                           */
/* -------------------------------------------------------------------------- */

const withGroupControls = createHigherOrderComponent(
	( BlockEdit ) => {
		return ( props ) => {

			if ( props.name !== 'core/group' ) {
				return <BlockEdit { ...props } />;
			}

			const {
				attributes,
				setAttributes,
			} = props;

			const {
				numberedParagraphs,
				numberPrefix,
				numberStyle,
				numberSuffix,
			} = attributes;

			const onChangeStyle = ( value ) => {
				setAttributes( {
					numberStyle: getValidStyle(value)
				} )
			};

			const paragraphCount = useSelect(
				(select) => {
					const block = select('core/block-editor')
						.getBlock(props.clientId);

					return block?.innerBlocks?.filter(
						(innerBlock) => innerBlock.name === 'core/paragraph'
					).length ?? 0;
				},
				[props.clientId]
			);

			return (
				<>
					<BlockEdit { ...props } />

					<InspectorControls>
						<PanelBody
							title={ __(
								'Paragraph numbering',
								'mojblocks'
							) }
							initialOpen={ false }
						>
							<ToggleControl
								label={ __(
									'Number paragraphs',
									'mojblocks'
								) }
								checked={ numberedParagraphs }
								onChange={ ( value ) =>
									setAttributes( {
										numberedParagraphs: value,
									} )
								}
							/>

							{ numberedParagraphs && (
								<>
									<TextControl
										label={ __(
											'Prefix',
											'mojblocks'
										) }
										value={ numberPrefix }
										help={ __(
											'Examples: "1."; "2."; "Appendix ", or leave blank for no prefix',
											'mojblocks'
										) }
										onChange={ ( value ) =>
											setAttributes({
												numberPrefix: value,
											})
										}
										maxLength={ 12 }
									/>
									<SelectControl
										label={ __( 'Numbering style', 'mojblocks' ) }
										value={ getValidStyle(numberStyle) }
										help = {paragraphCount === 1 ? `${paragraphCount} paragraph in total will be numbered` : `${paragraphCount} paragraphs in total will be numbered`}
										options={ NUMBER_STYLES }
										onChange={ onChangeStyle }
									/>
									<TextControl
										label={ __(
											'Suffix',
											'mojblocks'
										) }
										value={ numberSuffix }
										help={ __(
											'Examples: "."; ")"; ":", or leave blank for no suffix',
											'mojblocks'
										) }
										onChange={ ( value ) =>
											setAttributes({
												numberSuffix: value,
											})
										}
										maxLength={ 3 }
									/>
								</>
							) }
						</PanelBody>
					</InspectorControls>
				</>
			);
		};
	},
	'withGroupControls'
);

addFilter(
	'editor.BlockEdit',
	'mojblocks/group-controls',
	withGroupControls
);

/* -------------------------------------------------------------------------- */
/* Add class to editor interface.                                             */
/* -------------------------------------------------------------------------- */

const withEditorClass = createHigherOrderComponent(
	( BlockListBlock ) => {
		return ( props ) => {
			if (props.name !== 'core/group') {
				return <BlockListBlock { ...props } />;
			}

			const { numberedParagraphs, numberPrefix, numberStyle, numberSuffix } =
				props.attributes;

			if (!numberedParagraphs) {
				return <BlockListBlock { ...props } />;
			}

			return (
				<BlockListBlock
					{ ...props }
					className={
						[
							props.className,
							'has-numbered-paragraphs',
						]
						.filter( Boolean )
						.join( ' ' )
					}
					wrapperProps={ {
						...props.wrapperProps,
						style: {
							...(props.wrapperProps?.style ?? {}),
							'--moj-number-prefix': JSON.stringify(numberPrefix ?? ''),
							'--moj-number-suffix': JSON.stringify(numberSuffix ?? ''),
						},
						'data-moj-number-style': getValidStyle( numberStyle ),
						}
					}
				/>
			);
		};
	},
	'withEditorClass'
);

addFilter(
	'editor.BlockListBlock',
	'mojblocks/group-editor-class',
	withEditorClass
);

/* -------------------------------------------------------------------------- */
/* Save props                                                                   */
/* -------------------------------------------------------------------------- */

function addSaveProps(
	extraProps,
	blockType,
	attributes
) {
	if ( blockType.name !== 'core/group' ) {
		return extraProps;
	}

	if ( ! attributes.numberedParagraphs ) {
		// All the additional settings are reliant on this being true
		return extraProps;
	}

	extraProps.className = [
		extraProps.className,
		'has-numbered-paragraphs',
	]
		.filter( Boolean )
		.join( ' ' );

	extraProps.style = {
		...(extraProps.style ?? {}),
		'--moj-number-prefix': JSON.stringify(attributes.numberPrefix ?? ""),
		'--moj-number-suffix': JSON.stringify(attributes.numberSuffix ?? ""),
	};

	extraProps['data-moj-number-style'] = getValidStyle( attributes.numberStyle );
						
	return extraProps;
}

addFilter(
	'blocks.getSaveContent.extraProps',
	'mojblocks/group-save-props',
	addSaveProps
);
