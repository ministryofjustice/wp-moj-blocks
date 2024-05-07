<?php

/**
 * Modify core paragraph block in Hale
 * This hooks into and modifies the frontend of core
 * 
 * https://developer.wordpress.org/block-editor/how-to-guides/javascript/extending-the-block-editor/
 */


function paragraph_block_enqueue() {
    wp_enqueue_script( 'wide-paragraphs',
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'paragraph_block_enqueue' );
