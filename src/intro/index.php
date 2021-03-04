<?php

/**
 * Intro block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_intro_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_intro_content = $attributes['introText'] ?? '';
    $attribute_intro_className = $attributes['introClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_intro_className)); ?>">
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="govuk-grid-column-three-quarters">
                    <div class="mojblocks-intro--type">

                        <div class="mojblocks-intro__content intro">
                            <?php _e(esc_html($attribute_intro_content)); ?>
                        </div>
                    </div>
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
