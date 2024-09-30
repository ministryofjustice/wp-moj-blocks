import {
	SelectControl, RangeControl, ToggleControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, MediaUpload, InnerBlocks, PanelColorSettings } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;

registerBlockType("mojblocks/hero", {
    title: __("Hero", "mojblocks"),
    description: __("Full width hero banner with title and text", "mojblocks"),
    category: "mojblocks",
    icon: "schedule",
    attributes: {
        backgroundImage: {
            type: 'string'
        },
        heroClassName: {
            type: 'string'
        },
        heroImagePosition: {
            type: 'string'
        },
        heroImageWide: {
            type: 'boolean',
            default: true
        },
        overlayBackgroundColour: {
            type: 'string',
            default: 'rgb(255, 255, 255)'
            // This is white
            // Use rgb notation so it is picked up by the WordPress colour picker
        },
        overlayBackgroundOpacity: {
            type: 'number',
            default: 1
        },
        overlayPosition: {
            type: 'string',
            default: 'inset'
        },
        overlayCorners: {
            type: 'number',
            default: 0
        },
        overlayTilt: {
            type: 'number',
            default: 0
        }
    },
    edit: props => {
        const {
            setAttributes,
            attributes: {
                backgroundImage,
                heroImagePosition,
                heroImageWide,
                overlayBackgroundColour,
                overlayBackgroundOpacity,
                overlayPosition,
                overlayCorners,
                overlayTilt
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ heroClassName: className });

        // Load allowed blocks to be added to hero content
        const allowedBlocks = ['core/heading','core/list','core/paragraph' ];
        //const allowedBlocks = ['core/group' ];


        const onChangeBackgroundImage = imageObject => {

            var imageSizes = imageObject.sizes;

            // determine the image size displayed with fallback
            var image = (typeof imageSizes.hero !== 'undefined')
            ? imageSizes.hero.url
            : imageSizes.full.url;

            setAttributes({ backgroundImage: image })
        }

        const onChangeColour = colour => {
            setAttributes( { overlayBackgroundColour: colour } );
        };
        
        const onChangeOpacity = opacity => {
            setAttributes( { overlayBackgroundOpacity: opacity } );
        };
        
        const onChangeOverlayPosition = position => {
            setAttributes( { overlayPosition: position } );
        };
        
        const onChangeCorners = cornerRadius => {
            setAttributes( { overlayCorners: cornerRadius } );
        };
        
        const onChangeTilt = tilt => {
            setAttributes( { overlayTilt: tilt } );
        };

        const overlayPositionOptionList = [
            { label: "Beneath inset", value: 'inset' },
            { label: "Bottom", value: 'bottom' },
            { label: "Middle", value: 'middle' },
            { label: "Top", value: 'top' },
        ]
        const imagePositionOptionList = [
            { label: "Centre", value: 'center' },
            { label: "Top", value: 'top' },
            { label: "Bottom", value: 'bottom' },
            { label: "Left", value: 'left' },
            { label: "Right", value: 'right' },
            { label: "Top left", value: 'top left' },
            { label: "Top right", value: 'top right' },
            { label: "Bottom left", value: 'bottom left' },
            { label: "Bottom right", value: 'bottom right' },
        ]
        const setPosition = useState( 'center' );

        const marks = [
            {
                value: 0,
                label: '0',
            },
            {
                value: 0.25,
                label: '¼',
            },
            {
                value: 0.5,
                label: '½',
            },
            {
                value: 0.75,
                label: '¾',
            },
            {
                value: 1,
                label: '1',
            },
        ];

        const onChangeImagePosition = newImagePosition => {
            setAttributes({ heroImagePosition: newImagePosition });
            setPosition( newImagePosition );
        };

        const onChangeImageWidth = imageWidth => {
            setAttributes( { heroImageWide: imageWidth } );
        };

        return ([
            <InspectorControls>
                <PanelBody title={ __( 'Choose hero block banner image', 'mojblocks' ) } initialOpen={true} >
                <label className="block-editor-block-hero"><p>For best results, uploaded images must meet a minimum
                 size of 1366×683 pixels (or aspect ratio of 2:1).
                 </p></label>
                    <PanelRow>
                        <MediaUpload
                        onSelect={ onChangeBackgroundImage }
                        type="image"
                        value={ backgroundImage }
                        render={({ open }) => (
                            <button className="button button-primary button-hero" onClick={open}>
                                Upload image
                            </button>
                            )}
                        />
                    </PanelRow>
                    <PanelRow>
                        <ToggleControl
                            label="Full width"
                            help={
                                heroImageWide === true
                                ? 'The image will be full width up to 1400px'
                                : 'The image will be the same as the content width'
                            }
                            checked={ heroImageWide }
                            onChange={ onChangeImageWidth }
                        />
                    </PanelRow>
                    <PanelRow>
                        <SelectControl
                            label="Image position"
                            help=""
                            value={ heroImagePosition }
                            options={ imagePositionOptionList }
                            onChange={ onChangeImagePosition }
                        />
                    </PanelRow>
                </PanelBody>
                <PanelColorSettings
                    title={__("Colour Settings", "mojblocks" )}
                    colorSettings={[
                        {
                            value: overlayBackgroundColour,
                            onChange: onChangeColour,
                            label: __('Overlay background colour', 'mojblocks')
                        }
                    ]}
                />
                <PanelBody title={ __( 'Overlay styles', 'mojblocks' ) } initialOpen={true} >
                    <RangeControl
                        label={__("Opacity", "mojblocks" )}
                        help=""
                        value={ overlayBackgroundOpacity }
                        onChange={ onChangeOpacity }
                        min={ 0 }
                        max={ 1 }
                        marks={ marks }
                        step={0.1}
                    />
                    <SelectControl
                        label="Overlay position"
                        help=""
                        value={ overlayPosition }
                        options={ overlayPositionOptionList }
                        onChange={ onChangeOverlayPosition }
                    />
                    <RangeControl
                        label={__("Corner roundiness", "mojblocks" )}
                        help="The higher the number, the more rounded the corners"
                        value={ overlayCorners }
                        onChange={ onChangeCorners }
                        min={ 0 }
                        max={ 25 }
                        step={1}
                    />
                    {(overlayPosition == "middle") && (<RangeControl
                        label={__("Tilt", "mojblocks" )}
                        value={ overlayTilt }
                        onChange={ onChangeTilt }
                        min={ -25 }
                        max={ 25 }
                        step={1}
                    />)}
                    
                </PanelBody>
            </InspectorControls>,
        <section className={`${className} mojblocks-hero ${heroImageWide ? '' : 'mojblocks-hero--narrow'}`} >
            <div className="mojblocks-hero__image" style={{
                backgroundImage: `url(${ backgroundImage })`,
                backgroundSize: 'cover',
                backgroundPosition: `${heroImagePosition}`
            }}>
            </div>

            <div className="govuk-width-container">
                <div className={`govuk-grid-row mojblocks-hero__overlay-container mojblocks-hero__overlay-container--${overlayPosition}`}>
                    <div
                        className="mojblocks-hero__overlay"
                        style={{
                            borderRadius: `${overlayCorners}px`,
                            rotate: `${overlayPosition == "middle" ? overlayTilt : '0'}deg`
                        }}
                    >
                        <div className="mojblocks-hero__overlay__background" style={{
                            backgroundColor: `${overlayBackgroundColour}`,
                            opacity: `${overlayBackgroundOpacity}`,
                        }}></div>
                        <InnerBlocks
                            allowedBlocks={ allowedBlocks }
                        />
                    </div>
                </div>
            </div>

        </section>
    ])

    },
    // return null as frontend output is done via PHP
    save: () => {
        return <InnerBlocks.Content />;
    }
});
