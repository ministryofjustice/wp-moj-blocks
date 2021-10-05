const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;

import { SelectControl } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

registerBlockType("mojblocks/latest-news", {
  title: __("Latest News", "mojblocks"),
  description: __('Display latest news items'),
  category: "mojblocks",
  icon: "slides",
  keywords: [__('latest news'), __('photo block')],

  attributes: {
    latestNewsTitle: {
      type: "string"
    },
    latestNewsLink: {
      type: "string"
    },
    latestNewsImageURL: {
      type: "string"
    },
    laterstNewsImageAltText: {
      type: "string"
    },
    latestNewsNumber: {
      type: "string"
    },
    latestNewsHasDate: {
      type: "boolean"
    },
    latestNewsHasImage: {
      type: "boolean"
    },
    latestNewsCutOff: {
      type: "numeric"
    },
    latestNewsExpiry: {
      type: "numeric"
    }
  },

  edit: props => {
    const {
      attributes: { latestNewsTitle },
        className,
        setAttributes
    } = props

    const onChangeLatestNewsTitle = newlatestNewsTitle => {
      setAttributes({ latestNewsTitle: newlatestNewsTitle})
    }
    
    const [ newsNumber, setNewsNumber ] = useState( '3' );
    const [ expiry, setExpiry ] = useState( 0 );
    const [ hasDate, setHasDate ] = useState( true );
    const [ hasImage, setHasImage ] = useState( true );

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
            <ToggleControl
              label="Show/hide images"
              help={
                hasImage
                ? 'Images will be shown if present'
                : 'Images will be hidden'
              }
              checked={ hasImage }
              onChange={ setAttributes({ latestNewsHasImage: hasImage } ) }
              onChange={ () => {
                setHasImage( ( state ) => ! state );
              } }
            />
            <NumberControl
              label="Auto-hide after how many weeks"
              value= {expiry}
              min="0"
              onChange={ setAttributes({ latestNewsExpiry: expiry } ) }
              onChange={ setExpiry }
            />

          </PanelBody>
        </InspectorControls>

        <div className={`${className} mojblocks-latest-news`}>
          <div className="govuk-width-container">
            <RichText
              tagName="h2"
              value={latestNewsTitle}
              onChange={onChangeLatestNewsTitle}
              className="mojblocks-latest-news__title"
              placeholder={__('Add latest news section title', 'mojblocks')}
              keepPlaceholderOnFocus={true}
            />
            <div className={`govuk-grid-row mojblocks-latest-news--item-count-${newsNumber} ${hasDate ? '' : 'mojblocks-latest-news-hide-date'} ${hasImage ? 'mojblocks-latest-news-shew-image' : 'mojblocks-latest-news-hide-image'}` }>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__image"></div>
                <div className="mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__image"></div>
                <div className="mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__image"></div>
                <div className="mojblocks-latest-news__headline" >
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

    save: () => null
});
