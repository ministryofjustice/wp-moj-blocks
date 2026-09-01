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
 * Version:     4.1.0
 * Author:      Ministry of Justice - Adam Brown, Beverley Newing, Malcolm Butler, Damien Wilson & Robert Lowe
 * Text domain: mojblocks
 * Author URI:  https://github.com/ministryofjustice
 * License:     MIT Licence
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
add_filter('block_categories_all', 'mojblocks_block_categories', 10, 2);

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
            'dependencies' => array('wp-data', 'wp-blocks', 'wp-dom-ready', 'wp-edit-post', 'wp-hooks'),
            'version' => '20211006'
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
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS. The old array here was empty, so none of this block's
         * attributes were declared server-side at all.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/accordion',
        [
            'render_callback' => 'render_callback_accordion_block'
        ]
    );

    register_block_type(
        /**
         * The accordion section's metadata sits in its own folder even though
         * its JS lives in accordion/index.js, because webpack.mix.js copies
         * block.json files with a one-per-folder glob.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/accordion-section',
        [
            'render_callback' => 'render_callback_accordion_block_section'
        ]
    );

    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/banner',
        [
            'render_callback' => 'render_callback_banner_block'
        ]
    );

    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/card',
        [
            'render_callback' => 'render_callback_card_block'
        ]
    );

    /**
     * CTA is registered from its block.json metadata rather than from an inline
     * array, so its attributes are declared in exactly one place instead of
     * being duplicated here and in the JS.
     *
     * The path points at build/ rather than src/ because .distignore excludes
     * /src — webpack.mix.js copies the file across. Only render_callback is
     * passed here; everything else, including the editorScript handle, comes
     * from block.json.
     */
    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/cta',
        [
            'render_callback' => 'render_callback_cta_block'
        ]
    );


    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/hero',
        [
            'render_callback' => 'render_callback_hero_block'
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/highlights-list',
        [
            'render_callback' => 'render_callback_highlights_list_block'
        ]
    );

    register_block_type(
        'mojblocks/iframe',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_iframe_block',
            'attributes' => [
                'iFrameURL'=> [
                    'type'=> 'string',
                ],
                'iFrameClassName'=> [
                    'type'=> 'string',
                ],
                'iFrameWidth'=> [
                    'type'=> 'number',
                ],
                'iFrameHeight'=> [
                    'type'=> 'number',
                ],
                'iFrameBorder'=> [
                    'type'=> 'boolean',
                ],
            ]
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/intro',
        [
            'render_callback' => 'render_callback_intro_block'
        ]
    );

    register_block_type(
        'mojblocks/laa-chatbot',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_laa_chatbot_block',
            'attributes' => [
                'chatbotClassName' => [
                    'type' => 'string'
                ]
            ]
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/quote',
        [
            'render_callback' => 'render_callback_quote_block'
        ]
    );

    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/reveal',
        [
            'render_callback' => 'render_callback_reveal_block'
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/route-planner',
        [
            'render_callback' => 'render_callback_route_planner_block'
        ]
    );

    register_block_type(
        plugin_dir_path(__FILE__) . 'build/custom-blocks/separator',
        [
            'render_callback' => 'render_callback_separator_block'
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/staggered-box',
        [
            'render_callback' => 'render_callback_staggered_box_block'
        ]
    );

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies the file across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/auto-item-list',
        [
            'render_callback' => 'render_callback_auto_item_list_block'
        ]
    );
    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/latest-news',
        [
            'render_callback' => 'render_callback_latest_news_block'
        ]
    );
    if (post_type_exists("news")) {
        register_block_type(
            /**
             * Registered from block.json metadata rather than an inline array,
             * so attributes are declared in one place instead of being
             * duplicated here and in the JS.
             *
             * The path points at build/ rather than src/ because .distignore
             * excludes /src — webpack.mix.js copies block.json files across.
             * Only render_callback is passed here; everything else, including
             * the editorScript handle, comes from block.json.
             */
            plugin_dir_path(__FILE__) . 'build/custom-blocks/featured-news',
            [
                'render_callback' => 'render_callback_featured_news_block'
            ]
        );
    }

	if (post_type_exists("document")) {
		register_block_type(
			'mojblocks/featured-document',
			[
				'editor_script' => 'mojblocks-editor-script',
				'render_callback' => 'render_callback_featured_document_block',
				'attributes' => [
					'featuredDocumentHasDate' => [
						'type' => 'boolean'
					],
					'featuredDocumentID' => [
						'type' => 'string'
					],
					'featuredDocumentClassName' => [
						'type' => 'string'
					]
				]
			]
		);
	}

    register_block_type(
        /**
         * Registered from block.json metadata rather than an inline array, so
         * attributes are declared in one place instead of being duplicated here
         * and in the JS.
         *
         * The path points at build/ rather than src/ because .distignore
         * excludes /src — webpack.mix.js copies block.json files across. Only
         * render_callback is passed here; everything else, including the
         * editorScript handle, comes from block.json.
         */
        plugin_dir_path(__FILE__) . 'build/custom-blocks/featured-item',
        [
            'render_callback' => 'render_callback_featured_item_block'
        ]
    );
}

/**
 * Load PHP code for each custom MoJ block
 */

include plugin_dir_path(__FILE__) . 'src/custom-blocks/accordion/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/banner/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/card/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/cta/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/hero/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/highlights-list/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/intro/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/iframe/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/quote/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/reveal/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/route-planner/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/separator/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/staggered-box/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/latest-news/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/featured-news/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/featured-document/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/featured-item/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/auto-item-list/index.php';
include plugin_dir_path(__FILE__) . 'src/custom-blocks/laa-chatbot/index.php';

/**
 * Load PHP extended core blocks
 */
include plugin_dir_path(__FILE__) . 'src/extended-core-blocks/file/index.php';

/**
 * Queues up the gutenberg editor style
 *
 * TODO: migrate the blocks to apiVersion 3 before any site running this
 * plugin upgrades to WordPress 7.1, which always iframes the post editor
 * with no fallback for apiVersion 1/2 blocks.
 *
 * @see https://make.wordpress.org/core/2026/08/03/iframed-editor-changes-in-wordpress-7-1/
 */
function mojblocks_gutenberg_editor_styles()
{
    if (!is_admin()) {
        return;
    }

    wp_enqueue_style(
        'mojblocks-block-editor-styles',
        plugins_url('build/style-gutenburg.css', __FILE__),
        false,
        filemtime(plugin_dir_path(__FILE__) . 'build/style-gutenburg.css'),
        'all'
    );
}

add_action('enqueue_block_assets', 'mojblocks_gutenberg_editor_styles');

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
    // Make Dashicons available on the frontend
    wp_enqueue_style('dashicons');

    // Load MoJ block styles
    wp_enqueue_style('mojblocks');

    // This script is dequeue when using this plugin in the Hale theme, blocking it from loading.
    wp_enqueue_script(
        'mojblocks-govuk-js',
        plugins_url('build/mojblocks.min.js', __FILE__),
        false,
        '1.0',
        'all'
    );
}

add_action('wp_enqueue_scripts', 'mojblocks_enqueue_style');
