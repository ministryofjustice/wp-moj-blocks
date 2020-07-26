/*
Block Name: MoJBlocks Accordion
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType("mojblocks/accordion", {
    title: __("MoJBlocks Accordion", "mojblocks"),
    icon: "list-view",
    category: "mojblocks",
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
            attributes: { accordionSectionTitle, accordionSectionTextArea },
            setAttributes
        } = props

        const onChangeAccordionSectionTitle = newAccordionTitle => {
            setAttributes({ accordionSectionTitle: newAccordionTitle })
          }

          const onChangeAccordionSectionTextArea = newAccordionSectionTextArea => {
            setAttributes({ accordionSectionTextArea: newAccordionSectionTextArea })
          }
  
        return (
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
                <div className="govuk-accordion__section ">
                    <div className="govuk-accordion__section-header">
                    <h2 className="govuk-accordion__section-heading">
                        <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                        <RichText
                            placeholder={__('Add accordion section title', 'mojblocks')}
                            value={ accordionSectionTitle }
                            onChange={ onChangeAccordionSectionTitle }
                            keepPlaceholderOnFocus={ true }
                        />
                        </span>
                    </h2>
                    </div>
                    <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                        <div className="govuk-body">
                            <RichText
                                placeholder={__('Add accordion content', 'mojblocks')}
                                value={ accordionSectionTextArea }
                                onChange={ onChangeAccordionSectionTextArea }
                                keepPlaceholderOnFocus={ true }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
      },

      save: props => {

        const {
            attributes: { accordionSectionTitle, accordionSectionTextArea }
        } = props

        return (
            <div className="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
                <div className="govuk-accordion__section ">
                    <div className="govuk-accordion__section-header">
                    <h2 className="govuk-accordion__section-heading">
                        <span className="govuk-accordion__section-button" id="accordion-default-heading-1">
                        <RichText.Content value={ accordionSectionTitle } />
                        </span>
                    </h2>
                    </div>
                    <div id="accordion-default-content-1" className="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
                        <div className="govuk-body">
                            <RichText.Content value={ accordionSectionTextArea } />
                        </div>
                    </div>
                </div>
            </div>
        )
      }
});
