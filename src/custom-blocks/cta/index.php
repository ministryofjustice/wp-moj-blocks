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
    $attribute_cta_button_link_style = $attributes['linkStyle'] ?? 'button';
    $attribute_cta_button_link = $attributes['buttonLink'] ?? '';
    $attribute_cta_button_label = $attributes['buttonLabel'] ?? '';
    $attribute_cta_flush_bottom = $attributes['flushBottom'] ?? false;

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-cta class, any
    // custom classes the user set (WordPress persists those in `className`),
    // and anything block supports contribute — so this stays correct as
    // supports are added, without duplicating the logic here.
    //
    // The legacy ctaClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for CTAs saved before the apiVersion 3 upgrade.
    //
    // The flush-bottom margin must be passed in rather than written as a
    // separate style attribute on the element: this function returns a
    // complete class="..." style="..." string, and a second style attribute on
    // the same tag would be ignored by the browser.
    $cta_wrapper_args = [];

    if ($attribute_cta_flush_bottom) {
        $cta_wrapper_args['style'] = 'margin-bottom:0';
    }

    $cta_wrapper_attributes = get_block_wrapper_attributes($cta_wrapper_args);

    // Link class
    if ($attribute_cta_button_link_style == "link") {
        $cta_link_class = "mojblocks-cta-link govuk-link govuk-body";
    } else {
        $cta_link_class = "mojblocks-button govuk-button";
    }

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>
    <div <?php echo $cta_wrapper_attributes; ?>>
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-three-quarters block-cancel-gds-width-if-flex-narrow">
                    <div class="mojblocks-cta__heading-container">
                        <h2 class="govuk-heading-l mojblocks-cta__heading">
                            <span class="mojblocks-cta__heading-text">
                                <?php _e(esc_html($attribute_cta_title)); ?>
                            </span>
                        </h2>
                    </div>
                    <div class="mojblocks-cta__content">
                        <?php _e(esc_html($attribute_cta_text)); ?>
                    </div>
                    <a href="<?php _e(esc_html($attribute_cta_button_link)); ?>" class="<?php echo $cta_link_class; ?>">
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
