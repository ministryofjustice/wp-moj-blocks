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
    $attribute_hero_image = $attributes['backgroundImage'] ?? '';
    $attribute_hero_image_position = $attributes['heroImagePosition'] ?? 'center';

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-hero class, any
    // custom classes the user set (WordPress persists those in `className`),
    // and anything block supports contribute — so this stays correct as
    // supports are added, without duplicating the logic here.
    //
    // The legacy heroClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for heroes saved before the apiVersion 3 upgrade.
    $hero_wrapper_attributes = get_block_wrapper_attributes(['class' => 'mojblocks-hero']);

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();
    ?>

    <section <?php echo $hero_wrapper_attributes; ?>>
        <div class="mojblocks-hero__image"
        style="background-image:url('<?php _e(esc_url_raw($attribute_hero_image)); ?>');
        background-size: cover; background-position: <?php _e($attribute_hero_image_position); ?>;"></div>
        <?php if (trim($content)) { ?>
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
