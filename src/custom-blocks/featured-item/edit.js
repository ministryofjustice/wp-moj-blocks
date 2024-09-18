import {
	PanelBody,
	SelectControl, TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

const { Fragment } = wp.element;
const d = new Date();
const templateFeaturedDocumentBlock = [
	[ 'core/heading', { placeholder: 'Add featured item section title' } ]
];

export default function FeaturedDocumentEdit({ attributes, setAttributes} ) {

	const {
		featuredImage,
		featuredItemType,
		featuredDocumentID,
		featuredDocumentHasDate,
		className,
	} = attributes;

	const {
		allPostTypes,
	} = useSelect(
		( select ) => {

			const { getPostTypes } = select(
				coreStore
			);
			const allPostTypeThingies = getPostTypes(
				{ per_page: -1 }
			);
			return {
				allPostTypes: allPostTypeThingies
			};
		}
	);

	const {
		allDocuments,
	} = useSelect(
		( select ) => {
			if (featuredDocumentID.length > 0) {

				const { getEntityRecords } = select(
					coreStore
				);
				const { getSettings } = select( blockEditorStore );
				const { imageSizes, imageDimensions } = getSettings();

				const posts = getEntityRecords(
					'postType',
					featuredItemType,
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

	let itemTypes = []

	if (allPostTypes) {
		allPostTypes.forEach(thisPostType => {
			console.log(thisPostType)
			if (thisPostType.viewable) {
				itemTypes.push({
					label: thisPostType.name,
					value: thisPostType.slug
				});
			}
		});
	}

	let docOptions = [
		{ label: "None", value: '0' },
	]

	let docList = [
		{ title: "No item selected", summary: "", date: "date", image: ""}
	];

	let imageOptions = [
		// this is the CSS value for background-size
		{ label: "No image", value: "none" },
		{ label: "Show whole image", value: "contain" },
		{ label: "Image cropped and fills area", value: "cover" }
	];

	if (Array.isArray( allDocuments )) {
		for (let i=0;i<allDocuments.length;i++) {
			console.log("xxx")
			console.log(allDocuments[i])
			docList[allDocuments[i].id] = {
				title: allDocuments[i].title.rendered,
				summary: allDocuments[i].summary_meta.news_story_summary,
				date: allDocuments[i].date,
				imageExists: allDocuments[i].featured_media,
				image: allDocuments[i].featured_image_url,
			}
			docOptions.push({label: allDocuments[i].title.rendered, value: allDocuments[i].id});

		}
	}

	const setItemType = newItemType => {
		setAttributes({ featuredItemType: newItemType } );
	};

	const setDocument = newDocumentID => {
		setAttributes({ featuredDocumentID: newDocumentID } );
	};

	const setImage = newImage => {
		setAttributes({ featuredImage: newImage } );
	};

	const setHasDate = newDateSetting => {
		setAttributes({ featuredDocumentHasDate: newDateSetting });
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={__('Featured Item settings')}
				initialOpen={true}
			>
				<SelectControl
					label="Select item type"
					value={ featuredItemType }
					options={ itemTypes }
					onChange={ setItemType }
				/>

				<SelectControl
					label="Select item"
					value={ featuredDocumentID }
					options={ docOptions }
					onChange={ setDocument }
				/>

				<SelectControl
					label="Image style"
					value={ featuredImage }
					options={ imageOptions }
					onChange={ setImage }
				/>

				<ToggleControl
					label="Show/hide publish date"
					help={
						featuredDocumentHasDate === false
						? 'The date will be hidden'
						: 'The date will be displayed'
					}
					checked={ featuredDocumentHasDate }
					onChange={ setHasDate }
				/>
			</PanelBody>
		</InspectorControls>
	);
	if (!Array.isArray( allDocuments ) || !Array.isArray(docList)) {
		return (
			<Fragment >
				<div class="mojblocks-spinner"></div>
				<div class="mojblocks-spinner-text govuk-body">Loading</div>
			</Fragment >
		);
	} else {
		let itemTitle, itemDate, itemImage, itemImageExists, itemPreviewClass, itemSummary;

		if (docList[featuredDocumentID]) {
			itemTitle = docList[featuredDocumentID].title;
			itemDate = datify(docList[featuredDocumentID].date,d);
			itemImage = docList[featuredDocumentID].image;
			itemImageExists = docList[featuredDocumentID].imageExists;
			itemPreviewClass = "";
		} else {
			itemTitle = "No item selected";
			itemDate = "Select a different item or item type"
			itemPreviewClass = "mojblocks-featured-item--empty";
		}

		return (
			<Fragment >
				{ inspectorControls }
				<div className={`mojblocks-featured-item ${className} ${itemPreviewClass}`}>
					<div className="govuk-width-container">
						<InnerBlocks
							template={ templateFeaturedDocumentBlock }
							templateLock="all"
						/>
						<div className={`govuk-grid-row ${featuredDocumentHasDate && itemDate != '' ? '' : 'mojblocks-featured-item-hide-date'} `}>
							<div class="mojblocks-featured-item__item">
								<div className={ `mojblocks-featured-item__image ${itemImageExists ? "" : "mojblocks-featured-item__image--none"}`} styles={`background:url('${itemImage}');`}>
									<img src={ itemImage } alt="Feature image for article" />
								</div>
								<div className="mojblocks-featured-item__text">
									<div className="mojblocks-featured-item__headline" >
										<a href="#" className="govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-item__headline-link" >
											{
												itemTitle
											}
										</a>
									</div>
									<div className="govuk-body-s mojblocks-featured-item__date" >
										{
											itemDate
										}
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
