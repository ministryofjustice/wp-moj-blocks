/**
 * Card block
 *
 * Create a flexible card pattern on the page,
 * with an image, hyperlink title and body content.
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import Icons from '../../../assets/svg/index';

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
            type: 'string'
        },
        cardExcerpt: {
            type: 'string'
        },
        cardImageURL: {
            type: 'string'
        },
        cardImageId: {
            type: 'number'
        },
        cardClassName: {
            type: 'string'
        },
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

    setAttributes({ cardClassName: className });

    const onRemoveImage = () => {
        setAttributes({
            cardImageURL: null,
            cardImageId: null,
        });
    };

    return (
        <div className={`${className} mojblocks-card mojblocks-card-image`} data-src={cardImageURL}>
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
    save: () => null
});
