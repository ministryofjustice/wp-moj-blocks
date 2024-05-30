/**
 *  Extend core WP group block
 *  https://wordpress.org/documentation/article/group-block/
 *
 */

import { __ } from '@wordpress/i18n';
import { registerBlockStyle, registerBlockExtension } from '@wordpress/blocks';
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
import { ToggleControl, RangeControl } from '@wordpress/components';

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

registerBlockExtension(
    'core/group',
    {
        extensionName: 'outline',
        attributes: newAttributes,
        inlineStyleGenerator: generateInlineStyle,
        Edit: outlineBlockEdit
    }
);

const newAttributes = {
    hasOutline: {
        type: "boolean",
        default: false
    },
    outlineThickness: {
        type: "number",
        default: 3
    },
    outlineColour: {
        type: 'string',
        default: "rgb(255,255,255)"
    },
};

function outlineBlockEdit( props ) {
    const { attributes, setAttributes } = props;
    const { hasOutline, outlineThickness, outlineColour } = attributes;

    return (
        <InspectorControls>
            <PanelBody title={__("Outline options", "mojblocks" )}>
                <ToggleControl
                    label="Outline"
                    checked={ hasOutline }
                    onChange={ value => setAttributes({ hasOutline: value }) }
                />
                <RangeControl
                    label={__("Thickness", "mojblocks" )}
                    help=""
                    value={ outlineThickness }
                    onChange={ value => setAttributes({ outlineThickness: value }) }
                    min={ 1 }
                    max={ 6 }
                />
                <PanelColorSettings
                    title={__("Colour", "mojblocks" )}
                    colorSettings={[
                        {
                            value: outlineColour,
                            onChange: value => setAttributes({ outlineColour: value }),
                            label: __('Outline colour', 'mojblocks')
                        }
                    ]}
                />
            </PanelBody>
        </InspectorControls>
    );
}
