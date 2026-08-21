<?php

/**
 * Reveal block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_reveal_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_reveal_content = $attributes['revealContent'] ?? '';
    $attribute_reveal_revealTitle = $attributes['revealTitle'] ?? '';

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-reveal class, any
    // custom classes the user set (WordPress persists those in `className`),
    // and anything block supports contribute — so this stays correct as
    // supports are added, without duplicating the logic here.
    //
    // The legacy revealClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for reveals saved before the apiVersion 3 upgrade.
    $reveal_wrapper_attributes = get_block_wrapper_attributes(['class' => 'mojblocks-reveal']);

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div <?php echo $reveal_wrapper_attributes; ?>>
        <details class="govuk-details" data-module="govuk-details">
            <summary class="govuk-details__summary">
                <span class="mojblocks-reveal__title govuk-details__summary-text">
                    <?php _e(esc_html($attribute_reveal_revealTitle)); ?>
                </span>
            </summary>
            <div class="mojblocks-reveal__content govuk-details__text">
                <?php if (!esc_html($content)) _e(esc_html($attribute_reveal_content)); ?>
                <?php _e(esc_html($content)); ?>
            </div>
        </details>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
