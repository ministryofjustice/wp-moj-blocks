/**
 * Banner block
 *
 * Banner with an inner-block title and a call to action button.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
    RichText,
    InnerBlocks,
    URLInputButton,
    useBlockProps,
} from '@wordpress/block-editor';

import metadata from './block.json';

// Blocks an editor is allowed to place inside the banner title.
const allowedBlocks = [ 'core/heading' ];

const banner_template = [
    [ 'core/heading', { placeholder: 'Banner Title' } ]
];

registerBlockType(metadata.name, {
    edit: props => {
        const {
            setAttributes,
            attributes: {
                buttonLink,
                buttonLabel
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({ className: 'mojblocks-banner' });

        const onChangeButtonLink = newButtonLink => {
            setAttributes({ buttonLink: newButtonLink })
        }

        const onChangeButtonLabel = newButtonLabel => {
            setAttributes({ buttonLabel: newButtonLabel })
        }

        return (
            <div { ...blockProps }>

                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="govuk-grid-column-two-thirds">
                                <div  className="mojblocks-banner__title">
                                    <InnerBlocks
                                    allowedBlocks={ allowedBlocks }
                                    template={ banner_template }
                                    templateLock="all"
                                    />
                                </div>
                        </div>
                        <div className="govuk-grid-column-one-third">
                            <URLInputButton
                                className="mojblocks-dropdown__input"
                                label={__('Button Link', 'mojblocks')}
                                onChange={onChangeButtonLink}
                                url={buttonLink}
                                />
                                <RichText
                                className="mojblocks-banner__button govuk-button"
                                value={buttonLabel}
                                onChange={onChangeButtonLabel}
                                placeholder="Button label"
                            />

                        </div>
                    </div>
                </div>

            </div>
        )

    },
    /**
     * Deliberately does not call useBlockProps.save().
     *
     * This is a dynamic block: what save() returns is passed to
     * render_callback_banner_block() as $content, and the PHP builds the outer
     * wrapper itself. Adding a wrapper here would double-wrap the frontend
     * markup and invalidate every banner already saved in the database.
     */
    save: () => {
        return <InnerBlocks.Content />;
    }
});
