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

    if ($attribute_iFrame_url == "" || substr($attribute_iFrame_url,0,8) != "https://") {
        return "";
    }

    $attribute_iFrame_border = $attribute_iFrame_border ? "1" : "0";

    $attribute_iFrame_url = esc_url($attribute_iFrame_url);

    // Classes are split across two elements so the frontend markup matches what
    // the editor produces:
    //
    //   wrapper <div> — the generated block class plus any custom classes the
    //   user set. This mirrors the element carrying useBlockProps in edit(),
    //   which needs a single wrapper because edit() renders the preview overlay
    //   alongside the iframe.
    //
    //   inner <iframe> — the presentational moj-block-iframe classes and their
    //   centre/border modifiers.
    //
    // The legacy iFrameClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for iframes saved before the apiVersion 3 upgrade.
    $iFrame_wrapper_attributes = get_block_wrapper_attributes();

    $iFrame_classes = ['moj-block-iframe'];

    if ($attribute_iFrame_centre) {
        $iFrame_classes[] = 'moj-block-iframe--centre';
    }

    if ($attribute_iFrame_border !== "0") {
        $iFrame_classes[] = 'moj-block-iframe--border';
    }

    $attribute_iFrame_className = implode(' ', $iFrame_classes);

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>
    <div <?php echo $iFrame_wrapper_attributes; ?>>
        <iframe
            class="<?php echo esc_attr($attribute_iFrame_className); ?>"
            src="<?php echo $attribute_iFrame_url; ?>"
            width="<?php echo esc_attr($attribute_iFrame_width); ?>"
            height="<?php echo esc_attr($attribute_iFrame_height); ?>"
            frameborder="<?php echo esc_attr($attribute_iFrame_border); ?>"
        ></iframe>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
   // $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
