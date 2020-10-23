/**
 * Card
 * Create a flexible card pattern on the page,
 * with an image, hyperlink title and body content.
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import Icons from '../../assets/svg/index';

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType('mojblocks/card', {
    title: __('Card', 'mojblocks'),
    description: __('Add a card pattern to a default page', 'mojblocks'),
    category: 'mojblocks',
    icon: 'table-row-after',
    keywords: [
        __('card', 'navigation', 'mojblocks')
    ],
    supports: {
        align: ['wide','full']
    },
    attributes: {
        cardTitle: {
            type: 'string',
            source: 'html',
            selector: '.mojblocks-card-title'
        },
        cardExcerpt: {
            type: 'string',
            source: 'html',
            selector: '.mojblocks-card-excerpt'
        },
        cardImageURL: {
            type: 'string',
            source: 'attribute',
            selector: '.mojblocks-card-image',
            attribute: 'data-src'
        },
        cardImageId: {
            type: 'number'
        }
    },
    edit: props => {

    const {
        setAttributes,
        attributes: {
            cardTitle,
            cardExcerpt,
            cardImageURL,
            cardImageId
        },
        className
    } = props;

    const onRemoveImage = () => {
        setAttributes({
            cardImageURL: null,
            cardImageId: null,
        });
    };

    return (
        <div className={`${className} card-container mojblocks-card-image`} data-src={cardImageURL}>
            <div className={`${className} mojblocks-card__image` + ' ' + (cardImageId ? 'mojblocks-card__image-selected': '')}
                style={{backgroundImage: `url(${cardImageURL})`}}>
            <MediaUpload
                buttonProps={{
                    className: 'change-image',
                }}
                onSelect={(image) =>
                    setAttributes({
                        cardImageId: image.id,
                        cardImageURL: image.url,
                    })
                }
                allowed={ALLOWED_MEDIA_TYPES}
                type="image"
                value={cardImageId}
                render={({ open }) => (
                    <Fragment>
                        <Button className={'mojblocks-card__image__button ' +
                            (cardImageId ? 'mojblocks-card__image__button-change': 'mojblocks-card__image__button-add')}
                            onClick={open}>{Icons.upload}
                        </Button>
                        {cardImageId && (
                            <Button
                                className="mojblocks-card__image__button mojblocks-card__image__button-remove"
                                onClick={onRemoveImage}
                            >
                                <Dashicon icon={'dismiss'}/>
                            </Button>
                        )}
                    </Fragment>
                )}
            />
            </div>
        <RichText
            tagName="h2"
            placeholder={__('Add header text...', 'mojblocks')}
            keepPlaceholderOnFocus
            value={cardTitle}
            className="mojblocks-card-title"
            onChange={(value) => setAttributes({ cardTitle: value })}
        />
        <RichText
            tagName="p"
            placeholder={__('Add excerpt text...', 'mojblocks')}
            keepPlaceholderOnFocus
            value={cardExcerpt}
            className="mojblocks-card-excerpt"
            onChange={(value) => setAttributes({ cardExcerpt: value })}
        />
       </div>
    );
    },
    save: props => {

        const {
            attributes: {
                cardTitle,
                cardExcerpt,
                cardImageURL
            },
            className
        } = props;

        return (
            <div className={`${className} card-container mojblocks-card-image`} data-src={cardImageURL}>
            {typeof cardImageURL === "string" && (
                <div className="mojblocks-card__image mojblocks-card__image-selected"
                        style={{
                            backgroundImage: `url(${cardImageURL})`
                        }}>
                </div>
            )}
            <RichText.Content
                tagName="h2"
                value={cardTitle}
                className="mojblocks-card-title"
            />
            <RichText.Content
                tagName="p"
                value={cardExcerpt}
                className="mojblocks-card-excerpt"
            />
           </div>
        )
    }
});
