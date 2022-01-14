const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateLatestNewsBlock = [
  [ 'core/heading', { placeholder: 'Add latest news section title' } ]
];
let title0 = 'Title automatically updated on preview page';
let title1 = 'Title automatically updated on preview page';
let title2 = 'Title automatically updated on preview page';
let date0 = 'Date';
let date1 = 'Date';
let date2 = 'Date';
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
import { TextControl } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __experimentalText as Text } from '@wordpress/components';

registerBlockType("mojblocks/latest-news", {
  title: __("Latest News", "mojblocks"),
  description: __('Display latest news items'),
  category: "mojblocks",
  icon: "slides",
  keywords: [__('latest news'), __('recent news'), __('headlines')],

  attributes: {
    latestNewsNumber: {
      type: "string"
    },
    latestNewsHasDate: {
      type: "boolean"
    },
    latestNewsExpiry: {
      type: "numeric"
    },
    latestNewsEmptyText: {
      type: "string"
    }
  },

  edit: props => {
    const {
      setAttributes,
      attributes: {
        latestNewsTitle,
        latestNewsExpiry = useState(0),
        latestNewsEmptyText = useState( "No news to display." ),
        latestNewsHasDate = useState( true )
      },
      className
    } = props

    const [ newsNumber, setNewsNumber ] = useState( '3' );

    const setHasDate = newDateSetting => {
      setAttributes({ latestNewsHasDate: newDateSetting });
    };
    const setEmptyText = newEmptyText => {
      setAttributes({ latestNewsEmptyText: newEmptyText } );
    };
    const setExpiry = newExpiry => {
        setAttributes({ latestNewsExpiry: newExpiry } );
    };
  
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
                latestNewsHasDate
                ? 'Dates will be displayed'
                : 'Dates will be hidden'
              }
              checked={ latestNewsHasDate }
              onChange={ setHasDate }
            />
            <TextControl
              label="Text for no news"
              help={ !latestNewsEmptyText
                ? "If there are no news articles to display, the block will be blank."
                : "This will be shown if there are no articles to display."
              }
              value={ latestNewsEmptyText }
              onChange={ setEmptyText }
            />
            <NumberControl
              label="Auto-hide after how many weeks"
              value= { latestNewsExpiry }
              min="0"
              onChange={ setExpiry }
            />
            <Text>
             { latestNewsExpiry == 0
                ? "Articles will not expire."
                : "Articles will expire after " + latestNewsExpiry + " weeks."
              }
            </Text>

          </PanelBody>
        </InspectorControls>

        <div className={`mojblocks-latest-news mojblocks-latest-news--expiry-weeks-${latestNewsExpiry} ${className}`}>
          <div className="govuk-width-container">
            <InnerBlocks
              template={ templateLatestNewsBlock }
              templateLock="all"
            />
            <div className={`govuk-grid-row ${latestNewsHasDate ? '' : 'mojblocks-latest-news-hide-date'} ` }>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">{title0}</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  { date0 }
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">{title1}</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  { date1 }
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">{title2}</a>
                </div>
                <div className="mojblocks-latest-news__date">
                  { date2 }
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
