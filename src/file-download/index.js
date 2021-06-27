
// const { addFilter } = wp.hooks;
// const { createHigherOrderComponent } = wp.compose;
// const { RichText } = wp.blockEditor;

// /**
//  * Set download button default to off
//  */
// function setDownloadButtonDefault( settings, name ) {

//     // Check this only applies to the file block
//     if ( 'core/file' !== name ) {

//         // Return without change
//         return settings;
//     }

//     console.log(settings)


//     // Modify the registerBlockType object
//     settings = lodash.assign( {}, settings, {
//         attributes: lodash.assign( {}, settings.attributes, {
//             showDownloadButton: { default: false },
//         }),
//     });

//     return settings;
// }

// addFilter(
//     'blocks.registerBlockType',
//     'core/file',
//     setDownloadButtonDefault
// );


/**
 * Add file extention to file name
 */
// const addFileExtention = createHigherOrderComponent( ( BlockEdit ) => {
//     return ( props ) => {

//         // Do nothing if it's another block than our defined ones.
//         if ( 'core/file' !== props.name ) {

//             // Return without change
//             return props;
//         }

//         console.log('hello pusheen')

//         // const {
//         //     setAttributes,
//         //     attributes: {
//         //         fileName,
//         //     },
//         //     className
//         // } = props;


//         //lodash.merge(props.attributes, { fileName: props.attributes.fileName + ' ' + '(pusheen)'})
//         //setAttributes({ fileName: fileName + ' ' + '(pusheen)' });

//         //console.dir(XMLHttpRequestEventTarget)

//         // // add has-spacing-xy class to block
//         // if ( fileName ) {
//         //     props.attributes.className = `has-spacing-${ fileName }`;
//         // }

//         return ([
//             <BlockEdit {...props} />,
//         ]);
//     };
// }, 'addFileExtention' );


// addFilter( 'editor.BlockEdit',
// 'core/file',
// addFileExtention );











// const { createHigherOrderComponent } = wp.compose;
// const { Fragment } = wp.element;
// const { InspectorControls } = wp.blockEditor;
// const { PanelBody } = wp.components;


// const { InspectorControls } = wp.editor;
// const { PanelBody, SelectControl } = wp.components;
// import { RichText, MediaUpload, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

// // Enable spacing control on the following blocks
// const enableSpacingControlOnBlocks = [
//     'core/file',
// ];
// /**
//  * Create HOC to add spacing control to inspector controls of block.
//  */
// const withSpacingControl = createHigherOrderComponent( ( BlockEdit ) => {
//     return ( props ) => {
//         // Do nothing if it's another block than our defined ones.
//         if ( ! enableSpacingControlOnBlocks.includes( props.name ) ) {
//             return (
//                 <BlockEdit { ...props } />
//             );
//         }

//         const {
//             setAttributes,
//             attributes: {
//                 fileName,
//             },
//             className
//         } = props;


//         lodash.merge(props.attributes, { fileName: props.attributes.fileName + ' ' + '(pusheen)'})
//         //setAttributes({ fileName: fileName + ' ' + '(pusheen)' });

//         console.dir(XMLHttpRequestEventTarget)

//         // // add has-spacing-xy class to block
//         // if ( fileName ) {
//         //     props.attributes.className = `has-spacing-${ fileName }`;
//         // }

//         return (
//             <BlockEdit {...props} />
//         );
//     };
// }, 'withSpacingControl' );

// addFilter( 'editor.BlockEdit',
// 'core/file',
// withSpacingControl );















// function getFileExtension(file) {
//     return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
//   }

// // Add in our own custom class
// function setBlockCustomClassName( className, blockName ) {
//     return blockName === 'core/file' ? 'mojblocks-file-download' : className;
// }

// // Adding the filter
// addFilter(
//     'blocks.getBlockDefaultClassName',
//     'core/file',
//     setBlockCustomClassName
// );



// const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
//     return ( props ) => {

//         // console.log(props)

//         const name = props.attributes.fileName + ' ' + '(' + getFileExtension(props.attributes.href).toUpperCase() + ')'

//         const newName = settings.attributes.title + name

//         return (
//         <Fragment>
//             <div className="customClass">
//               <BlockEdit { ...props }/>
//             </div>
//             <div>{ newName }</div>
//         </Fragment>
//         );
//     };
// }, 'withInspectorControl' );

// wp.hooks.addFilter(
//     'editor.BlockEdit',
//     'core/file',
//     withInspectorControls
// );
