/**
 * Latest News
 *
 * Block metadata — name, title, icon, category, keywords, attributes — lives in
 * block.json and is registered server-side from mojblocks.php. This file only
 * supplies the editor behaviour.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import {
  InnerBlocks,
  InspectorControls,
  useBlockProps,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  ToggleControl,
  __experimentalNumberControl as NumberControl,
  __experimentalText as Text,
} from '@wordpress/components';

import metadata from './block.json';

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

registerBlockType(metadata.name, {

  edit: props => {
    const {
      setAttributes,
      attributes: {
        latestNewsExpiry,
        latestNewsEmptyText,
        latestNewsHasDate
      }
    } = props

    // apiVersion 3: the wrapper element must carry the props returned by
    // useBlockProps. className is no longer passed to edit() as a prop.
    //
    // The expiry-weeks modifier is editor-only — nothing styles it and the
    // frontend wrapper has never carried it — but it is kept so the editor
    // markup is unchanged.
    const blockProps = useBlockProps({
      className: `mojblocks-latest-news mojblocks-latest-news--expiry-weeks-${latestNewsExpiry}`
    });

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
                latestNewsHasDate === false
                ? 'Dates will be hidden'
                : 'Dates will be displayed'
              }
              checked={ latestNewsHasDate }
              onChange={ setHasDate }
            />
            <TextControl
              label="Text for no news"
              help={ latestNewsEmptyText === ""
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
             { !latestNewsExpiry
                ? "Articles will not expire."
                : "Articles will expire after " + latestNewsExpiry + " weeks."
              }
            </Text>

          </PanelBody>
        </InspectorControls>

        <div { ...blockProps }>
          <div className="govuk-width-container">
            <InnerBlocks
              template={ templateLatestNewsBlock }
              templateLock="all"
            />
            <div className={`govuk-grid-row ${latestNewsHasDate === false ? 'mojblocks-latest-news-hide-date' : ''} ` }>
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
