/**
 * Intro
 * A stylised intro section
 *
 * Block metadata — name, title, icon, category, attributes — lives in block.json
 * and is registered server-side from mojblocks.php. This file only supplies the
 * editor behaviour.
 *
 * The introClassName attribute in block.json is legacy: older intros persisted
 * the editor's generated className there so the PHP could read it back.
 * apiVersion 3 no longer passes className to edit(), and the render callback now
 * uses get_block_wrapper_attributes(), so nothing reads or writes it. It stays
 * registered only so it isn't stripped from content saved before that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

registerBlockType(metadata.name, {

    edit: props => {

        const {
            attributes: {
                introText
            },
            setAttributes
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({ className: 'mojblocks-intro' });

        // Grab newIntroText, set the value of introText to newIntroText.
        const onChangeIntroText = newIntroText => {
            setAttributes({ introText: newIntroText });
        };

        return (
            <div { ...blockProps }>
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

