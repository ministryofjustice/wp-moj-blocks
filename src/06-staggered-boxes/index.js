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
  example: {
    attributes: {
      staggeredBoxTitle: 'Exciting title',
      staggeredBoxContent: 'Some exciting text that fits with the title',
      staggeredBoxButtonLink: 'https://www.google.com/',
      staggeredBoxButtonText: 'Interesting link',
      staggeredBoxImageURL: 'https://giphy.com/gifs/xFoV7P0JsHwoZvHXP6',
    },
  },

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
    staggeredBoxButtonText: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__button"
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
    staggeredBoxImageAltText: {
      type: "string",
      source: "attribute",
      attribute: "alt"
    }
  },

  edit: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxTitle, staggeredBoxImageAltText, className },
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


    return (

      <Fragment >
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

  save: props => {

    const {
      attributes: { staggeredBoxTitle, staggeredBoxContent, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxImageURL, staggeredBoxImageAltText }
    } = props;

    return (

    <div className="mojblocks-staggered-box">
      <div className="govuk-width-container">
          <div className="govuk-grid-row">

            <div className="govuk-grid-column-two-thirds mojblocks-staggered-box__image-container">
              <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt={staggeredBoxImageAltText}/>
            </div>

            <div className="mojblocks-staggered-box__text-container govuk-grid-column-one-half" >
              <RichText.Content className="mojblocks-staggered-box__title" tagName="h2" value = { staggeredBoxTitle } />
              <RichText.Content className="mojblocks-staggered-box__content" tagName="p" value = { staggeredBoxContent } />
              <a className="mojblocks-staggered-box__button" href={staggeredBoxButtonLink}>
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
