<?php

/**
 * Hero block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_hero_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_hero_title = $attributes['heroTitle'] ?? '';
    $attribute_hero_text = $attributes['heroText'] ?? '';
    $attribute_hero_image = $attributes['backgroundImage'] ?? '';
    $attribute_hero_className = $attributes['heroClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();
    ?>

    <section class="<?php _e(esc_html($attribute_hero_className)) ; ?> mojblocks-hero">
        <div class="mojblocks-hero__image"
        style="background-image:url('<?php _e(esc_url_raw($attribute_hero_image)) ; ?>');
        background-size: cover; background-position: center;"></div>
        <?php if ($content) { ?>
            <div class="govuk-width-container">
                <div class="govuk-grid-row">
                    <div class="mojblocks-hero__overlay">
                        <div class="govuk-grid-column-three-quarters">
                            <?php _e(esc_html($content)); ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
    </section>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
