/**
 * Route planner
 * Form for planning a route in Google Maps to a specific destination
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;
import { TextareaControl, RadioControl } from '@wordpress/components';

registerBlockType('mojblocks/route-planner', {
    title: __('Route planner', 'mojblocks'),
    description: __('Link to Google Directions', 'mojblocks'),
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
            default: ""
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
                <TextareaControl
                    __nextHasNoMarginBottom
                    label="Destination"
                    help="Enter a postcode or an address, lat-long also accepted."
                    value={ routeDestination }
                    onChange={ onChangeDestination }
                />,
                <RadioControl
                    label="Default travel method"
                    selected={ routeMethod }
                    options={ [
                        { label: 'Car', value: 'driving' },
                        { label: 'Public transport', value: 'transit' },
                    ] }
                    onChange={ onChangeMethod }
                />
            </InspectorControls>,
            <label class="govuk-label" for="postcodeInput">Enter a postcode or location</label>,
            <div id="postcodeInput-hint" class="govuk-hint">For example, SW1A 1AA</div>,
            <input disabled class="govuk-input govuk-input--width-10 govuk-!-margin-bottom-4" type="text" id="postcodeInput" aria-describedby="postcodeInput-hint"/>,
            <br />,
            <button class="govuk-button">Submit</button>
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});
