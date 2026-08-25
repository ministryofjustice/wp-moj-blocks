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
 *
 * The editor's show/hide controls are rendered by these components. They used to
 * be injected after load by edit.js, using document.querySelector and a
 * MutationObserver on document.body.
 *
 * That still works today only because the editor is not yet iframed — on WP 7.0
 * a single apiVersion 1/2 block anywhere on the page forces the non-iframed
 * editor, and most blocks in this plugin are still v1. Once the last one is
 * converted, or on WP 7.1, the canvas becomes an iframe and the editor script's
 * `document` no longer contains any blocks.
 *
 * Rendering the controls here instead works either way, because Gutenberg
 * renders edit() output into the canvas document itself. It also means controls
 * appear on blocks added after first paint, which the MutationObserver approach
 * never handled.
 *
 * The markup deliberately reuses the class names the old script produced
 * (showHideAll / showHideThis, show-hide-arrow, show-hide-text, and the showAll
 * / showThis modifiers) so editor.scss continues to apply unchanged, including
 * the Welsh label overrides driven off .preview-welsh-true.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    Fragment,
    createContext,
    useContext,
    useState,
    useEffect,
} from '@wordpress/element';
import {
    RichText,
    InnerBlocks,
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import metadata from './block.json';
import sectionMetadata from '../accordion-section/block.json';

/**
 * Lets the parent accordion drive every section's collapsed state.
 *
 * collapseSignal increments on each "show/hide all" click. Sections watch the
 * signal rather than collapseAll itself, so that collapsing everything, opening
 * one section by hand, then collapsing everything again still works — the value
 * would not have changed the second time, but the signal has.
 */
const AccordionContext = createContext( {
    collapseAll: false,
    collapseSignal: 0,
    welsh: false,
} );

/**
 * The show/hide control.
 *
 * Both spans are intentionally empty: editor.scss supplies the arrow and the
 * label text via :before, including the Welsh translations.
 */
function ShowHideControl( { variant, collapsed, onToggle, label } ) {
    const base = variant === 'all' ? 'showHideAll' : 'showHideThis';
    const state = collapsed
        ? ( variant === 'all' ? 'showAll' : 'showThis' )
        : ( variant === 'all' ? 'hideAll' : 'hideThis' );

    return (
        <div
            className={ `${ base } ${ state }` }
            role="button"
            tabIndex={ 0 }
            aria-label={ label }
            aria-expanded={ ! collapsed }
            onClick={ onToggle }
            onKeyDown={ ( event ) => {
                if ( event.key === 'Enter' || event.key === ' ' ) {
                    event.preventDefault();
                    onToggle();
                }
            } }
        >
            <span className="show-hide-arrow"></span>
            <span className="show-hide-text"></span>
        </div>
    );
}

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
        // its data-module attribute and govuk-frontend styling untouched.
        //
        // render_callback_accordion_block() emits the same two-element structure
        // so the editor and the frontend agree.
        const blockProps = useBlockProps();

        const [ collapseAll, setCollapseAll ] = useState( false );
        const [ collapseSignal, setCollapseSignal ] = useState( 0 );

        const toggleAll = () => {
            setCollapseAll( ! collapseAll );
            setCollapseSignal( collapseSignal + 1 );
        };

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
                    <ShowHideControl
                        variant="all"
                        collapsed={ collapseAll }
                        onToggle={ toggleAll }
                        label={ collapseAll
                            ? __( 'Show all sections', 'mojblocks' )
                            : __( 'Hide all sections', 'mojblocks' ) }
                    />
                    <AccordionContext.Provider
                        value={ {
                            collapseAll,
                            collapseSignal,
                            welsh: !! controlLanguageWelsh,
                        } }
                    >
                        <InnerBlocks
                            template={ templates }
                            allowedBlocks={ allowedBlocks }
                        />
                    </AccordionContext.Provider>
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

        const { collapseAll, collapseSignal, welsh } = useContext( AccordionContext );
        const [ collapsed, setCollapsed ] = useState( false );

        // Follow the parent's show/hide all, without clobbering a section the
        // editor has since toggled by hand — hence watching the signal rather
        // than the value.
        useEffect( () => {
            if ( collapseSignal > 0 ) {
                setCollapsed( collapseAll );
            }
        }, [ collapseSignal ] );

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        //
        // Safe to put directly on .govuk-accordion__section: editor.scss only
        // attaches pseudo-elements to its children, not to the section element
        // itself. The one exception used to be the "content hidden" warning on
        // .accordion-hidden:after, which is now rendered as a real element below
        // for exactly that reason.
        const blockProps = useBlockProps( {
            className: 'govuk-accordion__section' + ( collapsed ? ' accordion-hidden' : '' ),
        } );

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
                <ShowHideControl
                    variant="this"
                    collapsed={ collapsed }
                    onToggle={ () => setCollapsed( ! collapsed ) }
                    label={ collapsed
                        ? ( welsh ? 'Dangos' : __( 'Show section', 'mojblocks' ) )
                        : ( welsh ? 'Cuddio' : __( 'Hide section', 'mojblocks' ) ) }
                />
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
                { collapsed && <div className="accordion-hidden-notice"></div> }
            </div>
        );
      },

    // When using InnerBlocks with dynamic blocks, you need to return the content.
    save: () => {
        return <InnerBlocks.Content />;
    }
});
