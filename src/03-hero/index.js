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
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        heroText: {
            type: 'string',
            source: 'html',
            selector: '.mojblocks-hero__content'
        },
    },
    edit: props => {
        const {
            setAttributes,
            attributes,
            className
        } = props;
        const { backgroundImage, heroTitle, heroText} = attributes;

        function onImageSelect(imageObject) {
            setAttributes({
                backgroundImage: imageObject.sizes.full.url
            })
        }
        function onTitleChange(changes) {
            setAttributes({
                heroTitle: changes
            });
        }
        function onChangeHeroText(changes) {
            setAttributes({
                heroText: changes
            });
        }
        return ([
            <InspectorControls>

            <div>
            <strong>Select a background image:</strong>
        <MediaUpload
        onSelect={onImageSelect}
        type="image"
        value={backgroundImage}
        render={({ open }) => (
        <button className="button button-primary button-hero" onClick={open}>
            Upload Image!
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
                        <div class="govuk-grid-column-three-quarters">
                            <RichText
                            tagName="h2"
                            className="mojblocks-hero__title"
                            value={attributes.heroTitle}
                            keepPlaceholderOnFocus
                            onChange={onTitleChange}
                            placeholder="Enter your hero title here!"
                                />
                            <div className={'mojblocks-hero__content intro'}>
                                <RichText
                                multiline="p"
                                placeholder={__('Enter your hero text here!', 'mojblocks')}
                                keepPlaceholderOnFocus
                                onChange={onChangeHeroText}
                                value={attributes.heroText}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    ])

    },
    save: props => {
        const { attributes, className } = props;
        const { backgroundImage, heroTitle, heroText } = attributes;
        return (
            <section className="mojblocks-hero">
                <div className="mojblocks-hero__image" style={{
                        backgroundImage: `url(${ backgroundImage })`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                    }}>
                </div>

                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="mojblocks-hero__overlay">
                            <div class="govuk-grid-column-three-quarters">
                                <RichText.Content
                                tagName="h2"
                                className="mojblocks-hero__title"
                                value={attributes.heroTitle}
                                />
                                <div className="mojblocks-hero__content intro">
                                    <RichText.Content value={attributes.heroText} multiline="p" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
});
