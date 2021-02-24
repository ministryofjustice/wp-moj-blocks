/**
 * Intro
 * A stylised intro section
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('mojblocks/intro', {
    title: __('Intro Text', 'mojblocks'),
    icon: 'editor-paragraph',
    category: 'mojblocks',
    attributes: {
        introText: {
            type: 'string',
        },
        introClassName: {
            type: 'string'
        }
    },

    edit: props => {

        const {
            attributes: {
                introText
            },
            className,
            setAttributes
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ introClassName: className });

        // Grab newIntroText, set the value of introText to newIntroText.
        const onChangeIntroText = newIntroText => {
            setAttributes({ introText: newIntroText });
        };

        return (
            <div className={`${className}`}>
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="govuk-grid-column-three-quarters">
                            <div className="mojblocks-intro--type">
                                <div className={'mojblocks-intro__content intro'}>
                                    <RichText
                                    multiline="p"
                                    placeholder={__('Some compelling text to send the message home', 'mojblocks')}
                                    keepPlaceholderOnFocus
                                    onChange={onChangeIntroText}
                                    value={introText}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    },
    // return null as frontend output is done via PHP
    save: () => null
});

