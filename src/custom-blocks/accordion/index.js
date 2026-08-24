/**
 * MOJBLOCKS: Accordion
 *
 * Display content in accordion layout.
 *
 * Two blocks are registered from this file — mojblocks/accordion and its child
 * mojblocks/accordion-section. Their metadata lives in block.json files, which
 * are registered server-side from mojblocks.php:
 *
 *   src/custom-blocks/accordion/block.json
 *   src/custom-blocks/accordion-section/block.json
 *
 * The section's metadata sits in its own folder because webpack.mix.js copies
 * block.json files with a one-per-folder glob.
 *
 * The accordionClassName and accordionSectionClassName attributes are legacy:
 * older accordions persisted the editor's generated className there so the PHP
 * could read it back. apiVersion 3 no longer passes className to edit(), and the
 * render callbacks now use get_block_wrapper_attributes(), so nothing reads or
 * writes them. They stay registered only so they aren't stripped from content
 * saved before that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import {
    RichText,
    InnerBlocks,
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import metadata from './block.json';
import sectionMetadata from '../accordion-section/block.json';

registerBlockType(metadata.name, {

    edit: props => {
        const {
            setAttributes,
            attributes: {
                controlLanguageWelsh,
                wideContent
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        //
        // Deliberately a separate outer div, with .govuk-accordion kept inside.
        //
        // editor.scss draws "Accordion start" and "Accordion end" labels using
        // :before and :after on .govuk-accordion. Under apiVersion 3 the element
        // carrying blockProps is the block's own element, and Gutenberg draws
        // its selection outline with ::after and inset: 0 on that element — so
        // putting blockProps directly on .govuk-accordion would make the
        // "Accordion end" label stretch to fill the whole block when selected.
        //
        // Keeping them on separate elements also leaves .govuk-accordion holding
        // its data-module attribute and govuk-frontend styling untouched, and
        // the mimicry script in edit.js still finds it by class.
        //
        // render_callback_accordion_block() emits the same two-element structure
        // so the editor and the frontend agree.
        const blockProps = useBlockProps();

        // Load allowed blocks on repeater
        const allowedBlocks = [ 'mojblocks/accordion-section' ];

        // Load template/block when block is selected
        const templates = [
            [ 'mojblocks/accordion-section', {} ]
        ];

        return (
            <Fragment>
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
                <PanelBody
                        title="Breadth"
                        initialOpen={false}
                >
                    <PanelRow>
                        <ToggleControl
                            label="Allow wide content"
                            help={
                                wideContent
                                    ? 'Content will be wide (if page template allows)'
                                    : 'Content restricted to more readable width'
                            }
                            checked={wideContent}
                            onChange={newWideContent => setAttributes({ wideContent: newWideContent }) }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div { ...blockProps }>
                <div
                    className={'govuk-accordion preview-welsh-' + controlLanguageWelsh + ' wide-content-' + wideContent}
                    data-module="govuk-accordion"
                    id="accordion-default"
                >
                    <InnerBlocks
                        template={ templates }
                        allowedBlocks={ allowedBlocks }
                    />
                </div>
            </div>
            </Fragment>
        )
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
registerBlockType(sectionMetadata.name, {

    edit: props => {

        const {
            attributes: {
                accordionSectionTitle,
                accordionSectionTextArea
            },
            setAttributes
        } = props

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        //
        // Safe to put directly on .govuk-accordion__section: editor.scss only
        // attaches pseudo-elements to its children (__section-header:before and
        // __section-content:after), not to the section element itself, so there
        // is nothing here to collide with Gutenberg's selection styles.
        const blockProps = useBlockProps({ className: 'govuk-accordion__section' });

        // Load allowed blocks to be added to accordion section body
        const allowedBlocks = [ 'core/heading','core/list', 'core/paragraph', 'core/file' ];

        const onChangeAccordionTitle = newAccordionTitle => {
            setAttributes({ accordionSectionTitle: newAccordionTitle })
          }

        const onChangeAccordionSectionTextArea = newAccordionSectionTextArea => {
            setAttributes({ accordionSectionTextArea: newAccordionSectionTextArea })
        }

        return (
            <div { ...blockProps }>
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
                <div id="accordion-default-content-1" className="govuk-accordion__section-content">
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
        );
      },

    // When using InnerBlocks with dynamic blocks, you need to return the content.
    save: () => {
        return <InnerBlocks.Content />;
    }
});

/**
 * Internal dependencies
 *
 * Imported for its side effects: edit.js adds the show/hide controls that mimic
 * the accordion's frontend behaviour inside the editor.
 */
import edit from './edit';
