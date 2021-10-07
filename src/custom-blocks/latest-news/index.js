const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateLatestNewsBlock = [
  [ 'core/heading', { placeholder: 'Add latest news section title' } ]
];
let title0 = 'Title automatically updated';
let title1 = 'Title automatically updated';
let title2 = 'Title automatically updated';
let date0 = 'Date';
let date1 = 'Date';
let date2 = 'Date';

function datify(x) {
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
  const d = new Date();

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

function checkExpired() {
  //loop through all dates
  let dates = document.querySelector('.mojblocks-latest-news__date');

  for (i=0; i<dates.length;i++) {

  }


}

wp.apiFetch( { path: '/wp/v2/news?per_page=3' } ).then( function( posts ){
  console.log( 'Title of the first item is: ' + posts[0].title.rendered );
  console.log( posts[0] );
  document.querySelector('.mojblocks-latest-news__title-0').innerHTML = posts[0].title.rendered;
  document.querySelector('.mojblocks-latest-news__title-1').innerHTML = posts[1].title.rendered;
  document.querySelector('.mojblocks-latest-news__title-2').innerHTML = posts[2].title.rendered;
  document.querySelector('.mojblocks-latest-news__date-0').innerHTML = datify(posts[0].date);
  document.querySelector('.mojblocks-latest-news__date-1').innerHTML = datify(posts[1].date);
  document.querySelector('.mojblocks-latest-news__date-2').innerHTML = datify(posts[2].date);

} );


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
      attributes: { latestNewsTitle },
        className,
        setAttributes
    } = props

    const [ newsNumber, setNewsNumber ] = useState( '3' );
    const [ expiry, setExpiry ] = useState( 0 );
    const [ emptyText, setEmptyText ] = useState( "No news to display." );
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
                ? 'Dates will be displayed'
                : 'Dates will be hidden'
              }
              checked={ hasDate }
              onChange={ setAttributes({ latestNewsHasDate: hasDate } ) }
              onChange={ () => {
                setHasDate( ( state ) => ! state );
              } }
            />
            <TextControl
              label="Text for no news"
              help={ !emptyText 
                ? "If there are no news articles to display, the block will be blank."
                : "This will be shown if there are no articles to display."
              }
              value={ emptyText }
              onChange={ setAttributes({ latestNewsEmptyText: emptyText } ) }
              onChange={ setEmptyText }
            />
            <NumberControl
              label="Auto-hide after how many weeks"
              value= {expiry}
              min="0"
              onChange={ setAttributes({ latestNewsExpiry: expiry } ) }
              onChange={ setExpiry }
            />
            <Text>
             { expiry === 0 
                ? "Articles will not expire."
                : "Articles will expire after " + expiry + " weeks."
              }
            </Text>

          </PanelBody>
        </InspectorControls>

        <div className={`${className} mojblocks-latest-news`}>
          <div className="govuk-width-container">
            <InnerBlocks
              template={ templateLatestNewsBlock }
              templateLock="all"
            />
            <div className={`govuk-grid-row mojblocks-latest-news--expiry-weeks-${expiry} ${hasDate ? '' : 'mojblocks-latest-news-hide-date'} ` }>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a className="mojblocks-latest-news__title-0" href="#">{title0}</a>
                </div>
                <div className="mojblocks-latest-news__date mojblocks-latest-news__date-0" >
                  {date0.toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a className="mojblocks-latest-news__title-1" href="#">{title1}</a>
                </div>
                <div className="mojblocks-latest-news__date mojblocks-latest-news__date-1" >
                  {date1.toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a className="mojblocks-latest-news__title-2" href="#">{title2}</a>
                </div>
                <div className="mojblocks-latest-news__date mojblocks-latest-news__date-2" >
                  {date2.toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
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
