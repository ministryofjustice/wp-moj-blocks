const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  RichText, InspectorControls, MediaUpload, InnerBlocks } = wp.blockEditor;

registerBlockType("mojblocks/hero", {
    title: __("Hero", "mojblocks"),
    description: __("Full width hero banner with title and text", "mojblocks"),
    category: "mojblocks",
    icon: "schedule",
    attributes: {
        backgroundImage: {
            type: 'string'
        },
        heroTitle: {
            type: 'string'
        },
        heroText: {
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
                heroTitle,
                heroText
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ heroClassName: className });

        const onChangeBackgroundImage = imageObject => {
            setAttributes({ backgroundImage: imageObject.sizes.full.url})
          }

        const onTitleChange = newTitle => {
            setAttributes({ heroTitle: newTitle })
        }

        const onChangeHeroText = newHeroText => {
            setAttributes({ heroText: newHeroText })
        }

        return ([
            <InspectorControls>
            <div className="block-editor-block-card">
            <MediaUpload
            onSelect={ onChangeBackgroundImage }
            type="image"
            value={ backgroundImage }
            render={({ open }) => (
            <button className="button button-primary button-hero" onClick={open}>
                Upload background image
            </button>
            )}
            />
            </div>
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
                            <RichText
                            tagName="h2"
                            className="mojblocks-hero__title"
                            value={ heroTitle }
                            keepPlaceholderOnFocus
                            onChange={ onTitleChange }
                            placeholder="Enter your hero title"
                                />
                            <div className={'mojblocks-hero__content intro'}>
                                <RichText
                                placeholder={__('Enter your hero text', 'mojblocks')}
                                keepPlaceholderOnFocus
                                onChange={ onChangeHeroText }
                                value={ heroText }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    ])

    },
    // return null as frontend output is done via PHP
    save: () => null
});
