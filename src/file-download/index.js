/**
 * File download block
 * Extended version of the default WP File block
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, MediaUpload, InnerBlocks } from '@wordpress/block-editor';

registerBlockType('mojblocks/file-download', {
    title: __('File download', 'mojblocks'),
    description: __("Add a file to page or post to be downloaded.", "mojblocks"),
    category: "mojblocks",
    keywords: [ __( 'file' ), __( 'download' ), __( 'document' ) ],
    icon: "schedule",
    attributes: {
        fileDownloadClassName: {
            type: 'string'
        }
    },
    edit: props => {
        const {
            setAttributes,
            attributes: {
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ fileDownloadClassName: className });

        // Load allowed blocks to be added to file download
        const allowedBlocks = [ 'core/file', 'core/list' ];

        return ([

        <section className={`${className}  mojblocks-file-download`} >

            <div className={'govuk-width-container'}>
                <div className={'govuk-grid-row'}>
                   <InnerBlocks allowedBlocks={ allowedBlocks } />
                </div>
            </div>

        </section>
    ])

    },
    // return innerblock to allow reuse of default wp blocks
    save: () => {
        return <InnerBlocks.Content />;
    }
});
