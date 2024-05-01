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
import Icons from '../../../assets/svg/index';

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
            type: 'string'
        },
        quoteContent: {
            type: 'string'
        },
        quoteName: {
            type: 'string'
        },
        quoteAlignment: {
            type: 'string',
        },
        quoteImgId: {
            type: 'number',
        },
        quoteClassName: {
            type: 'string'
        }
    },
    edit: props => {

        const {
            setAttributes,
            attributes: {
                quoteImgURL,
                quoteContent,
                quoteName,
                quoteAlignment,
                quoteImgId,
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ quoteClassName: className });

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
                    value={ quoteAlignment }
                    onChange={ (value) =>
                        setAttributes({ quoteAlignment: value })
                    }
                />
            </BlockControls>,
            <div className={`mojblocks-quote`} data-src={ quoteImgURL }>
                <div
                    className={`${className} mojblocks-quote__image ` +
                    (quoteImgId
                            ? 'mojblocks-quote__image-selected'
                            : ''
                    )}
                    style={{
                        backgroundImage: `url(${ quoteImgURL })`
                    }}>
                    <MediaUpload
                        buttonProps={{
                            className: 'change-image',
                        }}
                        onSelect={ (img) =>
                            setAttributes({
                                quoteImgId: img.id,
                                quoteImgURL: img.sizes.large ? img.sizes.large.url : img.sizes.full.url,
                            })
                        }
                        allowed={ALLOWED_MEDIA_TYPES}
                        type="image"
                        value={ quoteImgId }
                        render={({ open }) => (
                            <Fragment>
                                <Button
                                    className={'mojblocks-quote__image__button ' +
                                    (quoteImgId
                                            ? 'mojblocks-quote__image__button-change'
                                            : 'mojblocks-quote__image__button-add'
                                    )
                                    }
                                    onClick={ open }
                                >
                                    { Icons.upload }
                                </Button>
                                {quoteImgId && (
                                    <Button
                                        className="mojblocks-quote__image__button mojblocks-quote__image__button-remove"
                                        onClick={ onRemoveImage }
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
                             textAlign: quoteAlignment,
                         }}>
                        <div className="mojblocks-quote__content__icon">
                            <Dashicon icon='format-quote'/>
                        </div>
                        <RichText
                            tagName="q"
                            placeholder={__(
                                'Add quotation text...',
                                'mojblocks'
                            )}
                            keepPlaceholderOnFocus
                            value={ quoteContent }
                            allowedFormats={[
                                'core/bold',
                                'core/italic',
                                'core/strikethrough',
                                'core/link',
                            ]}
                            className="mojblocks-quote__content__quote"
                            onChange={ (value) =>
                                setAttributes({ quoteContent: value })
                            }
                        />
                        <RichText
                            tagName="p"
                            placeholder={__('Add name', 'mojblocks')}
                            keepPlaceholderOnFocus
                            value={ quoteName }
                            className="mojblocks-quote__content__name"
                            onChange={ (value) =>
                                setAttributes({ quoteName: value })
                            }
                        />
                    </div>
                </div>
            </div>
        ]);
    },
    // return null as frontend output is done via PHP
    save: () => null
});

domReady( function() {
    unregisterBlockType( 'core/quote' );
} );
