import { store as coreStore } from '@wordpress/core-data';

const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { Fragment } = wp.element;
const { useSelect } = wp.data;
const { InspectorControls, MediaUpload, InnerBlocks } = wp.blockEditor;
const { PanelBody, SelectControl, Button, TextControl, ToggleControl, RadioControl} = wp.components;
const allowedMediaTypes = ['image'];

import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __experimentalText as Text } from '@wordpress/components';

registerBlockType("mojblocks/auto-item-list", {
  title: __("Items List", "mojblocks"),
  description: __('Auto-populates with most recent or next items based on a date'),
  category: "mojblocks",
  icon: "slides",
  keywords: [__('latest item'), __('latest news'), __('recent items'), __('recent news'),  __('next items'), __('headlines')],

  attributes: {
    listHasDate: {
      type: "boolean",
      default: true
    },
    listHasTime: {
      type: "boolean",
      default: false
    },
    listLength: {
      type: "numeric",
      default: 3
    },
    listExpiry: {
      type: "numeric",
      default: 0
    },
    listEmptyText: {
      type: "string",
      default: "No items to display."
    },
    listItemType: {
      type: "string",
      default: "post"
    },
    listImage: {
      type: "boolean",
      default: false
    },
    listDefaultImage: {
      type: "string",
      default: ""
    },
    pastFuture: {
      type: "string",
      default: "past"
    }

  },

  edit: props => {
    const {
      setAttributes,
      attributes: {
        listLength,
        listExpiry,
        listEmptyText,
        listHasDate,
        listHasTime,
        listItemType,
        listImage,
        listDefaultImage,
        pastFuture
      },
      className
    } = props

    const {
      allPostTypes,
    } = useSelect(
      ( select ) => {
          const { getPostTypes } = select(
          coreStore
        );
        const allPostTypesList = getPostTypes(
          { per_page: -1 }
        );
        return {
          allPostTypes: allPostTypesList
        };
      }
    );

    let itemTypes = [{
      label: "-",
      value: ""
    }]
    let itemTypesFinishedParsing = false;

    if (allPostTypes) {
      allPostTypes.forEach(thisPostType => {
        if (thisPostType.name != "Media" && thisPostType.name != "Posts" && thisPostType.name != "Pages" && thisPostType.viewable) {
          itemTypes.push({
            label: thisPostType.name,
            value: thisPostType.slug
          });
        }
      });
      itemTypesFinishedParsing = true;
    }

    const {
      allDocuments,
    } = useSelect(
      ( select ) => {
        if (listItemType) {

          const { getEntityRecords } = select(
            coreStore
          );

          const posts = getEntityRecords(
            'postType',
            listItemType,
            { per_page: -1 }
          );

          return {
            allDocuments: posts
          };
        } else {
          return {
            allDocuments: false
          };
        }
      }
    );

    const setItemType = newItemType => {
      setAttributes({ listItemType: newItemType });
    };
    const setLength = newLength => {
      setAttributes({ listLength: newLength });
    };
    const setHasDate = newDateSetting => {
      setAttributes({ listHasDate: newDateSetting });
    };
    const setHasTime = newTimeSetting => {
      setAttributes({ listHasTime: newTimeSetting });
    };
    const setEmptyText = newEmptyText => {
      setAttributes({ listEmptyText: newEmptyText } );
    };
    const setExpiry = newExpiry => {
        setAttributes({ listExpiry: newExpiry } );
    };
    const setHasImage = newHasImage => {
        setAttributes({ listImage: newHasImage } );
    };
    const removeImage = () => {
      setAttributes({
        listDefaultImage: null,
      });
    };
    const setImage = newImage => {
      setAttributes({ listDefaultImage: newImage });
    };
    const setPastFuture = newTemporalRelationship => {
      setAttributes({ pastFuture: newTemporalRelationship });
    };

    let title = 'Title automatically updated on preview page';
    let date = 'Date';
    let placeholderImageText = 'Logo will be used if no image on item';
    let listImageStyle = {
      backgroundImage: 'url(' + listDefaultImage + ')'
    }

    if (itemTypes.length <= 1 && itemTypesFinishedParsing) return (
      <Fragment >
        <InspectorControls>
          <PanelBody
            title={__('Settings')}
            initialOpen={true}
          >
            <TextControl
              label="Text for no items"
              help="This text will always be displayed, as there will never be any items to display"
              value={ listEmptyText }
              onChange={ setEmptyText }
            />
          </PanelBody>
        </InspectorControls>
        <div class="govuk-error-summary" data-module="govuk-error-summary">
          <h2 class="govuk-error-summary__title">
            {listEmptyText}
          </h2>
          <div class="govuk-error-summary__body">
            <p class="govuk-body-l govuk-error-message">
              This website does not have any suitable post types for this block.
            </p>
          </div>
        </div>
      </Fragment>

    );
    if (itemTypes.length > 1) return (
      <Fragment >
        <InspectorControls>
          <PanelBody
            title={__('Settings')}
            initialOpen={true}
        >
            <SelectControl
              label="Select item type"
              value={ listItemType }
              options={ itemTypes }
              onChange={ setItemType }
            />
            <ToggleControl
              label="Show/hide item publish date"
              help={
                listHasDate === false
                ? 'Dates will be hidden'
                : 'Dates will be displayed'
              }
              checked={ listHasDate }
              onChange={ setHasDate }
            />
            {
              (listHasDate) && (<ToggleControl
                label="Show/hide item publish time"
                help={
                  listHasTime === false
                  ? 'Times will be hidden'
                  : 'Times will also be displayed'
                }
                checked={ listHasTime }
                onChange={ setHasTime }
              />)
            }
            <TextControl
              label="Text for no items"
              help={ listEmptyText === ""
                ? "If there are no items to display, the block will be blank."
                : "This will be shown if there are no items to display."
              }
              value={ listEmptyText }
              onChange={ setEmptyText }
            />
            <NumberControl
              label="How many items to include"
              value= { listLength }
              min="1"
              max="6"
              onChange={ setLength }
            />
            <NumberControl
              label="Auto-remove after how many days"
              help="Set to 0 for no limit"
              value= { listExpiry }
              onChange={ setExpiry }
              min="0"
            />
            {
              (pastFuture != "future") && (
                <Text>
                  { !listExpiry || listExpiry == 0
                    ? "Items will not expire."
                    : "Items will be removed after " + listExpiry + " days."
                  }
                </Text>
              )
            }
            {
              (pastFuture == "future") && (
                <Text>
                  { !listExpiry || listExpiry == 0
                    ? `The next ${listLength} items will be displayed, regardless of how distant in the future they are.`
                    : `Items will only appear when they are less than ${listExpiry} days in the future.`
                  }
                </Text>
              )
            }
            <ToggleControl
              className='govuk-!-margin-top-3'
              label="Show item image"
              help={
                listImage === true
                ? 'Items without an image will use the site logo or a designated alternative'
                : ''
              }
              checked={ listImage }
              onChange={ setHasImage }
            />
            {
              (listImage) && (<MediaUpload
                buttonProps={{
                  className: 'change-image',
                }}
                onSelect={
                  (image) => {
                    var imageSizes = image.sizes;

                    // determine the image size displayed with fallbacks
                    if (typeof imageSizes.medium !== 'undefined') {
                      var imageURL = imageSizes.medium.url;
                    } else {
                      var imageURL = imageSizes.full.url;
                    }

                    setAttributes({
                      listDefaultImage: imageURL,
                    })
                  }
                }
                allowedTypes={ allowedMediaTypes }
                type="image"
                value={ listDefaultImage }
                render={({ open }) => (
                  <Fragment>
                    <Button className={'button govuk-!-margin-bottom-3'}
                      onClick={open}
                    >
                      Select alternative default image
                    </Button>
                    {listDefaultImage && (
                      <Button
                        className={'button govuk-!-margin-bottom-3'}
                        onClick={ removeImage }
                      >
                        Use site logo
                      </Button>
                    )}
                  </Fragment>
                )}
              />)
            }
          </PanelBody>
        </InspectorControls>

        <div className={`mojblocks-auto-item-list mojblocks-auto-item-list--expiry-days-${listExpiry} ${className}`}>
          <div className="govuk-width-container">
            <div className={`govuk-grid-row ${listHasDate === false ? 'mojblocks-auto-item-list-hide-date' : ''} ` }>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                  <br />
                  {pastFuture == "future" ? "(next scheduled item)" : "(most recent item)" }
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item mojblocks-auto-item-list__item--${listLength}`}>
                {(listImage && listDefaultImage) && (<div class="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
                {(listImage && !listDefaultImage) && (<div class="mojblocks-auto-item-list__no-image"><span>{placeholderImageText}</span></div>)}
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date } {listHasTime ? ' & time' : '' }</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  },

    save: () => { return <InnerBlocks.Content />; }
});
