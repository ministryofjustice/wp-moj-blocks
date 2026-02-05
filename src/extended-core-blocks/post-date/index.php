<?php

defined('ABSPATH') || exit;

/**
 * Update the core post date block to support an optional prefix.
 * 
 * - hasPrefix (boolean): Whether to show a prefix before the date.
 * - prefix (string): The prefix text to show before the date.
 */
add_filter('block_type_metadata_settings', function (array $settings, array $metadata) {
    if (($metadata['name'] ?? '') !== 'core/post-date') {
        return $settings;
    }

    $settings['attributes'] = array_merge($settings['attributes'] ?? [], [
        'hasPrefix' => ['type' => 'boolean', 'default' => false],
        'prefix'    => ['type' => 'string',  'default' => ''],
    ]);

    return $settings;
}, 10, 2);


/**
 * Filter the HTML of the rendered post date block to include the prefix if set.
 */
add_filter('render_block_core/post-date', function (string $html, array $block) {
    $attrs = $block['attrs'] ?? [];

    if (empty($attrs['hasPrefix']) || empty($attrs['prefix'])) {
        return $html;
    }

    $allowed_tags = ['strong' => [], 'em' => []];

    $prefix_html = sprintf(
        '<span class="wp-block-post-date__prefix">%s</span> ',
        wp_kses((string) $attrs['prefix'], $allowed_tags)
    );

    // Insert prefix after the opening tag
    $html = preg_replace_callback(
        '/^(<[^>]+>)/',
        fn($m) => $m[1] . $prefix_html,
        $html,
        1
    );

    return $html;
}, 10, 2);
