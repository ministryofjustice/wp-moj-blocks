const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType("mojblocks/staggered-box", {
  title: __("Staggered Box", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered box'), __('photo block')],

  attributes: {
    staggeredBoxTitle: {
      type: "string"
    },
    staggeredBoxContent: {
      type: "string"
    },
    staggeredBoxButtonText: {
      type: "string"
    },
    staggeredBoxButtonLink: {
      type: 'string'
    },
    staggeredBoxImageURL: {
      type: "string"
    },
    staggeredBoxImageAltText: {
      type: "string"
    },
    staggeredBoxClassName: {
      type: "string"
    }
  },

  edit: props => {
    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxTitle, staggeredBoxImageAltText },
        className,
        setAttributes
    } = props

    setAttributes({ staggeredBoxClassName: className });

    const onChangeStaggeredBoxTitle = newStaggeredBoxTitle => {
      setAttributes({ staggeredBoxTitle: newStaggeredBoxTitle})
    }

    const onChangeStaggeredBoxContent = newStaggeredBoxContent => {
      setAttributes({ staggeredBoxContent: newStaggeredBoxContent })
    }

    const onChangeStaggeredBoxButtonText = newStaggeredBoxButtonText => {
      setAttributes({ staggeredBoxButtonText: newStaggeredBoxButtonText })
    }

    const onChangeStaggeredBoxButtonLink = newStaggeredBoxButtonLink => {
      setAttributes({ staggeredBoxButtonLink: newStaggeredBoxButtonLink })
    }

    const onStaggeredBoxImageSelect = newStaggeredBoxImageURL => {
      setAttributes({ staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.full.url })
      setAttributes({ staggeredBoxImageAltText: newStaggeredBoxImageURL.alt})
    }

    return (
      <Fragment >
        <InspectorControls>
          <MediaUpload
            onSelect={onStaggeredBoxImageSelect}
            allowedTypes={ALLOWED_MEDIA_TYPES}
            type="image"
            value={staggeredBoxImageURL}
            render={({ open }) => (
              <button className="button button-primary button-hero" onClick={open}>
                Open Media Library
              </button>
            )}
          />
        </InspectorControls>

        <div className={`${className} mojblocks-staggered-box`}>
          <div className="govuk-width-container">
            <div className="govuk-grid-row">

              <div className="mojblocks-staggered-box__image-container govuk-grid-column-two-thirds ">
                <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText} />
              </div>

              <div className="mojblocks-staggered-box__text-container govuk-grid-column-one-half" >
                <RichText
                  tagName="h2"
                  value={staggeredBoxTitle}
                  onChange={onChangeStaggeredBoxTitle}
                  className="mojblocks-staggered-box__title"
                  placeholder={__('Add staggered box title', 'mojblocks')}
                  keepPlaceholderOnFocus={true}
                />
                <RichText
                  tagName="p"
                  value={staggeredBoxContent}
                  onChange={onChangeStaggeredBoxContent}
                  className="mojblocks-staggered-box__content"
                  placeholder={__('Add staggered box content', 'mojblocks')}
                  keepPlaceholderOnFocus={true}
                />
                <URLInputButton
                  label={__('Button link', 'mojblocks')}
                  onChange={onChangeStaggeredBoxButtonLink}
                  url={staggeredBoxButtonLink}
                />
                <RichText
                  value={staggeredBoxButtonText}
                  onChange={onChangeStaggeredBoxButtonText}
                  className="mojblocks-staggered-box__button"
                  placeholder={__('Add staggered box button', 'mojblocks')}
                />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  },

    save: () => null
});

registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'image-left',
    label: 'Image aligned on the left',
    isDefault: true,
  }
);
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'staggered-box-image-right',
    label: 'Image aligned on right'
  }
);
