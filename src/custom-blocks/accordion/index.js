const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { InnerBlocks } = wp.blockEditor;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

/**
 * MOJBLOCKS: Accordion
 *
 * Display content in accordion layout.
 */
registerBlockType('mojblocks/accordion', {
    title: __('Accordion', 'mojblocks'),
    description: __( 'Display content in an accordion component.' ),
    icon: "list-view",
    category: 'mojblocks',
    keywords: [ __( 'accordion' ), __( 'sections' ), __( 'lists' ) ],
    example: {
        attributes: {
            controlLanguageWelsh: false
        },
    },
    attributes: {
        controlLanguageWelsh: {
            type: 'boolean'
        },
        accordionClassName: {
            type: 'string'
        }
    },

    edit: props => {
        const {
            setAttributes,
            attributes: {
                controlLanguageWelsh
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ accordionClassName: className });

        // Load allowed blocks on repeater
        const allowedBlocks = [ 'mojblocks/accordion-section' ];

        // Load template/block when block is selected
        const templates = [
            [ 'mojblocks/accordion-section', {} ]
        ];

        return ([
            <InspectorControls>
                <PanelBody
                        title="Language"
                        initialOpen={false}
                >
                    <PanelRow>
                        <ToggleControl
                            label="Set controls to Welsh"
                            help={
                                controlLanguageWelsh
                                    ? 'Controls are in Welsh'
                                    : 'Controls are in English'
                            }
                            checked={controlLanguageWelsh}
                            onChange={newControlLanguageWelsh => setAttributes({ controlLanguageWelsh: newControlLanguageWelsh }) }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>,
            <div className={'govuk-accordion preview-welsh-' + controlLanguageWelsh + ' ' + className} data-module="govuk-accordion" id="accordion-default" key="accordion-block">
                <InnerBlocks
                    template={ templates }
                    allowedBlocks={ allowedBlocks }
                />
            </div>
        ])
      },

    // When using InnerBlocks with dynamic blocks, you need to return the content.
    save: () => {
        return <InnerBlocks.Content />;
    }
});

/**
 * MOJBLOCKS: Accordion section
 *
 * Inner-block. Displayed only in the parent accordion block.
 */
registerBlockType("mojblocks/accordion-section", {
    title: __("Accordion Section", "mojblocks"),
    category: "mojblocks",
    parent: [ 'mojblocks/accordion' ],
    attributes: {
        accordionSectionTitle: {
            type: "string"
        },
        accordionSectionTextArea: {
            type: "string"
        },
        accordionSectionClassName: {
            type: "string"
        }
    },

    edit: props => {

        const {
            attributes: {
                accordionSectionTitle,
                accordionSectionTextArea
            },
            className,
            setAttributes
        } = props

        // Set className attribute for PHP frontend to use
        setAttributes({ accordionSectionClassName: className });

        // Load allowed blocks to be added to accordion section body
        const allowedBlocks = [ 'core/heading','core/list', 'core/paragraph' ];

        const onChangeAccordionTitle = newAccordionTitle => {
            setAttributes({ accordionSectionTitle: newAccordionTitle })
          }

        const onChangeAccordionSectionTextArea = newAccordionSectionTextArea => {
            setAttributes({ accordionSectionTextArea: newAccordionSectionTextArea })
        }

        return ([
            <div className={`${className} govuk-accordion__section`} key="accordion-block-section">
                <div className="govuk-accordion__section-header">
                <h3 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                    <RichText
                        placeholder={__('Add accordion section title', 'mojblocks')}
                        value={ accordionSectionTitle }
                        onChange={ onChangeAccordionTitle }
                        keepPlaceholderOnFocus={ true }
                    />
                    </span>
                </h3>
                </div>
                <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                    <div className="govuk-body">
                        <RichText
                            placeholder={__('Add accordion section content', 'mojblocks')}
                            value={ accordionSectionTextArea }
                            onChange={ onChangeAccordionSectionTextArea }
                            keepPlaceholderOnFocus={ true }
                        />
                        <InnerBlocks
                            allowedBlocks={ allowedBlocks }
                        />
                    </div>
                </div>
            </div>
        ]);
      },

    // When using InnerBlocks with dynamic blocks, you need to return the content.
    save: () => {
        return <InnerBlocks.Content />;
    }
});

/**
 * Internal dependencies
 */
import edit from './edit';
