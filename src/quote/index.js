/**
 * Quote
 * A stylised quotation with image upload, quote and name fields
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText, MediaUpload, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Button, Dashicon } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';
import Icons from '../../assets/svg/index';

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType('mojblocks/quote', {
    title: __('Quote', 'mojblocks'),
    description: __('A user quote block with an optional image background, quote text and name', 'mojblocks'),
    category: 'mojblocks',
    icon: 'format-quote',
    keywords: [
        __('quote', 'mojblocks'),
        __('testimonial', 'mojblocks'),
        __('moj', 'mojblocks'),
    ],
    attributes: {
        quoteImgURL: {
            type: 'string',
            source: 'attribute',
            selector: '.mojblocks-quote',
            attribute: 'data-src'
        },
        quoteContent: {
            type: 'string',
            selector: '.mojblocks-quote__content__quote',
            source: 'html',
        },
        quoteName: {
            type: 'string',
            selector: '.mojblocks-quote__content__name',
            source: 'html',
        },
        quoteAlignment: {
            type: 'string',
        },
        quoteImgId: {
            type: 'number',
        }
    },
    edit: props => {
        // Setup the attributes
        let {
            setAttributes,
            attributes,
            className
        } = props;

        const onRemoveImage = () => {
            setAttributes({
                quoteImgURL: null,
                quoteImgId: null,
            });
        };

        return ([
            // Show the alignment toolbar on focus
            <BlockControls key="controls">
                <AlignmentToolbar
                    value={attributes.quoteAlignment}
                    onChange={(value) =>
                        setAttributes({ quoteAlignment: value })
                    }
                />
            </BlockControls>,
            <div className={`mojblocks-quote`} data-src={attributes.quoteImgURL}>
                <div
                    className={`${className} mojblocks-quote__image ` +
                    (attributes.quoteImgId
                            ? 'mojblocks-quote__image-selected'
                            : ''
                    )}
                    style={{
                        backgroundImage: `url(${attributes.quoteImgURL})`
                    }}>
                    <MediaUpload
                        buttonProps={{
                            className: 'change-image',
                        }}
                        onSelect={(img) =>
                            setAttributes({
                                quoteImgId: img.id,
                                quoteImgURL: img.url,
                            })
                        }
                        allowed={ALLOWED_MEDIA_TYPES}
                        type="image"
                        value={attributes.quoteImgId}
                        render={({ open }) => (
                            <Fragment>
                                <Button
                                    className={'mojblocks-quote__image__button ' +
                                    (attributes.quoteImgId
                                            ? 'mojblocks-quote__image__button-change'
                                            : 'mojblocks-quote__image__button-add'
                                    )
                                    }
                                    onClick={open}
                                >
                                    {Icons.upload}
                                </Button>
                                {attributes.quoteImgId && (
                                    <Button
                                        className="mojblocks-quote__image__button mojblocks-quote__image__button-remove"
                                        onClick={onRemoveImage}
                                    >
                                        <Dashicon icon={'dismiss'}/>
                                    </Button>
                                )}
                            </Fragment>
                        )}
                    />
                </div>
                <div className="govuk-width-container">
                    <div className="mojblocks-quote__content"
                         style={{
                             textAlign: attributes.quoteAlignment,
                         }}>
                        <div className="mojblocks-quote__content__icon">
                            <Dashicon icon='format-quote'/>
                        </div>
                        <RichText
                            tagName="q"
                            multiline="span"
                            placeholder={__(
                                'Add quotation text...',
                                'mojblocks'
                            )}
                            keepPlaceholderOnFocus
                            value={attributes.quoteContent}
                            allowedFormats={[
                                'core/bold',
                                'core/italic',
                                'core/strikethrough',
                                'core/link',
                            ]}
                            className="mojblocks-quote__content__quote"
                            onChange={(value) =>
                                setAttributes({ quoteContent: value })
                            }
                        />
                        <RichText
                            tagName="p"
                            placeholder={__('Add name', 'mojblocks')}
                            keepPlaceholderOnFocus
                            value={attributes.quoteName}
                            className="mojblocks-quote__content__name"
                            onChange={(value) =>
                                setAttributes({ quoteName: value })
                            }
                        />
                    </div>
                </div>
            </div>
        ]);
    },
    save: props => {
        const {
            quoteName,
            quoteContent,
            quoteAlignment,
            quoteImgURL,
        } = props.attributes;

        return (
            <div className={'mojblocks-quote'} data-src={quoteImgURL}>
                {typeof quoteImgURL === "string" && (
                    <div className="mojblocks-quote__image mojblocks-quote__image-selected"
                         style={{
                             backgroundImage: `url(${quoteImgURL})`
                         }}>
                    </div>
                )}
                <div className="govuk-width-container">
                    <div className="mojblocks-quote__content"
                         style={{
                             textAlign: quoteAlignment,
                         }}>
                        <div className="mojblocks-quote__content__icon">
                            <Dashicon icon='format-quote'/>
                        </div>
                        <RichText.Content
                            tagName="q"
                            className="mojblocks-quote__content__quote"
                            value={quoteContent}
                        />
                        <RichText.Content
                            tagName="p"
                            className="mojblocks-quote__content__name"
                            value={quoteName}
                        />
                    </div>
                </div>
            </div>
        );
    }
});

domReady( function() {
    unregisterBlockType( 'core/quote' );
} );
