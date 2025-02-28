<?php

/**
 * iFrame block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_iFrame_block($attributes, $content)
{
    // Parse attributes found in index.js
    $attribute_iFrame_url = $attributes['iFrameURL'] ?? '';
    $attribute_iFrame_width = $attributes['iFrameWidth'] ?? '';
    $attribute_iFrame_height = $attributes['iFrameHeight'] ?? '';
    $attribute_iFrame_border = $attributes['iFrameBorder'] ?? false;
    $attribute_iFrame_centre = $attributes['iFrameCentre'] ?? false;
    $attribute_iFrame_className = $attributes['iFrameClassName'] ?? '';

    if ($attribute_iFrame_url == "" || substr($attribute_iFrame_url,0,8) != "https://") {
        return "";
    }
    
    $attribute_iFrame_url = esc_url($attribute_iFrame_url);
    $attribute_iFrame_width = esc_html($attribute_iFrame_width);
    $attribute_iFrame_height = esc_html($attribute_iFrame_height);
    $attribute_iFrame_className = esc_html($attribute_iFrame_className);

    if ($attribute_iFrame_centre) $attribute_iFrame_className = "moj-block-iframe--centre ".$attribute_iFrame_className;
    if ($attribute_iFrame_border) $attribute_iFrame_className = "moj-block-iframe--border ".$attribute_iFrame_className;

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>
    <iframe
        class="moj-block-iframe <?php echo $attribute_iFrame_className; ?>"
        src="<?php echo $attribute_iFrame_url; ?>"
        width="<?php echo $attribute_iFrame_width; ?>"
        height="<?php echo $attribute_iFrame_height; ?>"
    ></iframe>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
   // $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
