/**
 * CTA
 * A stylised call to action displaying a title, text and cta button
 *
 * Block metadata — name, title, icon, category, keywords, attributes, example —
 * lives in block.json and is registered server-side from mojblocks.php. This
 * file only supplies the editor behaviour.
 *
 * Note the ctaClassName attribute in block.json is legacy: older CTAs persisted
 * the editor's generated className there so the PHP could read it back.
 * apiVersion 3 no longer passes className to edit(), and the render callback now
 * uses get_block_wrapper_attributes(), so nothing reads or writes it. It stays
 * registered only so it isn't stripped from content saved before that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, URLInputButton, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl, RadioControl } from '@wordpress/components';

import metadata from './block.json';

registerBlockType(metadata.name, {

    edit: props => {
        const {
            setAttributes,
            attributes: {
                ctaTitle,
                ctaText,
                linkStyle,
                buttonLink,
                buttonLabel,
                flushBottom
            }
        } = props;

        const blockProps = useBlockProps({ className: 'mojblocks-cta' });

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

        // Grab newLinkStyle, set the value of linkStyle to newLinkStyle.
        const onChangeLinkStyle = newLinkStyle => {
            setAttributes({ linkStyle: newLinkStyle });
        };

        return (
            <div { ...blockProps }>
                <InspectorControls>
                    <PanelBody
                            title="Bottom Margin"
                            initialOpen={false}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Flush bottom"
                                help={
                                    flushBottom
                                        ? 'Gap removed from beneath this block'
                                        : 'Normal gap beneath this block'
                                }
                                checked={flushBottom}
                                onChange={newFlushBottom => setAttributes({ flushBottom: newFlushBottom }) }
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody
                            title="Link Style"
                            initialOpen={true}
                    >
                        <PanelRow>
                            <RadioControl
                                label="Link styling"
                                help={
                                    linkStyle == "link"
                                        ? 'Link shall be styled like a normal link'
                                        : 'Link shall be styled like a button'
                                }
                                selected={ linkStyle }
                                options={ [
                                    { label: 'Button', value: 'button' },
                                    { label: 'Link', value: 'link' },
                                ] }
                                onChange={newLinkStyle => setAttributes({ linkStyle: newLinkStyle }) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="govuk-grid-column-three-quarters">
                            <div className="mojblocks-cta__heading-container">
                                <h2 className="mojblocks-cta__heading">
                                <span role="text">
                                    <span className="mojblocks-cta__heading-text">
                                        <RichText
                                            placeholder={__('Add a Call To Action title', 'mojblocks')}
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
                                    placeholder={__('Add compelling text to send the message home', 'mojblocks')}
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
                                className={
                                    linkStyle == "link" ? "govuk-link govuk-body" : "mojblocks-button govuk-button"
                                }
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
