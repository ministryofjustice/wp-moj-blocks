const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType("mojblocks/staggered-block", {
  title: __("Staggered Block", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered block'), __('photo block')],
  example: {
    attributes: {
      staggeredBoxTitle: 'Exciting title',
      staggeredBoxContent: 'Some exciting text that fits with the title',
      staggeredBoxButtonLink: 'https://www.google.com/',
      staggeredBoxButtonText: 'Interesting link',
      staggeredBoxImageURL: 'https://giphy.com/gifs/xFoV7P0JsHwoZvHXP6',
      staggeredBoxImageCredit: 'Pusheen took this photo'
    },
  },

  attributes: {
    staggeredBoxTitle: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-block__title"
    },
    staggeredBoxContent: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-block__content"
    },
    staggeredBoxButtonText: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-block__button"
    },
    staggeredBoxButtonLink: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    staggeredBoxImageURL: {
      type: "string",
      default: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/header-pusheen.gif'
    },
    staggeredBoxImageCredit: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-block__image-credit"
    },
    staggeredBoxImageAltText: {
      type: "string",
      source: "attribute",
      attribute: "alt"
    }
  },

  edit: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxTitle, staggeredBoxImageCredit, staggeredBoxImageAltText, className },
      setAttributes
    } = props

    const onChangeStaggeredBoxTitle = (newStaggeredBoxTitle) => {
      setAttributes({ staggeredBoxTitle: newStaggeredBoxTitle})
    }

    const onChangeStaggeredBoxContent = (newStaggeredBoxContent) => {
      setAttributes({ staggeredBoxContent: newStaggeredBoxContent })
    }

    const onChangeStaggeredBoxButtonText = (newStaggeredBoxButtonText) => {
      setAttributes({ staggeredBoxButtonText: newStaggeredBoxButtonText })
    }

    const onChangeStaggeredBoxButtonLink = (newStaggeredBoxButtonLink) => {
      setAttributes({ staggeredBoxButtonLink: newStaggeredBoxButtonLink })
    }

    const onStaggeredBoxImageSelect = (newStaggeredBoxImageURL) => {
      setAttributes({ staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.full.url })
      setAttributes({ staggeredBoxImageAltText: newStaggeredBoxImageURL.alt})
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

        <div className={`${className}  mojblocks-staggered-block`}>
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds mojblocks-staggered-block__image-container">
                <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText} />

                <div className="mojblocks-staggered-block__image-credit-container">
                  <i className="image-caption" aria-hidden="true"></i>
                  <RichText
                    tagName="p"
                    value={staggeredBoxImageCredit}
                    onChange={onChangeStaggeredBoxImageCredit}
                    className="mojblocks-staggered-block__image-credit-text"
                    placeholder={__('Add staggered box image credit', 'mojblocks')}
                    keepPlaceholderOnFocus={true}
                  />
                </div>

              </div>

              <div className="mojblocks-staggered-block__text-container govuk-grid-column-one-half" >
                <RichText
                  tagName="h2"
                  value={staggeredBoxTitle}
                  onChange={onChangeStaggeredBoxTitle}
                  className="mojblocks-staggered-block__title"
                  placeholder={__('Add staggered box title', 'mojblocks')}
                  keepPlaceholderOnFocus={true}
                />
                <RichText
                  tagName="p"
                  value={staggeredBoxContent}
                  onChange={onChangeStaggeredBoxContent}
                  className="mojblocks-staggered-block__content"
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
                  className="mojblocks-staggered-block__button"
                  placeholder={__('Add staggered box button', 'mojblocks')}
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
      attributes: { staggeredBoxTitle, staggeredBoxContent, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxImageURL, staggeredBoxImageCredit, staggeredBoxImageAltText }
    } = props;

    return (

    <div className="mojblocks-staggered-block">
      <div className="govuk-width-container">
          <div className="govuk-grid-row">

            <div className="govuk-grid-column-two-thirds mojblocks-staggered-block__image-container">
              <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText}/>
              <div className="mojblocks-staggered-block__image-credit-container">
                <i className="image-caption" aria-hidden="true"></i>
                <RichText.Content tagName="p" className="mojblocks-staggered-block__image-credit-text" value={staggeredBoxImageCredit} />
              </div>
            </div>

            <div className="mojblocks-staggered-block__text-container govuk-grid-column-one-half" >
              <RichText.Content className="mojblocks-staggered-block__title" tagName="h2" value = { staggeredBoxTitle } />
              <RichText.Content className="mojblocks-staggered-block__content" tagName="p" value = { staggeredBoxContent } />
              <a className="mojblocks-staggered-block__button" href={staggeredBoxButtonLink}>
                <RichText.Content  value = { staggeredBoxButtonText } />
              </a>
            </div>

          </div>
      </div>
    </div>

    );
  }
});

// style variations
registerBlockStyle('mojblocks/staggered-block',
  {
    name: 'image-right',
    label: 'Image aligned on the right',
    isDefault: true,
  }
);
registerBlockStyle('mojblocks/staggered-block',
  {
    name: 'staggered-block-image-left',
    label: 'Image aligned on left'
  }
);
