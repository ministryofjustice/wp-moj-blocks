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
    title: __('Accordion (MoJ Blocks)', 'mojblocks'),
    description: __( 'Display content in an accordion format.' ),
    icon: "list-view",
    category: 'mojblocks',
    keywords: [ __( 'accordion' ), __( 'sections' ), __( 'lists' ) ],

    edit: props => {

        // Load allowed blocks on repeater
        const allowedBlocks = [ 'mojblocks/accordion-section' ];

        // Load template/block when block is selected
        const templates = [
            [ 'mojblocks/accordion-section', {} ]
        ];
  
        return (
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
                <InnerBlocks
                    template={ templates }
                    allowedBlocks={ allowedBlocks }
                />
            </div>
        )
      },

      save: props => {

        return (
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
                <InnerBlocks.Content />
            </div>
         )
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
            type: "string",
            source: "html",
            selector: ".govuk-accordion__section-button"
        },
        accordionSectionTextArea: {
            type: "string",
            source: "html",
            selector: ".govuk-body"
        }
    },

    edit: props => {

        const {
            attributes: { 
                accordionSectionTitle, 
                accordionSectionTextArea 
            },
            setAttributes
        } = props

        // Load allowed blocks to be added to accordion section body
        const allowedBlocks = [ 'core/heading','core/list', 'core/paragraph' ];

        const onChangeAccordionSectionTitle = newAccordionTitle => {
            setAttributes({ accordionSectionTitle: newAccordionTitle })
          }

        const onChangeAccordionSectionTextArea = newAccordionSectionTextArea => {
            setAttributes({ accordionSectionTextArea: newAccordionSectionTextArea })
        }
  
        return (
            <div className="govuk-accordion__section">
                <div className="govuk-accordion__section-header">
                <h3 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                    <RichText
                        placeholder={__('Add section title', 'mojblocks')}
                        value={ accordionSectionTitle }
                        onChange={ onChangeAccordionSectionTitle }
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
        )
      },

      save: props => {

        const {
            attributes: { 
                accordionSectionTitle, 
                accordionSectionTextArea 
            }
        } = props

        return (
            <div className="govuk-accordion__section">
                <div className="govuk-accordion__section-header">
                <h3 className="govuk-accordion__section-heading">
                    <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                    <RichText.Content value={ accordionSectionTitle } />
                    </span>
                </h3>
                </div>
                <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                    <div className="govuk-body">
                        <RichText.Content value={ accordionSectionTextArea } />
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
         )
      }
});
