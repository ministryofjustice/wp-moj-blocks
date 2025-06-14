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
 * Version:     3.17.0
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
        'mojblocks/accordion',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_accordion_block',
            'attributes' => []
        ]
    );

    register_block_type(
        'mojblocks/accordion-section',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_accordion_block_section',
            'attributes' => [
                'accordionSectionClassName' => [
                    'type' => 'string'
                ],
                'accordionSectionTitle' => [
                    'type' => 'string'
                ],
                'accordionSectionTextArea' => [
                    'type' => 'string'
                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/banner',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_banner_block',
            'attributes' => [
                'bannerTitle' => [
                    'type' => 'string'
                ],
                'buttonLink' => [
                    'type' => 'string'
                ],
                'buttonLabel' => [
                    'type' => 'string'
                ],
                'bannerClassName' => [
                    'type' => 'string'

                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/card',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_card_block',
            'attributes' => [
                'className' => [
                    'type' => 'string'
                ],
                'cardTitle' => [
                    'type' => 'string'
                ],
                'cardExcerpt' => [
                    'type' => 'string'
                ],
                'cardImageURL' => [
                    'type' => 'string'
                ],
                'cardImageId' => [
                    'type' => 'number'
                ],
                'cardImagePosition' => [
                    'type' => 'string'
                ],
                'cardImageShape' => [
                    'type' => 'string'
                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/cta',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_cta_block',
            'attributes' => [
                'ctaTitle' => [
                    'type' => 'string'
                ],
                'ctaText' => [
                    'type' => 'string'
                ],
                'buttonLink' => [
                    'type' => 'string'
                ],
                'buttonLabel' => [
                    'type' => 'string'
                ],
                'ctaFlushBottom' => [
                    'type' => 'boolean'
                ],
                'ctaClassName' => [
                    'type' => 'string'
                ]
            ]
        ]
    );


    register_block_type(
        'mojblocks/hero',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_hero_block',
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
                ],
				'heroImagePosition' => [
						'type' => 'string'
				]
                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/highlights-list',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_highlights_list_block',
            'attributes' => [
                'listTitle' => [
                    'type' => 'string'
                ],
                'listItems' => [
                        'type' => 'string'
                ],
                'listClassName' => [
                    'type' => 'string'
                ]
            ]

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
        'mojblocks/intro',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_intro_block',
            'attributes' => [
                'introClassName' => [
                    'type' => 'string'
                ],
                'introText' => [
                    'type' => 'string'
                ]
            ]
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
        'mojblocks/quote',
        [
        'editor_script' => 'mojblocks-editor-script',
        'render_callback' => 'render_callback_quote_block',
        'attributes' => [
            'quoteImgURL' => [
                'type' => 'string'
            ],
            'quoteContent' => [
                'type' => 'string'
            ],
            'quoteName' => [
                'type' => 'string'
            ],
            'quoteAlignment' => [
                'type' => 'string'
            ],
            'quoteClassName' => [
                'type' => 'string'
            ]
          ]
        ]
    );

    register_block_type(
        'mojblocks/reveal',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_reveal_block',
            'attributes' => [
                'revealClassName' => [
                    'type' => 'string'
                ],
                'revealTitle' => [
                    'type' => 'string'
                ],
                'revealContent' => [
                    'type' => 'string'
                ]

            ]
        ]
    );

    register_block_type(
        'mojblocks/separator',
        [
        'editor_script' => 'mojblocks-editor-script',
        'render_callback' => 'render_callback_separator_block',
        'attributes' => [
            'size' => [
                'type' => 'string'
            ]
          ]
        ]
    );

    register_block_type(
        'mojblocks/staggered-box',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_staggered_box_block',
            'attributes' => [
                'staggeredBoxTitle' => [
                    'type' => 'string'
                ],
                'staggeredBoxContent' => [
                    'type' => 'string'
                ],
                'staggeredBoxButtonText' => [
                    'type' => 'string'
                ],
                'staggeredBoxButtonLink' => [
                    'type' => 'string'
                ],
                'staggeredBoxImageURL' => [
                    'type' => 'string'
                ],
                'staggeredBoxImageAltText' => [
                    'type' => 'string'
                ],
                'staggeredBoxClassName' => [
                    'type' => 'string'
                ]
            ]
        ]
    );

    register_block_type(
        'mojblocks/auto-item-list',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_auto_item_list_block',
            'attributes' => [
                'listItemType' => [
                    'type' => 'string'
                ],
                'listHasDate' => [
                    'type' => 'boolean'
                ],
                'listEmptyText' => [
                    'type' => 'string'
                ],
                'listClassName' => [
                    'type' => 'string'
                ]
            ]
        ]
    );
    register_block_type(
        'mojblocks/latest-news',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_latest_news_block',
            'attributes' => [
                'latestNewsNumber' => [
                    'type' => 'integer'
                ],
                'latestNewsHasDate' => [
                    'type' => 'boolean'
                ],
                'latestNewsExpiry' => [
                    'type' => 'integer'
                ],
                'latestNewsEmptyText' => [
                    'type' => 'string'
                ],
                'latestNewsClassName' => [
                    'type' => 'string'
                ]
            ]
        ]
    );
    if (post_type_exists("news")) {
        register_block_type(
            'mojblocks/featured-news',
            [
                'editor_script' => 'mojblocks-editor-script',
                'render_callback' => 'render_callback_featured_news_block',
                'attributes' => [
                    'featuredNewsHasDate' => [
                        'type' => 'boolean'
                    ],
                    'featuredNewsID' => [
                        'type' => 'string'
                    ],
                    'featuredNewsClassName' => [
                        'type' => 'string'
                    ]
                ]
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
        'mojblocks/featured-item',
        [
            'editor_script' => 'mojblocks-editor-script',
            'render_callback' => 'render_callback_featured_item_block',
            'attributes' => [
                'featuredItemHasDate' => [
                    'type' => 'boolean'
                ],
                'featuredItemID' => [
                    'type' => 'string'
                ],
                'featuredItemClassName' => [
                    'type' => 'string'
                ]
            ]
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
 */
function mojblocks_gutenberg_editor_styles()
{
    wp_enqueue_style(
        'mojblocks-block-editor-styles',
        plugins_url('build/style-gutenburg.css', __FILE__),
        false,
        '1.2',
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
    // Make Dashicons available on the frontend
    wp_enqueue_style('dashicons');

    // Load MoJ block styles
    wp_enqueue_style('mojblocks');

    // IE specific stylesheet
    wp_enqueue_style(
        'mojblocks-ie',
        plugins_url('build/ie.min.js', __FILE__),
        ['mojblocks']
    );
    wp_style_add_data('mojblocks-ie', 'conditional', 'IE');

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
