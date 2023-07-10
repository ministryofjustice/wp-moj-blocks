<?php

/**
 * CTA block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_cta_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_cta_title = $attributes['ctaTitle'] ?? '';
    $attribute_cta_text = $attributes['ctaText'] ?? '';
    $attribute_cta_button_link = $attributes['buttonLink'] ?? '';
    $attribute_cta_button_label = $attributes['buttonLabel'] ?? '';
    $attribute_cta_flush_bottom = $attributes['flushBottom'] ?? false;
    $attribute_cta_highlightClipping = $attributes['clipping'] ?? false;
    $attribute_cta_className = $attributes['ctaClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>
    <div class="<?php _e(esc_html($attribute_cta_className)); if($attribute_cta_highlightClipping) _e(" highlight-clipping"); ?>" <?php if ($attribute_cta_flush_bottom) echo "style='margin-bottom:0'"; ?>>
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-three-quarters block-cancel-gds-width-if-flex-narrow">
                    <div class="mojblocks-cta__heading-container">
                        <h2 class="govuk-heading-l mojblocks-cta__heading">
                            <span role="text">
                                <span class="mojblocks-cta__heading-text">
                                    <?php _e(esc_html($attribute_cta_title)); ?>
                                </span>
                            </span>
                        </h2>
                    </div>
                    <div class="mojblocks-cta__content">
                        <?php _e(esc_html($attribute_cta_text)); ?>
                    </div>
                    <a href="<?php _e(esc_html($attribute_cta_button_link)); ?>" class="mojblocks-button govuk-button">
                        <?php _e(esc_html($attribute_cta_button_label)); ?>
                    </a>
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
