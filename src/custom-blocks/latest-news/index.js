const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;
const templateLatestNewsBlock = [
  [ 'core/heading', { placeholder: 'Add latest news section title' } ]
];

import { InnerBlocks } from "@wordpress/block-editor";
import { TextControl } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
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
            <div className={`govuk-grid-row mojblocks-latest-news--item-count-${newsNumber} ${hasDate ? '' : 'mojblocks-latest-news-hide-date'} ` }>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="govuk-body mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
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
