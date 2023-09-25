/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Fragment, useState } from "@wordpress/element";
import { RichText, InspectorControls, InnerBlocks, MediaUpload } from "@wordpress/block-editor";
import { PanelBody, SelectControl, Button, Dashicon } from '@wordpress/components';

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
            cardExcerpt,
            cardImageURL,
            cardImageId,
            cardImageShape,
            cardImagePosition,
        } = props.attributes;

        const onRemoveImage = () => {
            setAttributes({
                cardImageURL: null,
                cardImageId: null,
            });
        };

        const shapeList = [
            { label: "1:1 (square)", value: 'square' },
            { label: "4:3 (rectangle)", value: 'rectangle' },
            { label: "16:9 (widescreen)", value: 'widescreen' },
            { label: "21:9 (letterbox)", value: 'letterbox' },
        ]
        const setShape = useState( 'square' );
        const onChangeImageShape = newImageShape => {
            setAttributes({ cardImageShape: newImageShape });
            setShape( newImageShape );
        };

        const positionList = [
            { label: "Top", value: 'top' },
            { label: "Centre", value: 'center' },
            { label: "Bottom", value: 'bottom' },
            { label: "Left", value: 'left' },
            { label: "Right", value: 'right' },
            { label: "Top left", value: 'top left' },
            { label: "Top right", value: 'top right' },
            { label: "Bottom left", value: 'bottom left' },
            { label: "Bottom right", value: 'bottom right' },
        ]
        const setPosition = useState( 'center' );
        const onChangeImagePosition = newImagePosition => {
            setAttributes({ cardImagePosition: newImagePosition });
            setPosition( newImagePosition );
        };

        const inspectorControls = (
            <InspectorControls>
                <PanelBody
                    title={__('Image settings')}
                    initialOpen={true}
                >
                    <SelectControl
                        label="Image shape"
                        help=""
                        value={ cardImageShape }
                        options={ shapeList }
                        onChange={ onChangeImageShape }
                    />
                    <SelectControl
                        label="Image position"
                        help=""
                        value={ cardImagePosition }
                        options={ positionList }
                        onChange={ onChangeImagePosition }
                    />
                </PanelBody>
            </InspectorControls>
        );

        return (
            <div className={`${className} mojblocks-card mojblocks-card-image`} data-src={cardImageURL}>
            { inspectorControls }
            <div className={`${className} mojblocks-card__image mojblocks-card__image--shape-${cardImageShape}` + ' ' + (cardImageId ? 'mojblocks-card__image-selected': '')}
                style={{
                    backgroundImage: `url(${cardImageURL})`,
                    backgroundPosition: cardImagePosition,
                }}>
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
