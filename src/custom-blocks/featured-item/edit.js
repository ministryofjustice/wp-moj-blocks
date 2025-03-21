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
const templatefeaturedItemBlock = [
	[ 'core/heading', { placeholder: 'Add featured item section title' } ]
];
const noItemSelectedText = "No item selected"; // Text in editor to shew that no item will be displayed

export default function featuredItemEdit({ attributes, setAttributes} ) {

	const {
		featuredImage,
		featuredItemType,
		featuredItemID,
		featuredItemHasDate,
		featuredItemHasBar,
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
			const allPostTypeList = getPostTypes(
				{ per_page: -1 }
			);
			return {
				allPostTypes: allPostTypeList
			};
		}
	);

	const {
		allItems,
	} = useSelect(
		( select ) => {
			if (featuredItemType != "") {

				const { getEntityRecords } = select(
					coreStore
				);
				const { getSettings } = select( blockEditorStore );
				const { imageSizes, imageDimensions } = getSettings();

				const posts = getEntityRecords(
					'postType',
					featuredItemType,
					{ per_page: 24 } // restricts to the 25 options (including none)
				);

				return {
					allItems: posts
				};
			} else {
				return {
					allItems: false
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
		{ title: noItemSelectedText, summary: "", date: "date", image: "", imageID: "0"}
	];

	if (Array.isArray( allItems )) {
		for (let i=0;i<allItems.length;i++) {
			docList[allItems[i].id] = {
				title: allItems[i].title.rendered,
				summary: allItems[i].post_meta.summary,
				date: allItems[i].date,
				imageID: allItems[i].featured_media,
				image: allItems[i].featured_image_url,
			}
			docOptions.push({label: allItems[i].title.rendered, value: allItems[i].id});

		}
	}

	const removeImage = () => {
		setAttributes({
			featuredCustomImage: null,
		});
	};

	const setItemType = newItemType => {
		setAttributes({ featuredItemType: newItemType });
	};

	const setFeaturedItem = newItemID => {
		setAttributes({ featuredCustomImage: null }); //removes image on doc change
		setAttributes({ featuredItemID: newItemID });
	};

	const setImage = newImage => {
		setAttributes({ featuredImage: newImage });
	};

	const setHasDate = newDateSetting => {
		setAttributes({ featuredItemHasDate: newDateSetting });
	};

	const setLittleBar = newBarSetting => {
		setAttributes({ featuredItemHasBar: newBarSetting });
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
					value={ featuredItemID }
					options={ docOptions }
					onChange={ setFeaturedItem }
					help={
						featuredCustomImage
						? 'The custom image will be removed on change'
						: ''
					}
				/>

				{(docList[featuredItemID] && docList[featuredItemID].image && !featuredCustomImage) && (
					<ToggleControl
						label="Show/hide image"
						help={
							featuredImage === true
							? 'The image will be displayed, you can choose a different image below'
							: 'The image will be hidden'
						}
						checked={ featuredImage }
						onChange={ setImage }
					/>
				)}

				<ToggleControl
					label="Show/hide publish date"
					help={
						featuredItemHasDate === false
						? 'The date will be hidden'
						: 'The date will be displayed'
					}
					checked={ featuredItemHasDate }
					onChange={ setHasDate }
				/>

				<ToggleControl
					label="Show/hide little bar"
					help={
						featuredItemHasBar === false
						? 'The little bar will be hidden'
						: 'The little bar will be displayed'
					}
					checked={ featuredItemHasBar }
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
			</PanelBody>
		</InspectorControls>
	);
	if (!Array.isArray( allItems ) && allItems !== false) {
		// allItems is null (items from getEntityRecords not loaded yet)
		return (
			<Fragment >
				<div class="mojblocks-spinner"></div>
				<div class="mojblocks-spinner-text govuk-body">Loading</div>
			</Fragment >
		);
	} else {
		// allItems is array or is false (false = no post type selected)
		let itemTitle, itemDate, itemImage, itemImageID, itemPreviewClass, itemSummary, itemBackgroundImageStyle, itemImageExists = false;

		itemPreviewClass = "";
		if (docList[featuredItemID]) {
			itemTitle = docList[featuredItemID].title;
			itemSummary = docList[featuredItemID].summary;
			itemDate = datify(docList[featuredItemID].date,d);
			itemImage = docList[featuredItemID].image;
			itemImageID = docList[featuredItemID].imageID; // if 0 = no image
			if (featuredCustomImage) itemImage = featuredCustomImage; // If a custom image has been selected, override the featured image
			if ((featuredImage && itemImageID) || featuredCustomImage) itemImageExists = true;
		} else {
			itemTitle = noItemSelectedText;
		}

		if (itemTitle == noItemSelectedText) {
			itemDate = "Select a different item or item type";
			itemPreviewClass += "mojblocks-featured-item--empty";
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
					<div className="govuk-width-container govuk-!-margin-0">
						<InnerBlocks
							template={ templatefeaturedItemBlock }
							templateLock="all"
						/>
						<div class="mojblocks-featured-item__item">
							<div className={ `mojblocks-featured-item__image ${itemImageExists && itemImage ? "" : "mojblocks-featured-item__image--none"}`} style={itemBackgroundImageStyle}>
							</div>
							<div className={ `mojblocks-featured-item__text ${featuredItemHasBar ? "" : "mojblocks-featured-item__text--no-bar"}`}>
								<div className="mojblocks-featured-item__headline" >
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
								<a href="#" className="govuk-link mojblocks-featured-item__link" >
									{ featuredLinkText }
								</a>
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

	return day + month + year;
}
