const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const { PanelBody } = wp.components;

import { SelectControl } from '@wordpress/components';
import { ToggleControl } from '@wordpress/components';
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
    latestNewsClassName: {
      type: "string"
    },
    latestNewsNumber: {
      type: "string"
    },
    latestNewsHasDate: {
      type: "boolean"
    },
    latestNewsCutOff: {
      type: "numeric"
    }
  },

  edit: props => {
    const {
      attributes: { latestNewsTitle },
        className,
        setAttributes
    } = props

    setAttributes({ latestNewsClassName: className });
    
    const onChangeLatestNewsTitle = newlatestNewsTitle => {
      setAttributes({ latestNewsTitle: newlatestNewsTitle})
    }
    
    const [ newsNumber, setNewsNumber ] = useState( '3' );
    const [ hasDate, setHasDate ] = useState( true );

    return (
      <Fragment >
        <InspectorControls>
          <PanelBody
            title={__('News settings')}
            initialOpen={true}
        >
            <SelectControl
              label="Number of articles"
              value= {newsNumber}
              options={ [
                { label: 'One', value: '1' },
                { label: 'Two', value: '2' },
                { label: 'Three', value: '3' },
                { label: 'Four', value: '4' },
              ] }
              onChange={ setAttributes({ latestNewsNumber: newsNumber } ) }
              onChange={ (newNewsNumber) => setNewsNumber(newNewsNumber) }
              />

            <ToggleControl
              label="Show/hide article date"
              help={
                hasDate
                ? 'Date will be shewn'
                : 'Date will be hidden'
              }
              checked={ hasDate }
              onChange={ setAttributes({ latestNewsHasDate: hasDate } ) }
              onChange={ () => {
                setHasDate( ( state ) => ! state );
              } }
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
            <div className={`mojblocks-latest-news--item-count-${newsNumber} govuk-grid-row ${hasDate ? '' : 'mojblocks-latest-news-hide-date'}`}>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
                <div className="mojblocks-latest-news__headline" >
                  <a href="#">News Headline Automatically Populated</a>
                </div>
                <div className="mojblocks-latest-news__date" >
                  {new Date().toLocaleString('en-GB', {day: '2-digit', month: 'long' }) + ''}
                </div>
              </div>
              <div className="mojblocks-latest-news__item">
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

registerBlockStyle('mojblocks/latest-news',
  {
    name: 'news-columns--i',
    label: '1 × 𝑥',
  }
);
registerBlockStyle('mojblocks/latest-news',
  {
    name: 'news-columns--ii',
    label: '2 × 𝑥',
  }
);
registerBlockStyle('mojblocks/latest-news',
  {
    name: 'news-columns--iii',
    label: '3 × 𝑥',
    isDefault: true,
  }
);
