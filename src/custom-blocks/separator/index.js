/**
 * Separator
 * GDS styled hr tag
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;
import { useState } from '@wordpress/element';
import { SelectControl } from '@wordpress/components';
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
        }
    },
    edit: props => {

        const {
            setAttributes,
            attributes: {
                separatorBreakSize,
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
        return ([
            <InspectorControls>
                <PanelBody title={ __( 'Size', 'mojblocks' ) } initialOpen={true} >
                    <PanelRow>
                        <SelectControl
                            label="Gap size"
                            help=""
                            value={ separatorBreakSize }
                            options={ optionList }
                            onChange={ onChangeBreakSize }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>,
            <hr
                class={
                    `govuk-section-break govuk-section-break--xl govuk-section-break--visible govuk-section-break--${separatorBreakSize}`
                }
            />
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});

domReady( function() {
    unregisterBlockType( 'core/separator' );
} );
