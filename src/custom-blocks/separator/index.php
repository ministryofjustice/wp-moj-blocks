<?php

/**
 * Separator block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_separator_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_separator_size = $attributes['separatorBreakSize'] ?? 'xl';

    // Sets the size of the gap
    $size = !empty($attribute_separator_size) ? "govuk-section-break--$attribute_separator_size" : '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <hr class="govuk-section-break govuk-section-break--visible <?php echo $size; ?>" />

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
