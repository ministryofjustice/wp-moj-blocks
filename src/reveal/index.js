/**
 * Reveal
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

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
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="govuk-grid-column-three-quarters">
                            <details className="govuk-details" data-module="govuk-details" open>
                                <summary className="govuk-details__summary">
                                    <span className="mojblocks-reveal__title govuk-details__summary-text" onkeypress="return RestrictSpace()">
                                        <RichText
                                        value={ revealTitle }
                                        placeholder={ __('Add reveal title', 'mojblocks') }
                                        keepPlaceholderOnFocus
                                        onChange={ onChangeRevealTitle }
                                        />
                                    </span>
                                </summary>
                                <div className="mojblocks-reveal__content govuk-details__text">
                                    <RichText
                                    multiline="p"
                                    placeholder={ __('Add reveal content', 'mojblocks') }
                                    keepPlaceholderOnFocus
                                    onChange={ onChangeRevealContent }
                                    value={ revealContent }
                                    />
                                </div>
                            </details>
                        </div>
                     </div>
                 </div>
            </div>
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});

