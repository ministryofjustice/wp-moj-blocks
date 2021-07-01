<?php

/**
 * Modify core file block in Hale
 * This hooks into and modifies the frontend of core
 *
 * @package   Hale
 * @copyright Ministry Of Justice
 * Adapted from version from NHS Leadership Academy, Tony Blacker
 * @version   2.0
 */

add_filter('render_block', 'mojblocks_filter_file_block', 10, 2);

/**
 * Filter the file block through our own method.
 *
 * @param array $block_content the contents of the block itself.
 * @param array $block         information about block being modified.
 *
 * @return function hale_block_renderer to send back the modified block content.
 */
function mojblocks_filter_file_block($block_content, $block)
{

    if (is_admin()) {
        return;
    }

    if ('core/file' !== $block['blockName']) {
        return $block_content;
    }

    return mojblocks_file_block_renderer($block['blockName'], $block['attrs'], $block_content);
}

/**
 * Render the modified file block with our own method.
 *
 * @param string $name       the name of the block itself.
 * @param array  $attributes information about block being modified.
 *
 * @return string $object.
 */
function mojblocks_file_block_renderer($name, $attributes, $block_content)
{

    // Set query vars so they are accessible to the template part.
    foreach ($attributes as $attribute_name => $attribute_value) {
        set_query_var($name . '/' . $attribute_name, $attribute_value);
    }

    $file = get_attached_file($attributes["id"]);
    $filesize = file_exists($file) ? "&#44; " . size_format(filesize($file)) : null;
    $filetype = wp_check_filetype($attributes["href"]);
    $extention = strtoupper($filetype["ext"]);

    // File Block returns HTML file link
    $parsedHTML = strip_tags($block_content);

    // Find last left hand parenthesis and strip removing extention
    $pattern = "/\(\w*\D$/";

    // Return a file name with the extention removed and no trailing whitespace
    $filename = trim(preg_replace($pattern, '', $parsedHTML, 1));

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="mojblocks-file">
        <a href="<?php echo $attributes["href"]; ?>"><?php _e($filename, 'mojblocks'); ?></a>

        <div class="mojblocks-file__extention">
            <span>&#40;</span><?php echo esc_attr($extention); ?><?php echo esc_attr($filesize); ?><span>&#41;</span>
        </div>
    </div>

    <?php

    // Clear the query vars so they don't bleed into subsequent instances of the same block type.
    foreach ($attributes as $attribute_name => $attribute_value) {
        set_query_var($name . '/' . $attribute_name, null);
    }

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
