/**
 * Reveal
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
const { InnerBlocks } = wp.blockEditor;

registerBlockType('mojblocks/reveal', {
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
            },
            className
        } = props;

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

        // Set className attribute for PHP frontend to use
        setAttributes({ revealClassName: className });

        // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.
        const onChangeRevealTitle = newRevealTitle => {
            setAttributes({ revealTitle: newRevealTitle });
        };

        // Grab newrevealContent, set the value of revealContent to newrevealContent.
        const onChangeRevealContent = newRevealContent => {
            setAttributes({ revealContent: newRevealContent });
        };

        return ([
            <div className={`mojblocks-reveal`}>
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
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => {
        return <InnerBlocks.Content />;
    }
});

