
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { format } = wp.date;
const { RichText, InnerBlocks } = wp.blockEditor;
const { dispatch, subscribe, select, withSelect } = wp.data;


registerBlockType("mojblocks/staggered-block", {
  title: __("Staggered Block", "mojblocks"),
  category: "mojblocks",
  icon: "admin-post",
  example: {
    attributes: {
      staggeredBoxContent: 'Enter the content you want to see in the box',
      staggeredBoxImage: 'Upload the image you want next to the text'
    },
  },
  attributes: {
    staggeredBoxContent: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__content"
    },
    staggeredBoxImage: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__image"
    }
  },
  edit: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImage },
      setAttributes
    } = props

    const onChangeStaggeredBoxContent = (newStaggeredBoxContent) => {
      setAttributes({ staggeredBoxContent: newStaggeredBoxContent })
    }

    const onChangeStaggeredBoxImage = (newStaggeredBoxImage) => {
      setAttributes({ staggeredBoxImage: newStaggeredBoxImage })
    }

      return (
        <div className="nhsuk-review-date">
          <p className="nhsuk-body-s">
            Staggered box gutenberg
            <RichText
              value={ staggeredBoxContent }
              onChange={ onChangeStaggeredBoxContent }
            />
          </p>
        </div>
      );
    },
  save: props => {

    const {
      attributes: { staggeredBoxContent, staggeredBoxImage }
    } = props;

    return (
      <div className="nhsuk-review-date">
        <p>Staggered box front-end</p>
        <RichText.Content value={ staggeredBoxContent } />
        <img src="https://pusheen.com/wp-content/themes/pusheen-custom/img/header-pusheen.gif" />
      </div>
    );
  }
});