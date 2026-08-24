import {
    PanelBody,
    SelectControl, TextControl,
    ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
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
const templateFeaturedDocumentBlock = [
	[ 'core/heading', { placeholder: 'Add featured document section title' } ]
];

export default function FeaturedDocumentEdit({ attributes, setAttributes} ) {

	const {
        featuredDocumentID,
        featuredDocumentHasDate,
	} = attributes;

	// apiVersion 3: the wrapper element must carry the props returned by
	// useBlockProps. It supplies the generated block class and the user's custom
	// classes, which used to be applied by reading the className attribute here.
	//
	// Called bare rather than with a className because edit() returns early
	// while documents are loading, and that branch renders a spinner rather than
	// the featured document markup. The block class is merged in on the main
	// branch below.
	const blockProps = useBlockProps();

    const {
        allDocuments,
    } = useSelect(
        ( select ) => {
            const { getEntityRecords, getMedia, getUsers } = select(
                coreStore
            );
            const { getSettings } = select( blockEditorStore );
            const { imageSizes, imageDimensions } = getSettings();

            const posts = getEntityRecords(
                'postType',
                'document',
                { per_page: -1 }
            );

            return {
                allDocuments: posts
            };
        }
    );

    let docOptions = [
        { label: "None", value: '0' },
    ]

    let docList = [
        { title: "No document selected", summary: "", date: "date", image: ""}
    ];


    if (Array.isArray( allDocuments )) {
        for (let i=0;i<allDocuments.length;i++) {

            docList[allDocuments[i].id] = {
                title: allDocuments[i].title.rendered,
                date: allDocuments[i].date,
            }
            docOptions.push({label: allDocuments[i].title.rendered, value: allDocuments[i].id});

        }
    }

    const setDocument = newDocumentID => {
        setAttributes({ featuredDocumentID: newDocumentID } );
    };

	const setHasDate = newDateSetting => {
		setAttributes({ featuredDocumentHasDate: newDateSetting });
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={__('Featured Document settings')}
				initialOpen={true}
			>
                <SelectControl
                    label="Select document"
                    value={ featuredDocumentID }
                    options={ docOptions }
                    onChange={ setDocument }
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
			<div { ...blockProps }>
				<div className="mojblocks-spinner"></div>
				<div className="mojblocks-spinner-text govuk-body">Loading</div>
			</div>
		);
	} else {
		return (
			<Fragment >
				{ inspectorControls }
				<div { ...blockProps } className={ `${ blockProps.className } mojblocks-featured-document`.trim() }>
					<div className="govuk-width-container">
						<InnerBlocks
							template={ templateFeaturedDocumentBlock }
							templateLock="all"
						/>
						<div className={`govuk-grid-row ${featuredDocumentHasDate ? '' : 'mojblocks-featured-document-hide-date'} `}>
							<div className="mojblocks-featured-document__item">
								<div className="mojblocks-featured-document__text">
									<div className="mojblocks-featured-document__headline" >
										<a href="#" className="govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-document__headline-link" >
											{docList[featuredDocumentID].title}
										</a>
									</div>
									<div className="govuk-body-s mojblocks-featured-document__date" >
										{ datify(docList[featuredDocumentID].date,d) }
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
