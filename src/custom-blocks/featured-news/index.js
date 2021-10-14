const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateFeaturedNewsBlock = [
  [ 'core/heading', { placeholder: 'Add featured news section title' } ]
];
const d = new Date();

let title = "News Headline!!!";
let summary = "The summary will appear here";
let date;

let optionList = [
  { label: 'None', value: 'none' },
]

optionList.push({label: "Latest", value: "latest"});

function datify(x,d) {
  if (!x) return "Date";

  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";

  var x = x.split("-");

  if (x.length != 3) {
    //wrong format, return today
    return d.toLocaleString('en-GB', {day: '2-digit', month: 'long' });
  }

  var day = x[2].substring(0, 2);
  var month = " " + month[parseInt(x[1])];
  var year = " " + x[0];

  if (d.getFullYear() == x[0]) {
    return day + month;
  } else {
    return day + month + year;
  }

}

import { InnerBlocks } from "@wordpress/block-editor";
import { SelectControl } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType("mojblocks/featured-news", {
  title: __("Featured News", "mojblocks"),
  description: __('Display featured news item'),
  category: "mojblocks",
  icon: "dashicons-id-alt",
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
    }
  },

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

    save: () => { return <InnerBlocks.Content />; }
});
