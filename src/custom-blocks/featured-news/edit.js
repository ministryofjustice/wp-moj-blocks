import {
	PanelBody,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { __experimentalGetSettings } from '@wordpress/date';
import {
	InnerBlocks,
	InspectorControls,
	__experimentalImageSizeControl as ImageSizeControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
 
const { Fragment } = wp.element;
const d = new Date();
const templateFeaturedNewsBlock = [
	[ 'core/heading', { placeholder: 'Add featured news section title' } ]
];

export default function FeaturedNewsEdit({ attributes, setAttributes} ) {

	const {
		featuredNewsID,
		featuredNewsHasDate,
		className,
	} = attributes;

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
				'news',
				{ per_page: -1 }
			);

			return {
				latestNews: posts
			};
		}
	);
	let optionList = [
		{ label: "None", value: '0' },
	]
	let newsList = [
		{ title: "No news article selected", summary: "", date: "date", image: ""}
	];
	if (Array.isArray( latestNews )) {
		for (let i=0;i<latestNews.length;i++) {
			if (latestNews[i].summary_meta.news_story_summary) {
				newsList[latestNews[i].id] = {
					title: latestNews[i].title.rendered,
					summary: latestNews[i].summary_meta.news_story_summary,
					date: latestNews[i].date,
					image: latestNews[i].featured_image_url,
				}
				optionList.push({label: latestNews[i].title.rendered, value: latestNews[i].id});
			}
		}
	}
	const setHasDate = newDateSetting => {
		setAttributes({ featuredNewsHasDate: newDateSetting });
	};
	const setStory = newStory => {
		setAttributes({ featuredNewsID: newStory } );
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={__('News settings')}
				initialOpen={true}
			>
				<SelectControl
					label="Select news"
					help="Only news articles with a summary are available for selection"
					value={ featuredNewsID }
					options={ optionList }
					onChange={ setStory }
				/>
				<ToggleControl
					label="Show/hide article dates"
					help={
						featuredNewsHasDate === false
						? 'The date will be hidden'
						: 'The date will be displayed'
					}
					checked={ featuredNewsHasDate }
					onChange={ setHasDate }
				/>
			</PanelBody>
		</InspectorControls>
	);
	if (!Array.isArray( latestNews ) || !Array.isArray(newsList)) {
		return (
			<Fragment >
				<div class="mojblocks-spinner"></div>
				<div class="mojblocks-spinner-text govuk-body">Loading</div>
			</Fragment >
		);
	} else {
		return (
			<Fragment >
				{ inspectorControls }
				<div className={`mojblocks-featured-news mojblocks-featured-news--${featuredNewsID} ${className}`}>
					<div className="govuk-width-container">
						<InnerBlocks
							template={ templateFeaturedNewsBlock }
							templateLock="all"
						/>
						<div className={`govuk-grid-row ${featuredNewsHasDate ? '' : 'mojblocks-featured-news-hide-date'} ${(featuredNewsID!="0" && !newsList[featuredNewsID].image) ? 'mojblocks-featured-news--no-image' : ''} `}>
							<div class="mojblocks-featured-news__item">
								<div className="mojblocks-featured-news__image" styles={`background:url('${newsList[featuredNewsID].image}')`}>
									<img src={newsList[featuredNewsID].image} alt="Feature image for news article" />
								</div>
								<div className="mojblocks-featured-news__text">
									<div className="mojblocks-featured-news__headline" >
										<a href="#" className="govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline-link" >
											{newsList[featuredNewsID].title}
										</a>
									</div>
									<div className="govuk-body mojblocks-featured-news__summary" >
										{newsList[featuredNewsID].summary}
									</div>
									<div className="govuk-body-s mojblocks-featured-news__date" >
										{ datify(newsList[featuredNewsID].date,d) }
									</div>
									<div className="mojblocks-featured-news__link">
										<a className="govuk-link" >
											Read full article
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
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
