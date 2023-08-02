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

/***
 * 
 * The following script is to mimic the behaviour of the accordion in the editor window.  
 * 
 */


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


const showThis_text = document.createTextNode("Show / Hide");
const showThis = document.createElement("p");
showThis.appendChild(showThis_text);
showThis.classList.add("hideThis");
showThis.classList.add("showHideThis");

const showAll_text = document.createTextNode("Show all sections / Hide all sections");
const showAll = document.createElement("p");
showAll.appendChild(showAll_text);
showAll.classList.add("hideAll");
showAll.classList.add("showHideAll");

waitForElm('.govuk-accordion').then((elm) => {
    elm.insertBefore(showAll, elm.firstChild);

    const sections = document.querySelectorAll(".govuk-accordion__section");

    sections.forEach((section) => {
        let showHideControl = showThis.cloneNode(true)
        section.insertBefore(showHideControl, section.lastChild);
        section.querySelector(".showHideThis").onclick = function() {
            if (section.querySelector(".showHideThis").classList.contains("hideThis")) {
                section.classList.add("accordion-hidden");
                section.querySelector(".showHideThis").classList.add("showThis");
                section.querySelector(".showHideThis").classList.remove("hideThis");
                if (elm.getElementsByClassName("hideThis") == 0) {
                    // if there is no hideThis left, we change the hide all to show all
                    elm.querySelector(".showHideAll").classList.add("showAll");
                    elm.querySelector(".showHideAll").classList.remove("hideAll");
                }
            } else {
                section.classList.remove("accordion-hidden");
                section.querySelector(".showHideThis").classList.add("hideThis");
                section.querySelector(".showHideThis").classList.remove("showThis");
                // there is now at least one hideThis, so we ensure hideAll is there instead of showAll
                elm.querySelector(".showHideAll").classList.add("hideAll");
                elm.querySelector(".showHideAll").classList.remove("showAll");
            }
        }
    });

    elm.querySelector(".showHideAll").onclick = function() {
        if (elm.querySelector(".showHideAll").classList.contains("hideAll")) {
            elm.querySelectorAll(".govuk-accordion__section").forEach(element => {
                element.classList.add("accordion-hidden");
                element.querySelectorAll(".showHideThis").forEach(element2 => {
                    //we ensure any hideThis becomes a showThis
                    element2.classList.add("showThis");
                    element2.classList.remove("hideThis");
                });
            });
            elm.querySelector(".showHideAll").classList.add("showAll");
            elm.querySelector(".showHideAll").classList.remove("hideAll");
        } else {
            elm.querySelectorAll(".govuk-accordion__section").forEach(element => {
                element.classList.remove("accordion-hidden");
                element.querySelectorAll(".showHideThis").forEach(element2 => {
                    //we ensure any showThis becomes a hideThis
                    element2.classList.add("hideThis");
                    element2.classList.remove("showThis");
                });
            });
            elm.querySelector(".showHideAll").classList.remove("showAll");
            elm.querySelector(".showHideAll").classList.add("hideAll");
        }
    };
});
