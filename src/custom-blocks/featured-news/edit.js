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
	RangeControl,
	Spinner,
	ToggleControl,
	ToolbarGroup,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import {
	RichText,
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
	
	const inspectorControls = (
		<RichText
            tagName="p"
        />

);
console.log("PQR");
return (
	 { inspectorControls }
);
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