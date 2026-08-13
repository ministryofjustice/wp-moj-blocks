/**
 * Separator
 * GDS styled hr tag
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    PanelColorSettings,
    useBlockProps,
} from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, RangeControl } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';

import metadata from './block.json';

const gapOptions = [
    { label: "Extra large", value: 'xl' },
    { label: "Large", value: 'l' },
    { label: "Medium", value: 'm'},
];

const widthOptions = [
    { label: "Full width", value: "0" },
    { label: "Two-thirds width", value: "33%"},
    { label: "Half width", value: "50%"},
    { label: "Third width", value: "67%"},
    { label: "Quarter width", value: "75%"},
    { label: "Fixed width 1", value: "calc(100% - 111px)" },
    { label: "Fixed width 2", value: "calc(100% - 222px)" },
    { label: "Fixed width 3", value: "calc(100% - 333px)" },
    { label: "Fixed width 4", value: "calc(100% - 666px)" },
];

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

registerBlockType(metadata.name, {
    edit: props => {

        const {
            setAttributes,
            attributes: {
                separatorBreakSize,
                separatorThickness,
                separatorWidth,
                separatorColour
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop —
        // the render callback reads the className attribute directly.
        const blockProps = useBlockProps({
            className: `govuk-section-break govuk-section-break--visible govuk-section-break--${separatorBreakSize}`,
            style: {
                borderBottomWidth: separatorThickness,
                borderBottomColor: separatorColour,
                marginRight: separatorWidth,
            },
        });

        const onChangeBreakSize = newBreakSize => {
            setAttributes({ separatorBreakSize: newBreakSize });
        };

        const onChangeWidth = newWidth => {
            setAttributes({ separatorWidth: newWidth });
        };

        const onChangeThickness = newThickness => {
            setAttributes( { separatorThickness: newThickness } );
        };

        const onChangeColour = colour => {
            setAttributes( { separatorColour: colour } );
        };

        return (
            <Fragment>
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
                                label={__("Gap", "mojblocks" )}
                                help=""
                                value={ separatorBreakSize }
                                options={ gapOptions }
                                onChange={ onChangeBreakSize }
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label={__("Width", "mojblocks" )}
                                help="Exact widths will never be more than full width"
                                value={ separatorWidth }
                                options={ widthOptions }
                                onChange={ onChangeWidth }
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
                </InspectorControls>
                <hr { ...blockProps } />
            </Fragment>
        );
    },
    // return null as frontend output is done via PHP
    save: () => null
});

domReady( function() {
    unregisterBlockType( 'core/separator' );
} );
