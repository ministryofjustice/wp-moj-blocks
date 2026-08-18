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
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Fragment } from '@wordpress/element';

const d = new Date();
const templateFeaturedNewsBlock = [
	[ 'core/heading', { placeholder: 'Add featured news section title' } ]
];

export default function FeaturedNewsEdit({ attributes, setAttributes} ) {

	const {
		featuredNewsID,
		featuredNewsHasDate,
	} = attributes;

	// apiVersion 3: the wrapper element must carry the props returned by
	// useBlockProps. It supplies the generated block class and the user's custom
	// classes, which used to be applied by reading the className attribute here.
	//
	// Called bare rather than with a className because edit() returns early
	// while news items are loading, and that branch renders a spinner rather
	// than the featured news markup. The block classes are merged in on the main
	// branch below, where featuredNewsID is also used to build a modifier class.
	const blockProps = useBlockProps();

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
				{ per_page: 20 }
			);

			return {
				latestNews: posts
			};
		}
	);

    const {
        featuredNewsArticle,
    } = useSelect(
        ( select ) => {

            if(featuredNewsID.length > 0) {
                const {  getEntityRecord } = select(
                    coreStore
                );

                const posts = getEntityRecord(
                    'postType',
                    'news',
                    featuredNewsID
                );

                return {
                    featuredNewsArticle: posts
                };

            }
            else {
                return {
                    featuredNewsArticle: false
                };

            }

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
			if (latestNews[i].post_meta.summary) {
				newsList[latestNews[i].id] = {
					title: latestNews[i].title.rendered,
					summary: latestNews[i].post_meta.summary,
					date: latestNews[i].date,
					image: latestNews[i].featured_image_url,
				}
				optionList.push({label: latestNews[i].title.rendered, value: latestNews[i].id});
			}
		}

		if(featuredNewsArticle != null && featuredNewsID.length > 0 && newsList.hasOwnProperty(featuredNewsID) == false){


            newsList[featuredNewsID] = {
                title: featuredNewsArticle.title.rendered,
                summary: featuredNewsArticle.post_meta.summary,
                date: featuredNewsArticle.date,
                image: featuredNewsArticle.featured_image_url,
            }

           optionList.push({label: featuredNewsArticle.title.rendered, value: featuredNewsArticle.id});

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
			<div { ...blockProps }>
				<div className="mojblocks-spinner"></div>
				<div className="mojblocks-spinner-text govuk-body">Loading</div>
			</div>
		);
	} else {
		return (
			<Fragment >
				{ inspectorControls }
				<div { ...blockProps } className={ `${ blockProps.className } mojblocks-featured-news`.trim() }>
					{ /*
					  * The mojblocks-featured-news--{id} modifier goes on this inner
					  * element rather than the block wrapper above.
					  *
					  * Its --0 variant draws a "No article selected" banner with an
					  * ::after pseudo-element. Under apiVersion 3 the wrapper above is
					  * the block's own element, and Gutenberg draws the selection
					  * outline with ::after and inset: 0 on it — so the two rules merge
					  * and the banner stretches to fill the whole block when selected.
					  *
					  * The --0 styles reach the image via a descendant selector, which
					  * still resolves from here.
					  */ }
					<div className={ `govuk-width-container mojblocks-featured-news--${ featuredNewsID }` }>
						<InnerBlocks
							template={ templateFeaturedNewsBlock }
							templateLock="all"
						/>
						<div className={`govuk-grid-row ${featuredNewsHasDate ? '' : 'mojblocks-featured-news-hide-date'} ${(featuredNewsID!="0" && !newsList[featuredNewsID].image) ? 'mojblocks-featured-news--no-image' : ''} `}>
							<div className="mojblocks-featured-news__item">
								{ /*
								  * Only set the background when there is an image. With no
								  * article selected the URL is empty, and an inline
								  * background would override the placeholder gradient that
								  * .mojblocks-featured-news--0 applies to this element.
								  *
								  * backgroundImage rather than the background shorthand, to
								  * match the frontend and to avoid resetting other
								  * background properties.
								  */ }
								<div
									className="mojblocks-featured-news__image"
									style={ newsList[featuredNewsID].image
										? { backgroundImage: `url('${ newsList[featuredNewsID].image }')` }
										: undefined }
								>
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
