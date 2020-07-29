
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = ['image'];

registerBlockType("mojblocks/staggered-block", {
  title: __("Staggered Block", "mojblocks"),
  category: "mojblocks",
  icon: "admin-page",
  example: {
    attributes: {
      staggeredBoxTitle: 'title',
      staggeredBoxContent: 'Enter the content you want to see in the box',
      staggeredBoxButton: 'Button text',
      staggeredBoxImageURL: ''
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
    }
  },

  edit: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImageURL, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxTitle },
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
    }


    return (
      <div>
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
        <div className="mojblocks-staggered-block__text-container">
          <RichText
            tagName = "h2"
            value = { staggeredBoxTitle }
            onChange = { onChangeStaggeredBoxTitle }
            placeholder = {__('Add staggered box title', 'mojblocks')}
            keepPlaceholderOnFocus = { true }
          />
          <RichText
            tagName = "p"
            value = { staggeredBoxContent }
            onChange = { onChangeStaggeredBoxContent }
            placeholder = {__('Add staggered box content', 'mojblocks')}
            keepPlaceholderOnFocus = { true }
          />
          <URLInputButton
            label={__('Button link', 'mojblocks')}
            onChange={ onChangeStaggeredBoxButtonLink }
            url={ staggeredBoxButtonLink }
          />
          <RichText
            value = { staggeredBoxButtonText }
            onChange = { onChangeStaggeredBoxButtonText }
            placeholder = {__('Add staggered box button', 'mojblocks')}
          />
        </div>
        <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt="" />
      </div>
    );
  },

  save: props => {

    const {
      attributes: { staggeredBoxTitle, staggeredBoxContent, staggeredBoxButtonText, staggeredBoxButtonLink, staggeredBoxImageURL }
    } = props;

    return (
      <div>
        <div className="mojblocks-staggered-block__text-container">
          <RichText.Content tagName="h2" value = { staggeredBoxTitle } />
          <RichText.Content tagName="p" value = { staggeredBoxContent } />
          <a href={staggeredBoxButtonLink}>
            <RichText.Content tagName="button" value = { staggeredBoxButtonText } />
          </a>
        </div>
        <img className="mojblocks-staggered-block__image" src={staggeredBoxImageURL} alt=""/>
      </div>
    );
  }
});

wp.blocks.registerBlockStyle(
  'mojblocks/staggered-block',
  [
    {
      name: 'default',
      label: 'Default',
      isDefault: true,
    },
    {
      name: 'staggered-block-image-left',
      label: 'Image aligned on left'
    },
  ]
);
