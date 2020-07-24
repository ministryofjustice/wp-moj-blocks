<?php
/**
 * Plugin name: MoJ Blocks
 * Plugin URI:  https://github.com/ministryofjustice/wp-moj-blocks
 * Description: Introduces various functions that are commonly used across the MoJ network of sites
 * Version:     1.0.0
 * Author:      Ministry of Justice
 * Text domain: mojblocks
 * Author URI:  https://ministryofjustice.github.io/justice-on-the-web/#justice-on-the-web
 * License:     MIT License
 **/

defined('ABSPATH') || exit;

/**
 * Load translations (if any) for the plugin from the /languages/ folder.
 *
 * @link https://developer.wordpress.org/reference/functions/load_plugin_textdomain/
 */
add_action('init', 'mojblocks_load_textdomain');

/**
 * Set the domain to be used for translations
 */
function mojblocks_load_textdomain()
{
    load_plugin_textdomain('mojblocks', false, basename(__DIR__) . '/languages');
}

/**
 * Add custom "mojblocks" block category
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/filters/block-filters/#managing-block-categories
 */
add_filter('block_categories', 'mojblocks_block_categories', 10, 2);

/**
 * Create the category.
 *
 * @param array $categories the details of added categories (in this case an array of 1 item).
 * @param integer $post Unused variable, intended for future expansion of function.
 *
 * @return array
 */
function mojblocks_block_categories($categories, $post)
{

    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'mojblocks',
                'title' => __('MOJ Frontend Blocks', 'mojblocks'),
                'icon' => 'screen',
            ),
        )
    );
}

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action('init', 'mojblocks_register_blocks');

/**
 * Function to initiate the Gutenberg blocks in this theme.
 */
function mojblocks_register_blocks()
{
    // If Block Editor is not active, bail.
    if (!function_exists('register_block_type')) {
        return;
    }

    $meta = require_once('build/index.asset.php');
    // Register the block editor script.
    wp_register_script(
        'mojblocks-editor-script',                        // label.
        plugins_url('/build/index.js', __FILE__),   // script file.
        $meta['dependencies'] ?? [],                      // dependencies.
        $meta['version'] ?? '20200723',
        true
    );

    register_block_type(
        'mojblocks/panel1',
        array(
            'editor_script' => 'mojblocks-editor-script',
            // Calls registered script above. Registering one brings all. One block to rule them all.
        )
    );
    register_block_type('mojblocks/example');
}


/**
 * Queues up the gutenberg editor style
 */
function mojblocks_gutenberg_editor_styles()
{
    wp_enqueue_style(
        'nhsl-block-editor-styles',
        plugins_url('build/style-gutenburg.css', __FILE__),
        false,
        '1.1',
        'all'
    );
}
// Pulls the enqueued file in to standard wp process.
add_action('enqueue_block_editor_assets', 'mojblocks_gutenberg_editor_styles');

/**
 * Queues up the blocks styling for front end
 */
function mojblocks_register_style()
{
    wp_register_style('mojblocks', plugins_url('build/style.min.css', __FILE__));
}

add_action('init', 'mojblocks_register_style'); // Pulls front end styling to standard wp process.

function mojblocks_enqueue_style()
{
    wp_enqueue_style('mojblocks');
}

add_action('wp_enqueue_scripts', 'mojblocks_enqueue_style');



