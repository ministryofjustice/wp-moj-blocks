/**
 * Route planner
 * Form for planning a route in Google Maps to a specific destination
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import classnames from 'classnames';
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { TextareaControl, RadioControl } from '@wordpress/components';

registerBlockType('mojblocks/route-planner', {
    title: __('Route planner', 'mojblocks'),
    description: __('Opens a new tab with Google directions to the destination.', 'mojblocks'),
    category: 'mojblocks',
    icon: 'car',
    keywords: [
        __('postcode', 'mojblocks'),
        __('map', 'mojblocks'),
        __('drive', 'mojblocks'),
    ],
    attributes: {
        routeDestination: {
            type: 'string',
            default: ""
        },
        routeMethod: {
            type: 'string',
            default: "driving"
        }
    },
    edit: props => {

        const {
            setAttributes,
            attributes: {
                routeDestination,
                routeMethod
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        const onChangeDestination = newDestination => {
            setAttributes( { routeDestination: newDestination } );
        };
        const onChangeMethod = newMethod => {
            setAttributes( { routeMethod: newMethod } );
        };

        return ([
            <InspectorControls>
                <PanelBody
                        title={__('Destination details')}
                        initialOpen={true}
                    >
                    <TextareaControl
                        __nextHasNoMarginBottom
                        label="Destination"
                        help="Enter a postcode or an address, lat-long also accepted if Google doesn't provide the correct location."
                        value={ routeDestination }
                        onChange={ onChangeDestination }
                    />,
                    <RadioControl
                        label="Default travel method"
                        selected={ routeMethod }
                        options={ [
                            { label: 'Car', value: 'driving' },
                            { label: 'Public transport', value: 'transit' },
                            { label: 'No preference', value: '' }
                        ] }
                        onChange={ onChangeMethod }
                    />

                </PanelBody>
            </InspectorControls>,
            <form className={ classnames(
                'mojblocks-route-planner',
                (routeDestination.trim()) ? "" : "mojblocks-route-planner--empty",
                className
            )}>
                <label class="govuk-label" for="postcodeInput">Enter a postcode or location</label>,
                <div id="postcodeInput-hint" class="govuk-hint">For example, SW1A 1AA</div>,
                <input disabled class="govuk-input govuk-input--width-10 govuk-!-margin-bottom-4" type="text" id="postcodeInput" aria-describedby="postcodeInput-hint"/>,
                <br />,
                <button class="govuk-button">Submit</button>
            </form>
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});
