const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType("mojblocks/staggered-box-button-no-caption", {
  title: __("Staggered Box with button but no image caption", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered box'), __('photo box')],
  parent: 'mojblocks/staggered-box',

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
      setAttributes({ staggeredBoxTitle: newStaggeredBoxTitle })
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
      setAttributes({ staggeredBoxImageAltText: newStaggeredBoxImageURL.alt })
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
      attributes: { staggeredBoxTitle, staggeredBoxContent, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxImageURL, staggeredBoxImageCredit, staggeredBoxImageAltText }
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
              <a className="mojblocks-staggered-box__button" href={staggeredBoxButtonLink}>
                <RichText.Content value={staggeredBoxButtonText} />
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
