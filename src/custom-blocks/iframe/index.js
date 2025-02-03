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
    title: __('iFrame', 'mojblocks'),
    icon: 'editor-paragraph',
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
            // This code sets the URL, Width and Height for the iFrame from the code bopied in.
            let spacedOutIFrameCode = iFrameCode.replaceAll(">"," > ");
            let i = 0;
            while (spacedOutIFrameCode.indexOf(" =") >= 0 || spacedOutIFrameCode.indexOf("= ") >= 0) {
                // Remove any spaces around equals signs
                spacedOutIFrameCode = spacedOutIFrameCode.replaceAll(" =","=")
                spacedOutIFrameCode = spacedOutIFrameCode.replaceAll("= ","=")
                i++;
                if (i > 10) break;
            }
            let codeArray = spacedOutIFrameCode.split(" ");
            let iframeTag = false;
            setAttributes({ iFrameBorder: false } ); // set the frame to off, will be turned on if frameborder is present
            for (i=0;i<codeArray.length;i++) {
                let item=codeArray[i];
                let lowercase=item.toLowerCase();
                if (lowercase.indexOf("<iframe") >= 0) iframeTag = true;
                if (!iframeTag) continue;
                if (lowercase.substring(0,4) == "src=") {
                    //This is case sensitive so do not use lowercase.substring...
                    setAttributes({iFrameURL: item.substring(4).replaceAll("\"","").replaceAll("\'","")})
                }
                if (lowercase.substring(0,6) == "width=") {
                    setAttributes({iFrameWidth: Number(item.substring(6).replaceAll("\"","").replaceAll("\'",""))})
                }
                if (lowercase.substring(0,7) == "height=") {
                    setAttributes({iFrameHeight: Number(item.substring(7).replaceAll("\"","").replaceAll("\'",""))})
                }
                if (lowercase.substring(0,12) == "frameborder=") {
                    let borderValue = Number(item.substring(12).replaceAll("\"","").replaceAll("\'",""));
                    if (borderValue > 0) {
                        // if the value is not zero, we set border to true
                        console.log(borderValue);
                        setAttributes({ iFrameBorder: true } );
                    }
                }
                if (lowercase == "</iframe" || lowercase.indexOf("</iframe") >= 0) {
                    // the iFrame has come to an end, so we finish the loop
                    break;
                }
            }
        };

        return (
            <Fragment>
                <InspectorControls>
                <PanelBody
                        title={__('iFrame code parse')}
                        initialOpen={true}
                    >
                        <Text>
                            Use this section to automatically create the iFrame from code.
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
                        title={__('iFrame settings')}
                        initialOpen={false}
                    >
                        <Text>
                            Use this section to tweak all the settings of the iFrame.
                        </Text>
                        <TextControl
                            label="URL for iFrame"
                            help="This will be the URL that goes in the iFrame's src property"
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

