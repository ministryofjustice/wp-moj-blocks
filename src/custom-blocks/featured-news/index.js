const { registerBlockType, registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;
/*
const { Fragment } = wp.element;
// const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateFeaturedNewsBlock = [
  [ 'core/heading', { placeholder: 'Add featured news section title' } ]
];
const d = new Date();
*/


import { InnerBlocks } from "@wordpress/block-editor";

import edit from './edit';

registerBlockType("mojblocks/featured-news", {
  title: __("Featured News", "mojblocks"),
  description: __('Display featured news item'),
  category: "mojblocks",
  icon: "id-alt",
  keywords: [__('featured news'), __('headline news'), __('headlines')],

  attributes: {
    featuredNewsHasDate: {
      type: "boolean"
    },
    featuredNewsLink: {
      value: "Read full article",
      type: "string"
    },
    featuredNewsEmptyText: {
      type: "string"
    },
    featuredNewsID: {
      type: "string"
    }
  },
/*
  edit: props => {

    const {
      attributes: { featuredNewsLink },
        className,
        setAttributes
    } = props

    const onChangefeaturedNewsLink = newFeaturedNewsLink => {
      setAttributes({ featuredNewsLink: newFeaturedNewsLink})
    }

    const [ hasDate, setHasDate ] = useState( true );
    const [ story, setStory ] = useState( 'none' );

    return (
      <Fragment >
        <InspectorControls>
          <PanelBody
            title={__('News settings')}
            initialOpen={true}
          >
            <SelectControl
              label="Select news"
              value={ story }
              options={ optionList }
              onChange={ ( newStory ) => setStory( newStory ) }
            />
            <ToggleControl
              label="Show/hide article dates"
              help={
                hasDate
                ? 'The date will be displayed'
                : 'The date will be hidden'
              }
              checked={ hasDate }
              onChange={ setAttributes({ featuredNewsHasDate: hasDate } ) }
              onChange={ () => {
                setHasDate( ( state ) => ! state );
              } }
            />
          </PanelBody>
        </InspectorControls>

        <div className={`mojblocks-featured-news mojblocks-featured-news--${story} ${className}`}>
          <div className="govuk-width-container">
            <InnerBlocks
              template={ templateFeaturedNewsBlock }
              templateLock="all"
            />
            <div className={`govuk-grid-row ${hasDate ? '' : 'mojblocks-featured-news-hide-date'} ` }>
              <div class="mojblocks-featured-news__item">
                <div class="mojblocks-featured-news__image">
                </div>
                <div className="mojblocks-featured-news__text">
                  <div className="govuk-body govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline" >
                    { title }
                  </div>
                  <div className="govuk-body mojblocks-featured-news__summary" >
                    { summary }
                  </div>
                  <div className="govuk-body-s mojblocks-featured-news__date" >
                    { datify(date,d) }
                  </div>
                  <RichText
                    tagName="div"
                    value={featuredNewsLink ? 'Read full article' : featuredNewsLink }
                    onChange={onChangefeaturedNewsLink}
                    className="govuk-button mojblocks-featured-news__link"
                    placeholder={__('Read full article', 'mojblocks')}
                    keepPlaceholderOnFocus={true}
                  />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  },
*/
    edit, 
    save: () => { return <InnerBlocks.Content />; }
});
