<?php

/**
 * Quote block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_quote_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_quote_className = $attributes['quoteClassName'] ?? '';
    $attribute_quote_imgURL = $attributes['quoteImgURL'] ?? '';
    $attribute_quote_quoteContent = $attributes['quoteContent'] ?? '';
    $attribute_quote_quoteName = $attributes['quoteName'] ?? '';
    $attribute_quote_quoteAlignment = $attributes['quoteAlignment'] ?? '';

    // Add data-src only if image has been added
    $data_src = !empty($attribute_quote_imgURL) ? 'data-src="' .
    esc_url_raw($attribute_quote_imgURL) . '"' : '';

    // Add alignment value and style only if alignment has been set by an editor
    $quote_alignment = !empty($attribute_quote_quoteAlignment) ? 'style="text-align:' .
    esc_html($attribute_quote_quoteAlignment) . '"' : '';

    // Add image classes and styles only if there is an image set to display
    $img_class = !empty($attribute_quote_imgURL) ?
    'class="mojblocks-quote__image mojblocks-quote__image-selected" style="background-image:url(' .
    esc_url_raw($attribute_quote_imgURL) . ');" ' : '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_quote_className)) ; ?> mojblocks-quote" <?php _e($data_src); ?> >
        <div <?php _e($img_class); ?> >
        </div>
        <div class="govuk-width-container">
            <div class="mojblocks-quote__content" <?php _e($quote_alignment); ?> >
                <div class="mojblocks-quote__content__icon">
                    <span class="dashicon dashicons dashicons-format-quote"></span>
                </div>

                <div class="mojblocks-quote__content__quote">
                    <?php _e(esc_html($attribute_quote_quoteContent)) ; ?>
                </div>

                <div class="mojblocks-quote__content__name">
                    <?php _e(esc_html($attribute_quote_quoteName)) ; ?>
                </div>

            </div>
        </div>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);
    
    ob_end_clean();

    return $output;
}
