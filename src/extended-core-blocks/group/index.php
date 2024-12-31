<?php

/**
 * Modify core group block
 * This hooks into and modifies the frontend of core
 *
 * @package   Hale
 * @copyright Ministry Of Justice
 * Adapted from version from NHS Leadership Academy, Tony Blacker
 * @version   2.0
 */

add_filter('render_block', 'mojblocks_filter_group_block', 10, 2);

/**
 * Filter the group block through our own method.
 *
 * @param array $block_content the contents of the block itself.
 * @param array $block         information about block being modified.
 *
 * @return function hale_block_renderer to send back the modified block content.
 */
function mojblocks_filter_group_block($block_content, $block)
{

    if ('core/group' !== $block['blockName']) {
        return $block_content;
    }

	return mojblocks_group_block_renderer($block['blockName'], $block['attrs'], $block_content);
}

/**
 * Render the modified group block with our own method.
 *
 * @param string $name       the name of the block itself.
 * @param array  $attributes information about block being modified.
 *
 * @return string $object.
 */
function mojblocks_group_block_renderer($name, $attributes, $block_content)
{
	
	$groupClassName = $attributes["className"];

	if (str_contains($groupClassName, "is-style-banner")) {
		$script = '
			<script>
				let header = document.querySelector("header");
				let header_parent = header.parentElement;
				let banner = document.querySelector(".wp-block-group.is-style-banner");
				header_parent.insertBefore(banner,header.nextSibling);
			</script>
		';
		return $block_content.$script;
	} else {
		return $block_content;
	}
}
