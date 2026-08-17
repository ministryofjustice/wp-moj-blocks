/**
 * Auto-populated Item List
 *
 * Block metadata — name, title, icon, category, keywords, attributes — lives in
 * block.json and is registered server-side from mojblocks.php. This file only
 * supplies the editor behaviour.
 *
 * Note the listClassName attribute in block.json is legacy: older lists
 * persisted the editor's generated className there so the PHP could read it
 * back. apiVersion 3 no longer passes className to edit(), and the render
 * callback now uses get_block_wrapper_attributes(), so nothing reads or writes
 * it. It stays registered only so it isn't stripped from content saved before
 * that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { useSelect, select } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
  InspectorControls,
  MediaUpload,
  InnerBlocks,
  PanelColorSettings,
  getColorClassName,
  getColorObjectByColorValue,
  useBlockProps,
} from '@wordpress/block-editor';
import {
  __experimentalText as Text,
  PanelBody,
  SelectControl,
  Button,
  TextControl,
  ToggleControl,
} from '@wordpress/components';

import metadata from './block.json';

const allowedMediaTypes = ['image'];

registerBlockType(metadata.name, {

  edit: props => {
    const {
      setAttributes,
      attributes: {
        listEmptyText,
        listHasDate,
        listHasSummary,
        listItemType,
        listTaxonomy,
        listTaxonomyOptions,
        listTaxonomyValueArray,
        listImage,
        listBackupImage,
        backgroundColour,
        backgroundColourClass,
        borderColour,
        textColour,
        textColourClass
      }
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

    // apiVersion 3: the wrapper element must carry the props returned by
    // useBlockProps. className is no longer passed to edit() as a prop.
    //
    // edit() has three possible returns, so the list class is decided here
    // rather than per branch — hooks must be called unconditionally, and only
    // the populated branch renders the list itself.
    const hasItemTypes = itemTypes.length > 1;
    const blockProps = useBlockProps(
      hasItemTypes ? { className: 'mojblocks-auto-item-list' } : {}
    );

    const setItemType = newItemType => {
      setAttributes({ listItemType: newItemType });
      setAttributes({ listTaxonomy: "" });
      setAttributes({ listTaxonomyOptions: [] });
    };
    const setHasDate = newDateSetting => {
      setAttributes({ listHasDate: newDateSetting });
    };
    const setHasSummary = newSummarySetting => {
      setAttributes({ listHasSummary: newSummarySetting });
    };
    const setEmptyText = newEmptyText => {
      setAttributes({ listEmptyText: newEmptyText } );
    };
    const setShowImage = newShowImage => {
      setAttributes({ listImage: newShowImage } );
    };
    const removeBackupImage = () => {
      setAttributes({
        listBackupImage: null,
      });
    };
    const onChangeBackgroundColour = colour => {
      setAttributes( { backgroundColour: colour } );
      if (typeof(colour) === "undefined" || colour == "") {
        setAttributes( { backgroundColourClass: ""} );
      } else {
        const settings = select( 'core/editor' ).getEditorSettings();
        const colourObject = (getColorObjectByColorValue(settings.colors, colour));
        setAttributes( { backgroundColour: colour } );
        setAttributes( { backgroundColourClass: getColorClassName( 'background-color', colourObject.slug ) } );
      }
    };
    const onChangeTextColour = colour => {
      setAttributes( { textColour: colour } );
      if (typeof(colour) === "undefined" || colour == "") {
        setAttributes( { textColourClass: ""} );
      } else {
        const settings = select( 'core/editor' ).getEditorSettings();
        const colourObject = (getColorObjectByColorValue(settings.colors, colour));
        setAttributes( { textColourClass: getColorClassName( 'color', colourObject.slug ) } );
      }
    };
    const onChangeBorderColour = colour => {
      if (typeof(colour) === "undefined") {
        setAttributes( { borderColour: "" } );
      } else {
        setAttributes( { borderColour: colour } );
      }
    };

    let title = 'Title automatically updated on preview page';
    let summary = listHasSummary ? 'The summary text shall be displayed here.': '';
    let date = listHasDate ? 'Date' : "";
    let listImageStyle = {
      backgroundImage: 'url(' + listBackupImage + ')'
    };
    let borderStyle = {borderColor: borderColour};
    let itemClass = "";
    if (backgroundColourClass) {
      itemClass += backgroundColourClass + " has-background ";
    }
    if (textColourClass) {
      itemClass += textColourClass + " has-text-color ";
    }
    if (borderColour) {
      itemClass += " is-bordered";
    }
    if (!borderColour && !backgroundColour && !listHasDate && !listHasSummary && !listImage) {
      itemClass += " is-bordered"; //apply a border to items with only a headline/title, when no border/shading styling set
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
        <div { ...blockProps } className={ `${ blockProps.className } govuk-error-summary`.trim() } data-module="govuk-error-summary">
          <h2 className="govuk-error-summary__title">
            {listEmptyText}
          </h2>
          <div className="govuk-error-summary__body">
            <p className="govuk-body-l govuk-error-message">
              This website does not have any suitable post types for this block.
            </p>
          </div>
        </div>
      </Fragment>

    );
    if (hasItemTypes) return (
      <Fragment >
        <InspectorControls>
          <PanelColorSettings
              title={__("Colour Settings", "mojblocks" )}
              initialOpen={false}
              colorSettings={[
                  {
                      value: backgroundColour,
                      onChange: onChangeBackgroundColour,
                      label: __('Background colour', 'mojblocks')
                  },
                  {
                      value: textColour,
                      onChange: onChangeTextColour,
                      label: __('Text colour', 'mojblocks')
                  },
                  {
                      value: borderColour,
                      onChange: onChangeBorderColour,
                      label: __('Border colour', 'mojblocks')
                  }
              ]}
          />
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
              label="Show item publish date"
              help={
                listHasDate === false
                ? 'Dates will be hidden'
                : 'Dates will be displayed'
              }
              checked={ listHasDate }
              onChange={ setHasDate }
            />
            <ToggleControl
              label="Show item summary"
              help={
                listHasSummary === false
                ? 'The summary shall be hidden'
                : 'The summary shall be displayed'
              }
              checked={ listHasSummary }
              onChange={ setHasSummary }
            />
            <ToggleControl
              className='govuk-!-margin-top-3'
              label="Show item image"
              help={
                listImage === true
                ? 'Items without an image will use a backup image - add this below'
                : ''
              }
              checked={ listImage }
              onChange={ setShowImage }
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
                      listBackupImage: imageURL,
                    })
                  }
                }
                allowedTypes={ allowedMediaTypes }
                type="image"
                value={ listBackupImage }
                render={({ open }) => (
                  <Fragment>
                    <Button className={'button govuk-!-margin-bottom-3'}
                      onClick={open}
                    >
                      Select alternative backup image
                    </Button>
                    {listBackupImage && (
                      <Button
                        className={'button govuk-!-margin-bottom-3'}
                        onClick={ removeBackupImage }
                      >
                        Remove image
                      </Button>
                    )}
                  </Fragment>
                )}
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
            <Text>
              { !listImage && !listHasSummary && !listHasDate && !borderColour && !backgroundColour
                ? "Items with only a title will be given a border around them to distinguish them from regular text."
                : ""
              }
            </Text>
          </PanelBody>
        </InspectorControls>

        <div { ...blockProps }>
            <div className={`mojblocks-auto-item-list__item ${itemClass}`} style={borderStyle}>
            {(listImage && listBackupImage) && (<div className="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
            {(listImage && !listBackupImage) && (<div className="mojblocks-auto-item-list__image mojblocks-auto-item-list__image--no-image" style={listImageStyle}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"></path></svg></div>)}
            <div className="mojblocks-auto-item-list__content">
              <div className={`mojblocks-auto-item-list__title-and-summary`}>
                <p className="mojblocks-auto-item-list__headline"><a href="#">{title}</a></p>
                <p className={`mojblocks-auto-item-list__summary`}>{summary}</p>
              </div>
              <p className="mojblocks-auto-item-list__date">
                <i>{ date }</i> (most recent item)
              </p>
            </div>
          </div>
          <div className={`mojblocks-auto-item-list__item ${itemClass}`} style={borderStyle}>
            {(listImage && listBackupImage) && (<div className="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
            {(listImage && !listBackupImage) && (<div className="mojblocks-auto-item-list__image mojblocks-auto-item-list__image--no-image" style={listImageStyle}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"></path></svg></div>)}
            <div className={"mojblocks-auto-item-list__content"}>
              <div className="mojblocks-auto-item-list__title-and-summary">
                <p className="govuk-body mojblocks-auto-item-list__headline"><a href="#">{title}</a></p>
                <p className={`govuk-body mojblocks-auto-item-list__summary  ${textColourClass}`}>{summary}</p>
              </div>
              <p className="mojblocks-auto-item-list__date">
                <i>{ date }</i>
              </p>
            </div>
          </div>
          <div className={`mojblocks-auto-item-list__item ${itemClass}`} style={borderStyle}>
            {(listImage && listBackupImage) && (<div className="mojblocks-auto-item-list__image" style={listImageStyle}></div>)}
            {(listImage && !listBackupImage) && (<div className="mojblocks-auto-item-list__image mojblocks-auto-item-list__image--no-image" style={listImageStyle}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"></path></svg></div>)}
            <div className="mojblocks-auto-item-list__content">
              <div className={`mojblocks-auto-item-list__title-and-summary`}>
                <p className="govuk-body mojblocks-auto-item-list__headline" ><a href="#">{title}</a></p>
                <p className={`govuk-body mojblocks-auto-item-list__summary  ${textColourClass}`}>{summary}</p>
              </div>
              <p className="mojblocks-auto-item-list__date">
                <i>{ date }</i>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );

    // Neither branch above applies while getPostTypes() is still resolving:
    // itemTypes has only its placeholder entry and itemTypesFinishedParsing is
    // still false. Returning undefined from a component throws in React and
    // trips the editor's error boundary, so render a placeholder until the
    // post type list arrives.
    return (
      <div { ...blockProps }>
        <p>{ __( 'Loading item types…', 'mojblocks' ) }</p>
      </div>
    );
  },

    save: () => { return <InnerBlocks.Content />; }
});
