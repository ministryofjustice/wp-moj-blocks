/**
 * Reveal
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('mojblocks/reveal', {
    apiVersion: 3,
    title: __('Reveal', 'mojblocks'),
    description: __("Arrow toggle to reveal text", "mojblocks"),
    icon: 'controls-play',
    category: 'mojblocks',
    attributes: {
        revealTitle: {
            type: 'string'
        },
        revealContent: {
            type: 'string'
        },
        /**
         * Legacy. Older reveals persisted the editor's generated className here
         * so the PHP could read it back. apiVersion 3 no longer passes
         * className to edit(), so nothing writes to this any more — it stays
         * registered only so the render callback can still fall back to it for
         * content saved before this change.
         */
        revealClassName: {
            type: 'string'
        }
    },
    edit: props => {

        const {
            setAttributes,
            attributes: {
                revealTitle,
                revealContent
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({ className: 'mojblocks-reveal' });

        // Load allowed blocks to be added to content
        const allowedBlocks = [ 'core/heading', 'core/paragraph' , 'core/list' ];

        var template = [];
        if (revealContent && revealContent != "") {
            //This is to support existing reveal blocks which used RichText prior to changes in October 2025
            let revealContentArray = revealContent.replaceAll("<p>","").split("</p>");
            revealContentArray.forEach(element => {
                if (element.trim().length) template.push([ 'core/paragraph', { content: `${element}` } ],)
            });
        }

        // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.
        const onChangeRevealTitle = newRevealTitle => {
            setAttributes({ revealTitle: newRevealTitle });
        };

        return (
            <div { ...blockProps }>
                <details className="govuk-details" data-module="govuk-details" open>
                    <summary className="govuk-details__summary">
                        <span className="mojblocks-reveal__title govuk-details__summary-text">
                            <RichText
                            value={ revealTitle }
                            placeholder={ __('Add reveal title', 'mojblocks') }
                            keepPlaceholderOnFocus
                            onChange={ onChangeRevealTitle }
                            />
                        </span>
                    </summary>
                    <div className="mojblocks-reveal__content govuk-details__text">
                        <InnerBlocks
                            allowedBlocks={allowedBlocks}
                            template={ template }
				            templateLock={ false } // or 'all'/'insert' to lock the structure
                        />
                    </div>
                </details>
            </div>
        );
    },
    /**
     * Deliberately does not call useBlockProps.save().
     *
     * This is a dynamic block: what save() returns is passed to
     * render_callback_reveal_block() as $content, and the PHP builds the outer
     * wrapper itself. Adding a wrapper here would double-wrap the frontend
     * markup and invalidate every reveal already saved in the database.
     */
    save: () => {
        return <InnerBlocks.Content />;
    }
});

