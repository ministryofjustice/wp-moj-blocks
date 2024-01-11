/**
 * Separator
 * GDS styled hr tag
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
import { useState } from '@wordpress/element';
import { SelectControl, RangeControl } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';

registerBlockType('mojblocks/separator', {
    title: __('Separator', 'mojblocks'),
    description: __('A section break', 'mojblocks'),
    category: 'mojblocks',
    icon: 'minus',
    keywords: [
        __('separator', 'mojblocks'),
        __('section', 'mojblocks'),
        __('break', 'mojblocks'),
        __('moj', 'mojblocks'),
    ],
    attributes: {
        separatorBreakSize: {
            type: 'string'
        },
        separatorThickness: {
            type: 'number',
            default: 1
        },
        separatorColour: {
            type: 'string',
            default: 'rgb(177, 180, 182)'
            // This is mid grey (GDS Mid Grey #b1b4b6)
            // Use rgb notation so it is picked up by the WordPress colour picker
        }
    },
    edit: props => {

        const {
            setAttributes,
            attributes: {
                separatorBreakSize,
                separatorThickness,
                separatorColour
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ separatorClassName: className });
        const optionList = [
            { label: "Extra large", value: 'xl' },
            { label: "Large", value: 'l' },
            { label: "Medium", value: 'm'},
        ]
        const setSize = useState( 'xl' );
        const onChangeBreakSize = newBreakSize => {
            setAttributes({ separatorBreakSize: newBreakSize });
            setSize( newBreakSize );
        };
        const onChangeThickness = value => {
            setAttributes( { separatorThickness: value } );
        };

        const onChangeColour = colour => {
            setAttributes( { separatorColour: colour } );
        };

        const marks = [
            {
                value: 1,
                label: '',
            },
            {
                value: 12,
                label: '',
            },
        ];

        return ([
            <InspectorControls>
                <PanelBody title={ __( 'Size', 'mojblocks' ) } initialOpen={true} >
                    <RangeControl
                        label={__("Thickness", "mojblocks" )}
                        help=""
                        value={ separatorThickness }
                        onChange={ onChangeThickness }
                        min={ 1 }
                        max={ 12 }
                        marks={ marks }
                    />
                    <PanelRow>
                        <SelectControl
                            label={__("Gap size", "mojblocks" )}
                            help=""
                            value={ separatorBreakSize }
                            options={ optionList }
                            onChange={ onChangeBreakSize }
                        />
                    </PanelRow>

                </PanelBody>
                <PanelColorSettings
                    title={__("Colour Settings", "mojblocks" )}
                    colorSettings={[
                        {
                            value: separatorColour,
                            onChange: onChangeColour,
                            label: __('Separator line colour', 'mojblocks')
                        }
                    ]}
                />
            </InspectorControls>,
            <hr
                class={
                    `govuk-section-break govuk-section-break--xl govuk-section-break--visible govuk-section-break--${separatorBreakSize}`
                }
                style={{
                    borderBottomWidth: separatorThickness,
                    borderBottomColor: separatorColour
                }}
            />
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});

domReady( function() {
    unregisterBlockType( 'core/separator' );
} );
