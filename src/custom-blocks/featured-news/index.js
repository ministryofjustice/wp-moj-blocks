const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateLatestNewsBlock = [
  [ 'core/heading', { placeholder: 'Add latest news section title' } ]
];
const d = new Date();

function datify(x,d) {
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
import { DateTimePicker } from '@wordpress/components';
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
    featuredNewsExpiry: {
      type: "datetime"
    },
    featuredNewsEmptyText: {
      type: "string"
    }
  },

  edit: props => {
    const {
      attributes: { featuredNewsTitle },
        className,
        setAttributes
    } = props

    const [ expiry, setExpiry ] = useState( '' );
    const [ hasDate, setHasDate ] = useState( true );

   
  
    return (
      <Fragment >
        <InspectorControls>
          <PanelBody
            title={__('News settings')}
            initialOpen={true}
        >
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
            <DateTimePicker
              currentDate={ expiry }
              onChange={ setAttributes({ latestNewsExpiry: expiry } ) }
              onChange={ ( newExpiry ) => setExpiry( newExpiry ) }
            />
          </PanelBody>
        </InspectorControls>

        <div className={`mojblocks-featured-news mojblocks-featured-news--expiry-${expiry} ${className}`}>
          <div className="govuk-width-container">
            <InnerBlocks
              template={ templateFeaturedNewsBlock }
              templateLock="all"
            />
            <div className={`govuk-grid-row ${hasDate ? '' : 'mojblocks-featured-news-hide-date'} ` }>
              <a href="#" className="mojblocks-featured-news__item">
                <div className="govuk-body mojblocks-featured-news__headline" >
                  { title }
                </div>
                <div className="govuk-body mojblocks-featured-news__summary" >
                  { summary }
                </div>
                <div className="mojblocks-featured-news__date" >
                  { datify(date,d) }
                </div>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  },

    save: () => { return <InnerBlocks.Content />; }
});
