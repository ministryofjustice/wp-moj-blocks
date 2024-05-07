<?php

/**
 * Modify core group block in Hale
 * This hooks into and modifies the frontend of core
 * 
 * https://developer.wordpress.org/block-editor/how-to-guides/javascript/extending-the-block-editor/
 */


function list_block_enqueue() {
    wp_enqueue_script( 'wide-lists',
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'list_block_enqueue' );
