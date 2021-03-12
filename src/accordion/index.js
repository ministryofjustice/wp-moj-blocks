const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
const { InnerBlocks } = wp.blockEditor;

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
    attributes: {},

    edit: () => {

        // Load allowed blocks on repeater
        const allowedBlocks = [ 'mojblocks/accordion-section' ];

        // Load template/block when block is selected
        const templates = [
            [ 'mojblocks/accordion-section', {} ]
        ];

        return ([
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default" key="accordion-block">
                <InnerBlocks
                    template={ templates }
                    allowedBlocks={ allowedBlocks }
                />
            </div>
        ])
      },

    // return null as frontend output is done via PHP
    save: () => null
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
        accordionTitle: {
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
                accordionTitle,
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
            setAttributes({ accordionTitle: newAccordionTitle })
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
                        placeholder={__('Add section title', 'mojblocks')}
                        value={ accordionTitle }
                        onChange={ onChangeAccordionTitle }
                        keepPlaceholderOnFocus={ true }
                    />
                    </span>
                </h3>
                </div>
                <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                    <div className="govuk-body">
                        <RichText
                            placeholder={__('Add section content', 'mojblocks')}
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

    // return null as frontend output is done via PHP
    save: () => null
});
