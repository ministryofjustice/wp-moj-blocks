// From https://mariecomet.fr/en/2021/12/14/adding-options-controls-existing-gutenberg-block/

/* Add custom attribute to block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on blocks
const enableSidebarNewOptionsOnBlocks = [
    'core/group',
	'mojblocks/card'
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, RangeControl } = wp.components;

import classnames from 'classnames'

/**
 * Declare our custom attribute
 */
const setSidebarNewOptions = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarNewOptionsOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            cornerRoundyness: { type: 'string' }
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'shared-customizations/set-sidebar-new-options',
    setSidebarNewOptions
);

/**
 * Add Custom Select to Sidebar
 */
const withSidebarNewOptions = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarNewOptionsOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { cornerRoundyness } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Corners', 'mojblocks' ) }
    	            >
                        <SelectControl
                            label={ __( 'Corner style', 'mojblocks' ) }
                            value={ cornerRoundyness }
                            options={ [
                                {
                                    label: __( 'Square', 'mojblocks' ),
									value: ''
                                },
                                {
                                    label: __( 'Slightly rounded', 'mojblocks' ),
                                    value: 'rounded--6'
                                },
                                {
                                    label: __( 'Very rounded', 'mojblocks' ),
                                    value: 'rounded--24'
                                }
                            ] }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    cornerRoundyness: value,
                                } );
                            } }
                        /> 
	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withSidebarNewOptions' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'wp-moj-blocks/shared-controls/with-sidebar-new-options',
    withSidebarNewOptions
);


/**
 * Add custom class to block in Edit
 */
const withSidebarNewOptionsProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarNewOptionsOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { cornerRoundyness } = attributes;

        if ( cornerRoundyness ) {
            return <BlockListBlock { ...props } className={ 'mojblocks-corner-' + cornerRoundyness } />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withSidebarNewOptionsProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'wp-moj-blocks/shared-controls/rounded-corners/sidebar-select',
    withSidebarNewOptionsProp
);


/**
 * Save our custom attribute
 */
const saveSidebarSelectAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarNewOptionsOnBlocks.includes( blockType.name ) ) {
        const { cornerRoundyness } = attributes;
        if ( cornerRoundyness ) {
            extraProps.className = classnames( extraProps.className, 'mojblocks-corner-' + cornerRoundyness )
        }
    }    

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'wp-moj-blocks/shared-controls/rounded-corners/save-sidebar-select',
    saveSidebarSelectAttribute
);