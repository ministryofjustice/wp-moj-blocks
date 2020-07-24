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
            type: 'string',
            source: 'html',
            selector: '.mojuk-cta__heading-text'
        },
        ctaText: {
            type: 'string',
            source: 'html',
            selector: '.mojuk-cta__content'
        },
        buttonLabel: {
            type: 'string',
            source: 'html',
            selector: '.mojuk-button'
        },
        buttonLink: {
            type: 'string',
            source: 'attribute',
            selector: 'a.mojuk-button',
            attribute: 'href'
        },
    },

    edit: props => {
        let {
            attributes: {
                ctaTitle,
                ctaText,
                buttonLabel,
                buttonLink
            },
            className,
            setAttributes
        } = props;

        // Grab newCtaTitle, set the value of ctaTitle to newCtaTitle.
        let onChangeCtaTitle = newCtaTitle => {
            setAttributes({ ctaTitle: newCtaTitle });
        };

        // Grab newCtaText, set the value of ctaText to newCtaText.
        let onChangeCtaText = newCtaText => {
            setAttributes({ ctaText: newCtaText });
        };

        // Grab newButtonLabel, set the value of buttonLabel to newButtonLabel.
        let onChangeButtonLabel = newButtonLabel => {
            setAttributes({ buttonLabel: newButtonLabel });
        };

        // Grab newButtonLink, set the value of buttonLink to newButtonLink.
        let onChangeButtonLink = newButtonLink => {
            setAttributes({ buttonLink: newButtonLink });
        };

        return (
            <div className={`${className}`}>
                <div className="mojuk-cta__heading-container">
                    <h3 className="mojuk-cta__heading">
				  <span role="text">
					<span className="mojuk-cta__heading-text">
					  <RichText
                          placeholder={__('A great call-to-action title', 'mojblocks')}
                          value={ctaTitle}
                          onChange={onChangeCtaTitle}
                      />
					</span>
				  </span>
                    </h3>
                </div>
                <div className={'mojuk-cta__content'}>
                    <RichText
                        multiline="p"
                        placeholder={__('Some compelling text to send the message home!', 'mojblocks')}
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
                    className="mojuk-button"
                    value={buttonLabel}
                    onChange={onChangeButtonLabel}
                    placeholder="Button label"
                />
            </div>
        );
    },

    save: props => {
        let {
            attributes: {
                ctaTitle,
                ctaText,
                buttonLabel,
                buttonLink
            }
        } = props;

        return (
            <div className="mojuk-grid-column-width mojuk-cta--type">
                <div className="mojuk-cta__heading-container">
                    <h3 className="mojuk-cta__heading">
				 <span role="text">
					<span className="mojuk-cta__heading-text">
						<RichText.Content value={ctaTitle}/>
					</span>
				  </span>
                    </h3>
                </div>
                <div className="mojuk-cta__content">
                    <RichText.Content value={ctaText} multiline="p" />
                </div>
                <a href={buttonLink} className="mojuk-button">
                    <RichText.Content value={buttonLabel}/>
                </a>
            </div>
        );
    }
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
