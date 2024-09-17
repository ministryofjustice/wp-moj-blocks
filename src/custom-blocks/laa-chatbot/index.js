/**
 * LAA Chatbot
 * A stylised intro section
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('mojblocks/laa-chatbot', {
    title: __('LAA Chatbot', 'mojblocks'),
    icon: 'format-chat',
    category: 'mojblocks',
    attributes: {
        chatbotClassName: {
            type: 'string'
        }
    },

    edit: props => {

        const {
            className,
            setAttributes
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ chatbotClassName: className });

        return (
            <div className={`${className} mojblocks-laa-chatbot`}>
                <p>LAA 8x8 Chatbot</p>
            </div>
    );
    },
    // return null as frontend output is done via PHP
    save: () => null
});

