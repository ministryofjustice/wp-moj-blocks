/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RichText,  InnerBlocks, MediaUpload } from "@wordpress/block-editor";
import { Button, Dashicon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Icons from '../../../assets/svg/index';

const allowedMediaTypes = ['image'];
const templateCardBlock = [
    [ 'core/heading', { placeholder: 'Card heading' } ]
];

export default function CardBlockEdit( props ) {

        const {
            setAttributes,
            className,
        } = props;

        const {
            cardTitle,
            cardExcerpt,
            cardImageURL,
            cardImageId,
        } = props.attributes;

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
                allowedTypes={ allowedMediaTypes }
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
            <InnerBlocks
            template={ templateCardBlock }
            templateLock="all"
        />
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
     )
}
