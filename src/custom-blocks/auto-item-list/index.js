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
    listEmptyText: {
      type: "string",
      default: "No items to display."
    },
    listItemType: {
      type: "string",
      default: "post"
    },
    listTaxonomy: {
      type: "string",
      default: ""
    },
    listTaxonomyOptions: {
      type: "array",
      default: []
    },
    listTaxonomyValueArray: {
      type: "array",
      default: []
    },
    listClassName: {
      type: 'string'
    }

  },

  edit: props => {
    const {
      setAttributes,
      attributes: {
        listEmptyText,
        listHasDate,
        listItemType,
        listTaxonomy,
        listTaxonomyOptions,
        listTaxonomyValueArray,
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
    let restrctedPostTypes = ["Media", "Posts", "Pages"];
    let itemTypesFinishedParsing = false;

    if (allPostTypes) {
      allPostTypes.forEach(thisPostType => {

        //Prevents core post types to be shown but still allows CPTs which do not have single views
        if (!restrctedPostTypes.includes(thisPostType.name) && thisPostType.visibility.show_ui && thisPostType.visibility.show_in_nav_menus) {
          itemTypes.push({
            label: thisPostType.name,
            value: thisPostType.slug
          });
        }
      });
      itemTypesFinishedParsing = true;
    }

    const {
      allTaxonomies,
      taxonomyOptions,
      taxonomyValues,
      selectedOptionName
    } = useSelect(
      ( select ) => {
        if (allPostTypes) {
          const { getEntityRecords } = select(
            coreStore
          );

          let allTaxes = [];
          let taxOptionList = [{
            label: "Show all",
            value: ""
          }]
          let taxValueList = []

          allPostTypes.forEach(thisPostType => {
            if (thisPostType.slug == listItemType && thisPostType.taxonomies.length) {
              thisPostType.taxonomies.forEach(tax => {
                let taxValues = getEntityRecords( 'taxonomy', tax, { per_page: -1 });
                if (taxValues && taxValues.length > 1) {
                  taxOptionList.push({
                    label: tax.charAt(0).toUpperCase() + tax.slice(1).replaceAll('_', ' '),
                    value: tax
                  })
                  allTaxes[tax] = [];
                  taxValues.forEach(taxValue => {
                    if (listTaxonomy == tax) {
                      taxValueList.push({
                        label: taxValue.name,
                        value: taxValue.id
                      })
                    }
                    allTaxes[tax].push(taxValue);
                  });
                }
              });
            }
          });
          return {
            allTaxonomies: allTaxes,
            selectedOptionName: listTaxonomy.replaceAll('_', ' '),
            taxonomyOptions: taxOptionList,
            taxonomyValues: taxValueList
          }
        } else {
          return {
            allTaxonomies: false,
            selectedOptionName: "",
            taxonomyOptions: [{
              label: "-",
              value: ""
            }],
            taxonomyValues: [{
              label: "-",
              value: ""
            }]
          };
        }
      }
    );

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

    const setTaxonomy = newTaxonomy => {
      setAttributes({ listTaxonomy: newTaxonomy });

      // pass through the valid options for the newly selected taxonomy
      let newTaxonomyOptions = [];
      allTaxonomies[newTaxonomy].forEach(taxOption => {
        newTaxonomyOptions.push(taxOption.id);
      });
      setAttributes({ listTaxonomyOptions: newTaxonomyOptions });
    };
    const setTaxonomyValue = newTaxonomyValue => {
      setAttributes({ listTaxonomyValueArray: newTaxonomyValue });
    };

    // Set className attribute for PHP frontend to use
    setAttributes({ listClassName: className });

    const setItemType = newItemType => {
      setAttributes({ listItemType: newItemType });
    };
    const setHasDate = newDateSetting => {
      setAttributes({ listHasDate: newDateSetting });
    };
    const setEmptyText = newEmptyText => {
      setAttributes({ listEmptyText: newEmptyText } );
    };

    let title = 'Title automatically updated on preview page';
    let date = 'Date';

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
            {
              (taxonomyOptions.length > 1) && (
                <SelectControl
                  label="Restrict by taxonomy"
                  value={ listTaxonomy }
                  options={ taxonomyOptions }
                  onChange={ setTaxonomy }
                />
              )
            }
            {
              (listTaxonomy != "") && (
                <SelectControl
                  multiple
                  label={`Select ${selectedOptionName}`}
                  value={ listTaxonomyValueArray }
                  options={ taxonomyValues }
                  onChange={ setTaxonomyValue }
                />
              )
            }
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
            <TextControl
              label="Text for no items"
              help={ listEmptyText === ""
                ? "If there are no items to display, the block will be blank."
                : "This will be shown if there are no items to display."
              }
              value={ listEmptyText }
              onChange={ setEmptyText }
            />
          </PanelBody>
        </InspectorControls>

        <div className={`mojblocks-auto-item-list ${className}`}>
          <div className="govuk-width-container govuk-!-margin-0">
            <div className={`govuk-grid-row ${listHasDate === false ? 'mojblocks-auto-item-list-hide-date' : ''} ` }>
              <div className={`mojblocks-auto-item-list__item`}>
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date }</i>
                  <br />
                  (most recent item)
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item`}>
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date }</i>
                </p>
              </div>
              <div className={`mojblocks-auto-item-list__item`}>
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className="mojblocks-auto-item-list__date">
                  <i>{ date }</i>
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
