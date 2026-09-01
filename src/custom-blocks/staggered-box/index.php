<?php

/**
 * Staggered Box block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_staggered_box_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_box_title = $attributes['staggeredBoxTitle'] ?? '';
    $attribute_box_img_url = $attributes['staggeredBoxImageURL'] ?? '';
    $attribute_box_img_alt_text = $attributes['staggeredBoxImageAltText'] ?? '';
    $attribute_box_content = $attributes['staggeredBoxContent'] ?? '';
    $attribute_box_button_link = $attributes['staggeredBoxButtonLink'] ?? '';
    $attribute_box_button_text = $attributes['staggeredBoxButtonText'] ?? '';

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-staggered-box class,
    // the user's custom classes and the is-style-* class from the registered
    // block styles — WordPress persists all of those in `className`.
    //
    // The is-style-* class matters here: style.scss targets
    // .is-style-staggered-box-image-right to flip the image alignment.
    //
    // The legacy staggeredBoxClassName attribute is deliberately not read:
    // custom classes have always been saved separately in `className`, so
    // nothing is lost for boxes saved before the apiVersion 3 upgrade.
    $staggered_box_wrapper_attributes = get_block_wrapper_attributes(
        ['class' => 'mojblocks-staggered-box']
    );

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div <?php echo $staggered_box_wrapper_attributes; ?>>
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="mojblocks-staggered-box__image-container govuk-grid-column-two-thirds ">
                    <img class="mojblocks-staggered-block__image" src="<?php _e(esc_url($attribute_box_img_url)); ?>" alt="<?php _e(esc_html($attribute_box_img_alt_text)); ?>" />
                </div>

                <div class="mojblocks-staggered-box__text-container govuk-grid-column-one-half" >
                    <h2 class="mojblocks-staggered-box__title"><?php _e(esc_html($attribute_box_title)); ?></h2>
                    <p class="mojblocks-staggered-box__content" >
                        <?php _e(esc_html($attribute_box_content)); ?>
                    </p>
                    <a href="<?php _e(esc_url($attribute_box_button_link)); ?>" class="mojblocks-staggered-box__button" >
                        <?php _e(esc_html($attribute_box_button_text)); ?>
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
