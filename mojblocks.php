<?php

/**
 *
 * The file responsible for starting the mojblocks plugin
 *
 * These Gutenberg blocks support custom MoJ block functionality we're
 * not able to incorporate into our theme or third party blocks/plugins.
 *
 * @package mojblocks
 *
 * Plugin name: MoJ Blocks
 * Plugin URI:  https://github.com/ministryofjustice/wp-moj-blocks
 * Description: Introduces various functions that are commonly used across the MoJ network of sites
 * Version:     1.2.0
 * Author:      Ministry of Justice - Adam Brown, Beverley Newing, Damien Wilson & Robert Lowe
 * Text domain: mojblocks
 * Author URI:  https://github.com/ministryofjustice
 * License:     MIT License
 * License URI: https://opensource.org/licenses/MIT
 * Copyright:   Crown Copyright (c) Ministry of Justice
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
        [
            [
                'slug' => 'mojblocks',
                'title' => __('MOJ Blocks', 'mojblocks'),
                'icon' => 'screen',
            ],
        ]
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

    // Check if build file hasn't been generated and is missing
    $file_exists = file_exists(plugin_dir_path(__FILE__) . 'build/index.asset.php');

    if ($file_exists) {
        $meta = require_once('build/index.asset.php');
    } else {
        $meta = [
            'dependencies' => array('wp-blocks', 'wp-dom-ready', 'wp-edit-post'),
            'version' => '20200723'
        ];

        trigger_error(
            'Build file does not exist, run NPM run build',
            E_USER_WARNING
        );
    }

    // Register the block editor script.
    wp_register_script(
        'mojblocks-editor-script',
        plugins_url('/build/index.js', __FILE__),
        $meta['dependencies'] ?? [],
        $meta['version'] ?? '20200723',
        true
    );

    // Register blocks
    register_block_type(
        'mojblocks/highlights',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/cta',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/hero',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'dynamic_render_callback_hero_block',
            'attributes' => [
                'backgroundImage' => [
                    'type' => 'string'
                ],
                'heroTitle' => [
                    'type' => 'string'
                ],
                [
                'heroText' => [
                    'type' => 'string'
                ],
                'heroClassName' => [
                    'type' => 'string'
                ]
                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/accordion',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/staggered-boxes',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/quote',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/intro',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/reveal',
        ['editor_script' => 'mojblocks-editor-script']
    );

    register_block_type(
        'mojblocks/card',
        ['editor_script' => 'mojblocks-editor-script' ]
    );
}

/**
 * Load PHP code for each block
 */
include plugin_dir_path(__FILE__) . 'src/hero/index.php';

/**
 * Queues up the gutenberg editor style
 */
function mojblocks_gutenberg_editor_styles()
{
    wp_enqueue_style(
        'mojblocks-block-editor-styles',
        plugins_url('build/style-gutenburg.css', __FILE__),
        false,
        '1.1',
        'all'
    );
}

// Pulls the enqueued file in to standard wp process.
add_action('enqueue_block_editor_assets', 'mojblocks_gutenberg_editor_styles');

/**
 * Queues up the blocks styling for frontend
 */
function mojblocks_register_style()
{
    if (!is_admin()) {
        wp_register_style('mojblocks', plugins_url('build/style.min.css', __FILE__));
    }
}

add_action('init', 'mojblocks_register_style');

function mojblocks_enqueue_style()
{
    wp_enqueue_style('mojblocks');

    // IE specific stylesheet
    wp_enqueue_style(
        'mojblocks-ie',
        plugins_url('build/ie.min.js', __FILE__),
        array('mojblocks')
    );
    wp_style_add_data('mojblocks-ie', 'conditional', 'IE');

    wp_enqueue_script(
        'mojblocks-js',
        plugins_url('build/mojblocks.min.js', __FILE__),
        false,
        '1.0',
        'all'
    );
}

add_action('wp_enqueue_scripts', 'mojblocks_enqueue_style');
