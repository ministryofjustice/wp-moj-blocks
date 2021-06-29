const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

/**
 * Get file extention
 */
 function getFileExtension(file = '') {
    return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
  }

/**
 * Add file extention to file name
 */
const addFileExtention = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // Do nothing if it's another block than our defined ones.
        if ( 'core/file' !== props.name ) {

            // Return without change
            return <BlockEdit {...props} />;
        }

        const extention = '(' + getFileExtension(props.attributes.href).toUpperCase() + ')'

        props.attributes.downloadButtonText = extention;

        return (
                <BlockEdit {...props}  />
      );
    };
}, 'addFileExtention' );

addFilter( 'editor.BlockEdit',
'core/file',
addFileExtention );

