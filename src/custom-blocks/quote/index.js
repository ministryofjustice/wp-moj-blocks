/**
 * Quote
 * A stylised quotation with image upload, quote and name fields
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { RichText, MediaUpload, BlockControls, AlignmentToolbar, useBlockProps } from '@wordpress/block-editor';
import { Button, Dashicon } from '@wordpress/components';
import domReady from '@wordpress/dom-ready';
import Icons from '../../../assets/svg/index';

import metadata from './block.json';

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType(metadata.name, {

    edit: props => {

        const {
            setAttributes,
            attributes: {
                quoteImgURL,
                quoteContent,
                quoteName,
                quoteAlignment,
                quoteImgId,
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        //
        // Note this moves the generated block class onto the outer wrapper. It
        // was previously applied to the inner image div, which meant the editor
        // and the frontend put it on different elements. Nothing targets
        // .wp-block-mojblocks-quote in CSS, so this only makes the two agree.
        const blockProps = useBlockProps({
            className: 'mojblocks-quote',
            'data-src': quoteImgURL,
        });

        const onRemoveImage = () => {
            setAttributes({
                quoteImgURL: null,
                quoteImgId: null,
            });
        };

        return (
            <Fragment>
            {/* Show the alignment toolbar on focus */}
            <BlockControls>
                <AlignmentToolbar
                    value={ quoteAlignment }
                    onChange={ (value) =>
                        setAttributes({ quoteAlignment: value })
                    }
                />
            </BlockControls>
            <div { ...blockProps }>
                <div
                    className={`mojblocks-quote__image ` +
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
                        <div className="mojblocks-quote__content__icon use-dark-background-heading-colour">
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
                            className="mojblocks-quote__content__quote use-dark-background-text-colour"
                            onChange={ (value) =>
                                setAttributes({ quoteContent: value })
                            }
                        />
                        <RichText
                            tagName="p"
                            placeholder={__('Add name', 'mojblocks')}
                            keepPlaceholderOnFocus
                            value={ quoteName }
                            className="mojblocks-quote__content__name use-dark-background-text-colour"
                            onChange={ (value) =>
                                setAttributes({ quoteName: value })
                            }
                        />
                    </div>
                </div>
            </div>
            </Fragment>
        );
    },
    // return null as frontend output is done via PHP
    save: () => null
});

domReady( function() {
    unregisterBlockType( 'core/quote' );
} );
