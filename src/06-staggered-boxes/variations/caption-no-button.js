const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType("mojblocks/staggered-box-caption-and-no-button", {
  title: __("Staggered Box with caption but no button", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered box'), __('photo box')],
  parent: 'mojblocks/staggered-box',
  scope: ["inserter"],

  attributes: {
    staggeredBoxTitle: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__title"
    },
    staggeredBoxContent: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__content"
    },
    staggeredBoxImageURL: {
      type: "string",
      default: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/header-pusheen.gif'
    },
    staggeredBoxImageCredit: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__image-credit"
    },
    staggeredBoxImageAltText: {
      type: "string",
      source: "attribute",
      attribute: "alt"
    }
  },

  edit: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxTitle, staggeredBoxImageCredit, staggeredBoxImageAltText, className },
      setAttributes
    } = props

    const onChangeStaggeredBoxTitle = (newStaggeredBoxTitle) => {
      setAttributes({ staggeredBoxTitle: newStaggeredBoxTitle })
    }

    const onChangeStaggeredBoxContent = (newStaggeredBoxContent) => {
      setAttributes({ staggeredBoxContent: newStaggeredBoxContent })
    }

    const onStaggeredBoxImageSelect = (newStaggeredBoxImageURL) => {
      setAttributes({ staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.full.url })
      setAttributes({ staggeredBoxImageAltText: newStaggeredBoxImageURL.alt })
      console.log(newStaggeredBoxImageURL);
    }

    const onChangeStaggeredBoxImageCredit = (newStaggeredBoxImageCredit) => {
      setAttributes({ staggeredBoxImageCredit: newStaggeredBoxImageCredit })
    }

    return (
      <div >
        <InspectorControls>
          <MediaUpload
            onSelect={onStaggeredBoxImageSelect}
            allowedTypes={ALLOWED_MEDIA_TYPES}
            type="image"
            value={staggeredBoxImageURL}
            render={({ open }) => (
              <button onClick={open}>
                Open Media Library
              </button>
            )}
          />
        </InspectorControls>

        <div className={`${className}  mojblocks-staggered-box`}>
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds mojblocks-staggered-box__image-container">
                <img className="mojblocks-staggered-box__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText} />

                <div className="mojblocks-staggered-box__image-credit-container">
                  <i className="image-caption" aria-hidden="true"></i>
                  <RichText
                    tagName="p"
                    value={staggeredBoxImageCredit}
                    onChange={onChangeStaggeredBoxImageCredit}
                    className="mojblocks-staggered-box__image-credit-text"
                    placeholder={__('Add staggered box image credit', 'mojblocks')}
                    keepPlaceholderOnFocus={true}
                  />
                </div>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  save: props => {

    const {
      attributes: { staggeredBoxTitle, staggeredBoxContent, staggeredBoxImageURL, staggeredBoxImageCredit, staggeredBoxImageAltText }
    } = props;

    return (

      <div className="mojblocks-staggered-box">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">

            <div className="govuk-grid-column-two-thirds mojblocks-staggered-box__image-container">
              <img className="mojblocks-staggered-box__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText} />
              <div className="mojblocks-staggered-box__image-credit-container">
                <i className="image-caption" aria-hidden="true"></i>
                <RichText.Content tagName="p" className="mojblocks-staggered-box__image-credit-text" value={staggeredBoxImageCredit} />
              </div>
            </div>

            <div className="mojblocks-staggered-box__text-container govuk-grid-column-one-half" >
              <RichText.Content className="mojblocks-staggered-box__title" tagName="h2" value={staggeredBoxTitle} />
              <RichText.Content className="mojblocks-staggered-box__content" tagName="p" value={staggeredBoxContent} />
            </div>

          </div>
        </div>
      </div>

    );
  }
});

// style variations
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'image-right',
    label: 'Image aligned on the right',
    isDefault: true,
  }
);
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'staggered-box-image-left',
    label: 'Image aligned on left'
  }
);
