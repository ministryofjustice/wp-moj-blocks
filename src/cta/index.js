/**
 * CTA
 * A stylised call to action displaying a title, text and cta button
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { RichText, URLInputButton } from '@wordpress/block-editor';

registerBlockType('mojblocks/cta', {
    title: __('Call to Action', 'mojblocks'),
    icon: 'megaphone',
    category: 'mojblocks',
    keywords: [ __( 'cta' ), __( 'Call to Action' ), __( 'banner' ) ],
    example: {
        attributes: {
            ctaTitle: 'Interact with this amazing CTA!',
            ctaText: 'This is the CTA text',
            buttonLabel: 'Click me now!',
            buttonLink: 'https://intranet.justice.gov.uk/'
        },
    },
    attributes: {
        ctaTitle: {
            type: 'string'
        },
        ctaText: {
            type: 'string'
        },
        buttonLabel: {
            type: 'string'
        },
        buttonLink: {
            type: 'string'
        },
        ctaClassName: {
            type: 'string'
        }
    },

    edit: props => {
        const {
            setAttributes,
            attributes: {
                ctaTitle,
                ctaText,
                buttonLink,
                buttonLabel
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ ctaClassName: className });

        // Grab newCtaTitle, set the value of ctaTitle to newCtaTitle.
        const onChangeCtaTitle = newCtaTitle => {
            setAttributes({ ctaTitle: newCtaTitle });
        };

        // Grab newCtaText, set the value of ctaText to newCtaText.
        const onChangeCtaText = newCtaText => {
            setAttributes({ ctaText: newCtaText });
        };

        // Grab newButtonLabel, set the value of buttonLabel to newButtonLabel.
        const onChangeButtonLabel = newButtonLabel => {
            setAttributes({ buttonLabel: newButtonLabel });
        };

        // Grab newButtonLink, set the value of buttonLink to newButtonLink.
        const onChangeButtonLink = newButtonLink => {
            setAttributes({ buttonLink: newButtonLink });
        };

        return (
            <div className={`${className}  mojblocks-cta`}>
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div class="govuk-grid-column-three-quarters">
                            <div className="mojblocks-cta__heading-container">
                                <h2 className="mojblocks-cta__heading">
                                <span role="text">
                                    <span className="mojblocks-cta__heading-text">
                                        <RichText
                                            placeholder={__('A great call-to-action title', 'mojblocks')}
                                            keepPlaceholderOnFocus
                                            value={ctaTitle}
                                            onChange={onChangeCtaTitle}
                                        />
                                    </span>
                                </span>
                                </h2>
                            </div>
                            <div className={'mojblocks-cta__content'}>
                                <RichText
                                    multiline="p"
                                    placeholder={__('Some compelling text to send the message home!', 'mojblocks')}
                                    keepPlaceholderOnFocus
                                    onChange={onChangeCtaText}
                                    value={ctaText}
                                />
                            </div>
                            <URLInputButton
                                className="mojblocks-dropdown__input"
                                label={__('CTA Link', 'mojblocks')}
                                onChange={onChangeButtonLink}
                                url={buttonLink}
                            />
                            <RichText
                                className="mojblocks-button"
                                value={buttonLabel}
                                onChange={onChangeButtonLabel}
                                placeholder="Button label"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    save: () => null

});

// style variations
registerBlockStyle('mojblocks/cta',
    {
        name: 'moj-blue',
        label: 'MoJ Blue',
        isDefault: true
    }
);
registerBlockStyle('mojblocks/cta',
    {
        name: 'judicial-teal',
        label: 'Judicial Teal',
    }
);
