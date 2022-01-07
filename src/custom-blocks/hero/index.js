const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, PanelRow } = wp.components;

registerBlockType("mojblocks/hero", {
    title: __("Hero", "mojblocks"),
    description: __("Full width hero banner with title and text", "mojblocks"),
    category: "mojblocks",
    icon: "schedule",
    attributes: {
        backgroundImage: {
            type: 'string'
        },
        heroClassName: {
            type: 'string'
        }
    },
    edit: props => {
        const {
            setAttributes,
            attributes: {
                backgroundImage,
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ heroClassName: className });

        // Load allowed blocks to be added to hero content
        const allowedBlocks = [ 'core/heading','core/list', 'core/paragraph', 'mojblocks/intro' ];


        const onChangeBackgroundImage = imageObject => {

           var imageSizes = imageObject.sizes;

           // determine the image size displayed with fallback
           var image = (typeof imageSizes.hero !== 'undefined')
           ? imageSizes.hero.url
           : imageSizes.full.url;

            setAttributes({ backgroundImage: image })
          }

        return ([
            <InspectorControls>
                <PanelBody title={ __( 'Choose hero block banner image', 'mojblocks' ) } initialOpen={true} >
                <label className="block-editor-block-hero"><p>For best results, uploaded images must meet a minimum
                 size of 1366×683 pixels (or aspect ratio of 2:1).
                 </p></label>
                <PanelRow>
            <MediaUpload
            onSelect={ onChangeBackgroundImage }
            type="image"
            value={ backgroundImage }
            render={({ open }) => (
                <button className="button button-primary button-hero" onClick={open}>
                    Upload image
                </button>
                )}
            />
            </PanelRow>
            </PanelBody>
            </InspectorControls>,

        <section className={`${className}  mojblocks-hero`} >
            <div className="mojblocks-hero__image" style={{
            backgroundImage: `url(${ backgroundImage })`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
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
    ])

    },
    // return null as frontend output is done via PHP
    save: () => {
        return <InnerBlocks.Content />;
    }
});
