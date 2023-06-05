/**
 *  Extend core WP file block
 *  https://wordpress.org/support/article/file-block/
 *
 * This makes use of WP Blocks extention filters
 * https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
 *
 */

const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

/**
 * Extention utility
 * Parse file href to get a file's extention (.pdf, .doc, .xml)
 *
 */

 function getFileExtension(file = '') {
    return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
}

/**
 * Append the file's extention type to the end of the file
 *
 * @param {Object} BlockEdit BlockEdit for the block.
 *
 * @return {Object} BlockEdit Modified settings.
 */

const addFileExtention = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // Apply to core file block only
        if ( 'core/file' !== props.name ) {
            return <BlockEdit {...props} />;
        }

        const appendedFile = '(' + getFileExtension(props.attributes.href).toUpperCase() + ')';

        // The downloadButtonText is not being used as part
        // of our design, so we are using it to append the
        // extention.
        props.attributes.downloadButtonText = appendedFile;

        return <BlockEdit {...props}  />;
    };
}, 'addFileExtention' );

addFilter( 'editor.BlockEdit',
'core/file',
addFileExtention );
