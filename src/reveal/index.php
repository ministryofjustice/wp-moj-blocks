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
    $attribute_reveal_className = $attributes['revealClassName'] ?? '';
    $attribute_reveal_content = $attributes['revealContent'] ?? '';
    $attribute_reveal_revealTitle = $attributes['revealTitle'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_reveal_className)); ?>">
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-three-quarters">
                    <details class="govuk-details" data-module="govuk-details">
                        <summary class="govuk-details__summary">
                            <span class="mojblocks-reveal__title govuk-details__summary-text">
                            <?php _e(esc_html($attribute_reveal_revealTitle)); ?>
                            </span>
                        </summary>
                        <div class="mojblocks-reveal__content govuk-details__text">
                        <?php _e(esc_html($attribute_reveal_content)); ?>
                        </div>
                    </details>
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
