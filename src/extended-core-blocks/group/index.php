<?php

/**
 * Modify core group block in Hale
 * This hooks into and modifies the frontend of core
 * 
 * https://developer.wordpress.org/block-editor/how-to-guides/javascript/extending-the-block-editor/
 */

 /*
 Plugin Name: Fancy Quote
 */
 
function group_block_enqueue() {
    wp_enqueue_script( 'bleed-background',
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks' )
    );
}
add_action( 'enqueue_block_editor_assets', 'group_block_enqueue' );