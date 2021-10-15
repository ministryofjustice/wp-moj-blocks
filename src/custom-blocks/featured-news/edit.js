 /**
  * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';
import {
	BaseControl,
	PanelBody,
	Placeholder,
	QueryControls,
	RadioControl,
	SelectControl,
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import {
	RichText,
	InnerBlocks,
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	__experimentalImageSizeControl as ImageSizeControl,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { pin, list, grid } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
 
const { Fragment } = wp.element;
// const { RichText, MediaUpload, InspectorControls, URLInputButton } = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
// const { PanelBody } = wp.components;
const d = new Date();
const templateFeaturedNewsBlock = [
	[ 'core/heading', { placeholder: 'Add featured news section title' } ]
  ];

export default function FeaturedNewsEdit({ attributes, setAttributes} ) {
	console.log("ABC");
	const {
		featuredNewsLink,
		className,
	} = attributes;
	/*
	const onChangefeaturedNewsLink = newFeaturedNewsLink => {
		setAttributes({ featuredNewsLink: newFeaturedNewsLink})
	}
	
	  const [ hasDate, setHasDate ] = useState( true );
	  const [ story, setStory ] = useState( 'none' );
	
	*/

	const {
		latestNews,
	} = useSelect(
		( select ) => {
			const { getEntityRecords, getMedia, getUsers } = select(
				coreStore
			);
			const { getSettings } = select( blockEditorStore );
			const { imageSizes, imageDimensions } = getSettings();
			const posts = getEntityRecords(
				'postType',
				'news'
			);

			return {
				latestNews: ! Array.isArray( posts )
				? posts
				: posts
			};
		},
		[]
	);
	console.log(latestNews);
	console.log("XYZ");
	//	return ("something" + latestNews);
	/* */
	let optionList = [
		{ label: "None", value: '0' },
	]
	let newsList = [
		{ title: "No news article selected", summary: "", date: "date"}
	];
	if (Array.isArray( latestNews )) {
		for (let i=0;i<latestNews.length;i++) {
			newsList[latestNews[i].id] = {
				title: latestNews[i].title.rendered,
				summary: "Summary",
				date: latestNews[i].date,
			}
			optionList.push({label: latestNews[i].title.rendered, value: latestNews[i].id});
			console.log("PQR");
			
		}
	}
	console.log(newsList);
	
	
	const [ hasDate, setHasDate ] = useState( true );
    const [ story, setStory ] = useState( '0' );

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={__('News settings')}
				initialOpen={true}
			>
				<SelectControl
					label="Select news"
					value={ story }
					options={ optionList }
					onChange={ setAttributes({ featuredNewsID: story } ) }
					onChange={ ( newStory ) => setStory( newStory ) }
				/>
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
			</PanelBody>
		</InspectorControls>
	);
if (!Array.isArray( latestNews ) || !Array.isArray(newsList)) {
	return (
		<div class="mojblocks-loading">Loading</div>
		);
	} else {
		return (
			<Fragment >
				{ inspectorControls }
		<div className={`mojblocks-featured-news mojblocks-featured-news-- ${className}`}>
		<div className="govuk-width-container">
		  <InnerBlocks
			template={ templateFeaturedNewsBlock }
			templateLock="all"
			/>
		  <div className={`govuk-grid-row` }>
			<div class="mojblocks-featured-news__item">
			  <div class="mojblocks-featured-news__image" >
			  </div>
			  <div className="mojblocks-featured-news__text">
				<div className="govuk-body govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline" >
					{newsList[story].title}
				</div>
				<div className="govuk-body mojblocks-featured-news__summary" >
					{newsList[story].summary}
				</div>
				<div className="govuk-body-s mojblocks-featured-news__date" >
					{ datify(newsList[story].date,d) }
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
	);
   
}
	//*/

/*
    return (
		<Fragment >
		  <InspectorControls>
			<PanelBody
			  title={__('News settings')}
			  initialOpen={true}
			>
			  <SelectControl
				label="Select news"
				value={ story }
				options={ optionList }
				onChange={ ( newStory ) => setStory( newStory ) }
			  />
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
			</PanelBody>
		  </InspectorControls>
  
		  <div className={`mojblocks-featured-news mojblocks-featured-news--${story} ${className}`}>
			<div className="govuk-width-container">
			  <InnerBlocks
				template={ templateFeaturedNewsBlock }
				templateLock="all"
			  />
			  <div className={`govuk-grid-row ${hasDate ? '' : 'mojblocks-featured-news-hide-date'} ` }>
				<div class="mojblocks-featured-news__item">
				  <div class="mojblocks-featured-news__image">
				  </div>
				  <div className="mojblocks-featured-news__text">
					<div className="govuk-body govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline" >
					  { title }
					</div>
					<div className="govuk-body mojblocks-featured-news__summary" >
					  { summary }
					</div>
					<div className="govuk-body-s mojblocks-featured-news__date" >
					  { datify(date,d) }
					</div>
					<RichText
					  tagName="div"
					  value={featuredNewsLink ? 'Read full article' : featuredNewsLink }
					  onChange={onChangefeaturedNewsLink}
					  className="govuk-button mojblocks-featured-news__link"
					  placeholder={__('Read full article', 'mojblocks')}
					  keepPlaceholderOnFocus={true}
					/>  
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</Fragment>
	  );*/
  }


  function datify(x,d) {
	if (!x) return "Date";
  
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
  