/**
 * Route planner
 * Form for planning a route in Google Maps to a specific destination
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, RadioControl } from '@wordpress/components';

import metadata from './block.json';

registerBlockType(metadata.name, {

    edit: props => {

        const {
            setAttributes,
            attributes: {
                routeDestination,
                routeMethod
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({
            className: 'mojblocks-route-planner'
                + (routeDestination.trim() ? '' : ' mojblocks-route-planner--empty')
        });

        const onChangeDestination = newDestination => {
            setAttributes( { routeDestination: newDestination } );
        };
        const onChangeMethod = newMethod => {
            setAttributes( { routeMethod: newMethod } );
        };

        return (
            <Fragment>
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
                    />
                    <RadioControl
                        label="Default travel method"
                        selected={ routeMethod }
                        options={ [
                            { label: 'No preference', value: '' },
                            { label: 'Motor vehicle', value: 'driving' },
                            { label: 'Public transport', value: 'transit' }
                        ] }
                        onChange={ onChangeMethod }
                    />

                </PanelBody>
            </InspectorControls>
            <form { ...blockProps }>
                <label className="govuk-label" htmlFor="postcodeInput">Enter a postcode or location</label>
                <div id="postcodeInput-hint" className="govuk-hint">For example, SW1A 1AA</div>
                <input className="govuk-input govuk-input--width-10 govuk-!-margin-bottom-4" type="text" id="postcodeInput" aria-describedby="postcodeInput-hint"/>
                <br />
                <button className="govuk-button">Submit</button>
            </form>
            </Fragment>
        );
    },
    // return null as frontend output is done via PHP
    save: () => null
});
