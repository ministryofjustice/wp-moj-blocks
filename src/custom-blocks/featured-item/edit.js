import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
	Button,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	MediaUpload,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

const { Fragment } = wp.element;
const d = new Date();
const allowedMediaTypes = ['image'];
const templateFeaturedDocumentBlock = [
	[ 'core/heading', { placeholder: 'Add featured item section title' } ]
];

export default function FeaturedDocumentEdit({ attributes, setAttributes} ) {

	const {
		featuredImage,
		featuredItemType,
		featuredDocumentID,
		featuredDocumentHasDate,
		featuredDocumentHasBar,
		featuredLinkText,
		featuredCustomImage,
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
					{ per_page: 24 } // restructs to the 25 options (including none)
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

	let itemTypes = [{
		label: "-",
		value: ""
	}]

	if (allPostTypes) {
		allPostTypes.forEach(thisPostType => {
			if (thisPostType.name != "Posts" && thisPostType.name != "Pages" && thisPostType.name != "Media" && thisPostType.viewable) {
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

	var docList = [
		{ title: "No item selected", summary: "", date: "date", image: "", imageID: "0"}
	];

	let imageOptions = [
		// this is the CSS value for background-size
		{ label: "No image", value: "none" },
		{ label: "Show whole image", value: "contain" },
		{ label: "Image cropped and fills area", value: "cover" }
	];

	if (Array.isArray( allDocuments )) {
		for (let i=0;i<allDocuments.length;i++) {
			docList[allDocuments[i].id] = {
				title: allDocuments[i].title.rendered,
				summary: allDocuments[i].summary_meta.post_summary,
				date: allDocuments[i].date,
				imageID: allDocuments[i].featured_media,
				image: allDocuments[i].featured_image_url,
			}
			docOptions.push({label: allDocuments[i].title.rendered, value: allDocuments[i].id});

		}
	}

	/* Not used yet
	const changeImage = imageObject => {
		var imageSizes = imageObject.sizes;
		var image = imageSizes.large.url;
		setAttributes({ featuredCustomImage: image })
	}
	*/

	const removeImage = () => {
		setAttributes({
			featuredCustomImage: null,
		});
	};

	const setItemType = newItemType => {
		setAttributes({ featuredItemType: newItemType });
	};

	const setDocument = newDocumentID => {
		setAttributes({ featuredCustomImage: null }); //removes image on doc change
		setAttributes({ featuredDocumentID: newDocumentID });
	};

	const setImage = newImage => {
		setAttributes({ featuredImage: newImage });
	};

	const setHasDate = newDateSetting => {
		setAttributes({ featuredDocumentHasDate: newDateSetting });
	};

	const setLittleBar = newBarSetting => {
		setAttributes({ featuredDocumentHasBar: newBarSetting });
	};

	const setLinkText = newLinkText => {
		setAttributes({ featuredLinkText: newLinkText });
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
					help={
						featuredCustomImage
						? 'The custom image will be removed on change'
						: ''
					}
				/>

				{(docList[featuredDocumentID] && docList[featuredDocumentID].image && !featuredCustomImage) && (
				<SelectControl
					label="Image style"
					value={ featuredImage }
					options={ imageOptions }
					onChange={ setImage }
					className = {
						featuredDocumentID == "0"
						? 'hidden-control'
						: ''
					}
				/>
				)}

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

				<ToggleControl
					label="Show/hide little bar"
					help={
						featuredDocumentHasBar === false
						? 'The little bar will be hidden'
						: 'The little bar will be displayed'
					}
					checked={ featuredDocumentHasBar }
					onChange={ setLittleBar }
				/>

				<TextControl
					label="Link text"
					help="Leave blank for no link, the title will still link to the article"
					value={ featuredLinkText }
					onChange={ setLinkText }
				/>
				<h2>
					Custom image
				</h2>
				<p>
					Add a specific image for this item
				</p>
				<MediaUpload
					buttonProps={{
						className: 'change-image',
					}}
					onSelect={
						(image) => {
							var imageSizes = image.sizes;

							// determine the image size displayed with fallbacks
							if (typeof imageSizes.large !== 'undefined') {
								var imageURL = imageSizes.large.url;
							} else {
								var imageURL = imageSizes.full.url;
							}

							setAttributes({
								featuredCustomImage: imageURL,
							})
						}
					}
					allowedTypes={ allowedMediaTypes }
					type="image"
					value={ featuredCustomImage }
					render={({ open }) => (
						<Fragment>
							<Button className={'button govuk-!-margin-bottom-3'}
								onClick={open}
							>
								Select {featuredCustomImage ? 'a different ' : '' }image
							</Button>
							{featuredCustomImage && (
								<Button
									className={'button govuk-!-margin-bottom-3'}
									onClick={ removeImage }
								>
									Remove image
								</Button>
							)}
						</Fragment>
					)}
				/>

				{ featuredCustomImage && (<SelectControl
					label="Image style"
					value={ featuredImage }
					options={ imageOptions }
					onChange={ setImage }
				/>)}

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
		let itemTitle, itemDate, itemImage, itemImageID, itemPreviewClass, itemSummary, itemBackgroundImageStyle, itemImageExists = false;

		if (docList[featuredDocumentID]) {
			itemTitle = docList[featuredDocumentID].title;
			itemSummary = docList[featuredDocumentID].summary;
			itemDate = datify(docList[featuredDocumentID].date,d);
			itemImage = docList[featuredDocumentID].image;
			itemImageID = docList[featuredDocumentID].imageID; // if 0 = no image
			itemPreviewClass = "";
			if (featuredCustomImage) itemImage = featuredCustomImage; // If a custom image has been selected, override the featured image
			if (itemImageID || featuredCustomImage) itemImageExists = true;
		} else {
			itemTitle = "No item selected";
			itemDate = "Select a different item or item type"
			itemPreviewClass = "mojblocks-featured-item--empty";
		}

		if (itemImageExists) {
			itemBackgroundImageStyle = {
				backgroundImage: 'url(' + itemImage + ')'
			}
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
								<div className={ `mojblocks-featured-item__image ${itemImageExists ? "" : "mojblocks-featured-item__image--none"} mojblocks-featured-item__image--${featuredImage}`} style={itemBackgroundImageStyle}>
								</div>
								<div className="mojblocks-featured-item__text">
									<div className={ `mojblocks-featured-item__headline ${featuredDocumentHasBar ? "" : "mojblocks-featured-item__headline--no-bar"}` } >
										<a href="#" className="govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-item__headline-link" >
											{ itemTitle }
										</a>
									</div>
									<p className="govuk-body mojblocks-featured-item__summary" >
										{ itemSummary }
									</p>
									<p className="govuk-body-s mojblocks-featured-item__date" >
										{ itemDate }
									</p>
									<p className="govuk-link mojblocks-featured-item__link" >
										{ featuredLinkText }
									</p>
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
