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
    $attribute_gap_size = $attributes['separatorBreakSize'] ?? 'xl';
    $attribute_line_size = $attributes['separatorThickness'] ?? '1';
    $attribute_line_colour = $attributes['separatorColour'] ?? '#b1b4b6';
    $attribute_width = $attributes['separatorWidth'] ?? '0';
    $attribute_class_name = $attributes['className'] ?? '';

    // Sets the size of the gap around the line
    $gap_size = !empty($attribute_gap_size) ? "govuk-section-break--$attribute_gap_size" : '';

    // Sets the size of the line
    $line_size = !empty($attribute_line_size) ? "border-bottom-width:".$attribute_line_size."px;" : '';

    // Sets the colour of the line
    $line_hue = !empty($attribute_line_colour) ? "border-bottom-color:$attribute_line_colour;" : '';

    // Sets the colour of the line
    $line_width = !empty($attribute_width) ? "margin-right:$attribute_width;" : '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <hr
        class="alignfull govuk-section-break govuk-section-break--visible <?php echo $gap_size; ?> <?php echo esc_html($attribute_class_name); ?>"
        <?php // alignfull is to prevent group block overriding the width ?>
        style="<?php echo $line_size.$line_hue.$line_width;?>"
    />

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
