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

registerBlockStyle( 'core/group', {
    name: 'text-aligned',
    label: __('Text-aligned', 'mojblocks'),
} );

registerBlockStyle( 'core/group', {
    name: 'faded-bleed',
    label: __('Fading out', 'mojblocks'),
} );

registerBlockStyle( 'core/group', {
    name: 'rounded-corners',
    label: __('Rounded', 'mojblocks'),
} );

registerBlockStyle( 'core/group', {
    name: 'very-rounded-corners',
    label: __('Very rounded', 'mojblocks'),
} );

// From https://mariecomet.fr/en/2021/12/14/adding-options-controls-existing-gutenberg-block/


// Enable custom attributes on Group block
const enableSidebarControl = [
    'core/group'
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, RangeControl } = wp.components;

import classnames from 'classnames'

/**
 * Declare our custom attribute
 */
const setSidebarRangeAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarControl.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            groupAttribute: { type: 'string' }
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-sidebar-range-attribute',
    setSidebarRangeAttribute
);

/**
 * Add Custom Range to Group Sidebar
 */
const withSidebarRange = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarControl.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { groupAttribute } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody
                        title={ __( 'Rounded corners', 'hale' ) }
                    >
                        <RangeControl
                            label={ __( 'Corner radius', 'hale' ) }
                            value={ groupAttribute ? groupAttribute : 0 }
                            max={ 5 }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    groupAttribute: value,
                                } );
                            } }
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withSidebarRange' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-sidebar-select',
    withSidebarRange
);


/**
 * Add custom class to block in Edit
 */
const withSidebarRangeProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarControl.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { groupAttribute } = attributes;

        if ( groupAttribute ) {
            return <BlockListBlock { ...props } className={ 'has-rounded-corners' } style ={'border-radius: ' + (groupAttribute*6) + 'px;'} />
        } else {
            return <BlockListBlock { ...props } />
        }
    };
}, 'withSidebarRangeProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'custom-attributes/with-sidebar-range-prop',
    withSidebarRangeProp
);


/**
 * Save our custom attribute
 */
const saveSidebarSelectAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarControl.includes( blockType.name ) ) {
        const { groupAttribute } = attributes;
        if ( groupAttribute ) {
            extraProps.style ={'border-radius': (groupAttribute*6) + 'px'}
            extraProps.className = classnames( extraProps.className, 'has-rounded-corners' )
        }
    }

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-sidebar-range-attribute',
    saveSidebarSelectAttribute
);