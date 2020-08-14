/**
 * Reveal
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('mojblocks/reveal', {
    title: __('Reveal', 'mojblocks'),
    icon: 'controls-play',
    category: 'mojblocks',
    attributes: {
        revealTitle: {
            type: 'string',
            source: 'html',
            selector: '.mojblocks-reveal__title'
        },
        revealText: {
            type: 'string',
            source: 'html',
            selector: '.mojblocks-reveal__content'
        },
    },

    edit: props => {
        let {
            attributes: {
                revealTitle,
                revealText
            },
            className,
            setAttributes
        } = props;

        // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.
        let onChangeRevealTitle = newRevealTitle => {
            setAttributes({ revealTitle: newRevealTitle });
        };

        // Grab newRevealText, set the value of revealText to newRevealText.
        let onChangeRevealText = newRevealText => {
            setAttributes({ revealText: newRevealText });
        };

        return (
            <details className="govuk-details" data-module="govuk-details" open>
            <summary className="govuk-details__summary">
                <span className="mojblocks-reveal__title govuk-details__summary-text">
                        <RichText
                    value={revealTitle}
                    placeholder={__('Add reveal title', 'mojblocks')}
                    keepPlaceholderOnFocus
                    onChange={onChangeRevealTitle}
                    />
                </span>
            </summary>
            <div className="mojblocks-reveal__content govuk-details__text">
            <RichText
        multiline="p"
        placeholder={__('Add reveal content', 'mojblocks')}
        keepPlaceholderOnFocus
        onChange={onChangeRevealText}
        value={revealText}
        />
            </div>
            </details>

    );
    },

    save: props => {
        let {
            attributes: {
                revealTitle,
                revealText
            }
        } = props;

        return (
            <details className="govuk-details" data-module="govuk-details">
                <summary className="govuk-details__summary">
                    <span className="mojblocks-reveal__title govuk-details__summary-text">
                        <RichText.Content
                        value={revealTitle}
                        />
                    </span>
                </summary>
                <div className="mojblocks-reveal__content govuk-details__text">
                <RichText.Content value={revealText} multiline="p" />
                </div>
            </details>
    );
    }
});

