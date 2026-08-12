/**
 * Hero block
 *
 * Full width hero banner with a background image and inner block content.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import {
    InspectorControls,
    MediaUpload,
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

// Blocks an editor is allowed to place inside the hero overlay.
const allowedBlocks = [ 'core/heading', 'core/list', 'core/paragraph', 'mojblocks/intro' ];

const optionList = [
    { label: "Centre", value: 'center' },
    { label: "Top", value: 'top' },
    { label: "Bottom", value: 'bottom' },
    { label: "Left", value: 'left' },
    { label: "Right", value: 'right' },
    { label: "Top left", value: 'top left' },
    { label: "Top right", value: 'top right' },
    { label: "Bottom left", value: 'bottom left' },
    { label: "Bottom right", value: 'bottom right' },
];

registerBlockType("mojblocks/hero", {
    apiVersion: 3,
    title: __("Hero", "mojblocks"),
    description: __("Full width hero banner with title and text", "mojblocks"),
    category: "mojblocks",
    icon: "schedule",
    attributes: {
        backgroundImage: {
            type: 'string'
        },
        /**
         * Legacy. Older heroes persisted the editor's generated className here
         * so the PHP could read it back. apiVersion 3 no longer passes
         * className to edit(), so nothing writes to this any more — it stays
         * registered only so the render callback can still fall back to it for
         * content saved before this change.
         */
        heroClassName: {
            type: 'string'
        },
        heroImagePosition: {
            type: 'string'
        }
    },
    edit: props => {
        const {
            setAttributes,
            attributes: {
                backgroundImage,
                heroImagePosition,
            }
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({ className: 'mojblocks-hero' });

        const onChangeBackgroundImage = imageObject => {

            var imageSizes = imageObject.sizes;

            // determine the image size displayed with fallback
            var image = (typeof imageSizes.hero !== 'undefined')
            ? imageSizes.hero.url
            : imageSizes.full.url;

            setAttributes({ backgroundImage: image })
        }

        const onChangeImagePosition = newImagePosition => {
            setAttributes({ heroImagePosition: newImagePosition });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ __( 'Choose hero block banner image', 'mojblocks' ) } initialOpen={true} >
                    <label className="block-editor-block-hero"><p>For best results, uploaded images must meet a minimum
                     size of 1366×683 pixels (or aspect ratio of 2:1).
                     </p></label>
                        <PanelRow>
                            <MediaUpload
                            onSelect={ onChangeBackgroundImage }
                            type="image"
                            allowedTypes={ [ 'image' ] }
                            value={ backgroundImage }
                            render={({ open }) => (
                                <button className="button button-primary button-hero" onClick={open}>
                                    Upload image
                                </button>
                                )}
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label="Image position"
                                help=""
                                value={ heroImagePosition }
                                options={ optionList }
                                onChange={ onChangeImagePosition }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>

                <section { ...blockProps }>
                    <div className="mojblocks-hero__image" style={{
                        backgroundImage: `url(${ backgroundImage })`,
                        backgroundSize: 'cover',
                        backgroundPosition: `${heroImagePosition}`
                    }}>
                    </div>

                    <div className={'govuk-width-container'}>
                        <div className={'govuk-grid-row'}>
                            <div className="mojblocks-hero__overlay">
                                <div className="govuk-grid-column-three-quarters">
                                    <InnerBlocks
                                        allowedBlocks={ allowedBlocks }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )

    },
    /**
     * Deliberately does not call useBlockProps.save().
     *
     * This is a dynamic block: what save() returns is passed to
     * render_callback_hero_block() as $content, and the PHP builds the outer
     * <section> itself. Adding a wrapper here would double-wrap the frontend
     * markup and invalidate every hero already saved in the database.
     */
    save: () => {
        return <InnerBlocks.Content />;
    }
});
