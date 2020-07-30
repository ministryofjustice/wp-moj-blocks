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
            source: 'html',
            selector: '.mojblocks-intro__content'
        },
    },

    edit: props => {
        let {
            attributes: {
                introText
            },
            className,
            setAttributes
        } = props;

        // Grab newIntroText, set the value of introText to newIntroText.
        let onChangeIntroText = newIntroText => {
            setAttributes({ introText: newIntroText });
        };

        return (
            <div className="mojblocks-intro--type">
                <div className={'mojblocks-intro__content intro'}>
                    <RichText
                    multiline="p"
                    placeholder={__('Some compelling text to send the message home!', 'mojblocks')}
                    keepPlaceholderOnFocus
                    onChange={onChangeIntroText}
                    value={introText}
                    />
                </div>

            </div>
    );
    },

    save: props => {
        let {
            attributes: {
                introText
            }
        } = props;

        return (
            <div className="mojblocks-intro--type">

                <div className="mojblocks-intro__content intro">
                    <RichText.Content value={introText} multiline="p" />
                </div>
            </div>
    );
    }
});

