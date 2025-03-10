/**
 * iFrame
 * A stylised iFrame section
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import classnames from 'classnames';
import { __experimentalText as Text } from '@wordpress/components';
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

import { RangeControl } from '@wordpress/components';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';
import { Button } from '@wordpress/components'

registerBlockType('mojblocks/iframe', {
    title: __('Inline Frame (iframe)', 'mojblocks'),
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false"><path d="M18.5 5.5h-13c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm.5 11c0 .3-.2.5-.5.5h-13c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5h13c.3 0 .5.2.5.5v9zM6.5 12H8v-2h2V8.5H6.5V12zm9.5 2h-2v1.5h3.5V12H16v2z"></path></svg>,
    category: 'mojblocks',
    attributes: {
        iFrameURL: {
            type: "string",
        },
        iFrameClassName: {
            type: "string",
        },
        iFrameWidth: {
            type: "number",
            default: 400
        },
        iFrameHeight: {
            type: "number",
            default: 300
        },
        iFrameBorder: {
            type: "boolean",
            default: false
        },
        iFrameCentre: {
            type: "boolean",
            default: false
        },
        iFrameCode: {
            type: "string",
        },
        iFrameButton: {
            type: "boolean",
            default: false
        },
    },

    edit: props => {

        const {
            attributes: {
                iFrameURL,
                iFrameWidth,
                iFrameHeight,
                iFrameBorder,
                iFrameCentre,
                iFrameCode,
                iFrameButton,
                iFrameClassName
            },
            className,
            setAttributes
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ iFrameClassName: className });

        const setIFrameURL = newIFrameURL => {
            setAttributes({ iFrameURL: newIFrameURL } );
        };
        const setIFrameWidth = newIFrameWidth => {
            setAttributes({ iFrameWidth: newIFrameWidth } );
        };
        const setIFrameHeight = newIFrameHeight => {
            setAttributes({ iFrameHeight: newIFrameHeight } );
        };
        const setIFrameBorder = newIFrameBorder => {
            setAttributes({ iFrameBorder: newIFrameBorder } );
        };
        const setIFrameCentre = newIFrameCentre => {
            setAttributes({ iFrameCentre: newIFrameCentre } );
        };
        const setIFrameCode = newIFrameCode => {
            setAttributes({ iFrameCode: newIFrameCode } );
            let lowercaseCode = newIFrameCode.toLowerCase();
            if (lowercaseCode.indexOf("<iframe") >= 0 && lowercaseCode.indexOf("src") > 0) {
                setAttributes({iFrameButton: true});
            } else {
                setAttributes({iFrameButton: false});
            }
        };
        const readIFrameCode = x => {
            // This code sets the URL, Width and Height for the iFrame from the code copied in.
            let i = 0;
            while (iFrameCode.indexOf(" =") >= 0 || iFrameCode.indexOf("= ") >= 0) {
                // Remove any spaces around equals signs
                iFrameCode = iFrameCode.replaceAll(" =","=")
                iFrameCode = iFrameCode.replaceAll("= ","=")
                i++;
                if (i > 100) break;
            }
            let src = iFrameCode.match(/src=..*?(?=[*"' ])/,"i");
            let width = iFrameCode.match(/width=..*?(?=[*"' ])/,"i");
            let height = iFrameCode.match(/height=..*?(?=[*"' ])/,"i");
            let frameborder = iFrameCode.match(/frameborder=..*?(?=[*"' ])/,"i");

            if (src) {
                // src is required
                let srcValue = src[0].replaceAll("\"","").replaceAll("\'","").substring(4); // src= (4), we don't know if quotes have been used
                setAttributes({iFrameURL: srcValue});
                if (width) {
                    let widthValue = Number(width[0].substring(7)); // width=" (7)
                    setAttributes({iFrameWidth: widthValue});
                }
                if (height) {
                    let heightValue = Number(height[0].substring(8)); // height=" (8)
                    setAttributes({iFrameHeight: heightValue});
                }
                let borderValue;
                if (!frameborder || frameborder[0] == 'frameborder="0' || frameborder[0] == "frameborder='0") {
                    borderValue = false;
                } else {
                    borderValue = true;
                }
                setAttributes({ iFrameBorder: borderValue } );
            }
        };

        return (
            <Fragment>
                <InspectorControls>
                <PanelBody
                        title={__('iframe code parse')}
                        initialOpen={true}
                    >
                        <Text>
                            Use this section to automatically create the iframe from code.
                        </Text>
                        <TextareaControl
                            label="Code"
                            help="Copy in provided iframe code, then click the button below to generate it"
                            value={ iFrameCode }
                            onChange={ setIFrameCode }
                        />
                        <Button
                            variant="primary"
                            disabled={(iFrameButton) ? false : true}
                            onClick={ readIFrameCode }
                        >
                            Generate
                        </Button>
                    </PanelBody>
                    <PanelBody
                        title={__('Settings')}
                        initialOpen={true}
                    >
                        <ToggleControl
                            label="Centre iframe"
                            checked={ iFrameCentre }
                            onChange={ setIFrameCentre }
                        />
                    </PanelBody>
                    <PanelBody
                        title={__('Advanced settings')}
                        initialOpen={false}
                    >
                        <Text>
                            Use this section to tweak all the settings of the iframe.
                        </Text>
                        <TextControl
                            label="URL for iframe"
                            help="This will be the URL that goes in the iframe's src property"
                            value={ iFrameURL }
                            onChange={ setIFrameURL }
                        />
                        <RangeControl
                            label="Width"
                            min= {200}
                            max= {930}
                            step= {10}
                            value= { iFrameWidth }
                            onChange={ setIFrameWidth }
                        />
                        <RangeControl
                            label="Height"
                            min= {100}
                            max= {600}
                            step= {5}
                            value= { iFrameHeight }
                            onChange={ setIFrameHeight }
                        />
                        <ToggleControl
                            label="Border"
                            checked={ iFrameBorder }
                            onChange={ setIFrameBorder }
                        />
                    </PanelBody>
                </InspectorControls>    

                <div
                    className="iframe-preview-overlay"
                    width={(iFrameWidth != null && iFrameWidth > 0) ? iFrameWidth :'400'}
                    height={(iFrameHeight > 0) ? iFrameHeight :'300'}
                >

                </div>
                <iframe
                    className={ classnames(
                        'moj-block-iframe',
                        (iFrameBorder) ? "moj-block-iframe--border" : "",
                        (iFrameCentre) ? "moj-block-iframe--centre" : "",
                        iFrameClassName
                    )}
                    src={(iFrameURL && iFrameURL.substring(0, 8) == "https://") ? iFrameURL : ""}
                    width={(iFrameWidth != null && iFrameWidth > 0) ? iFrameWidth : "400"}
                    height={(iFrameHeight > 0) ? iFrameHeight : "300"}
                ></iframe>
            </Fragment>
        );
    },
    // return null as frontend output is done via PHP
    save: () => null
});

