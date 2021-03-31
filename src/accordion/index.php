<?php

/**
 * Accordion block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_accordion_block($attributes, $content)
{
    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">

    <?php echo $content; ?>

    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}

/**
 * Accordion block section
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_accordion_block_section($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_accordion_section_className = $attributes['accordionSectionClassName'] ?? '';
    $attribute_accordion_section_Title = $attributes['accordionSectionTitle'] ?? '';
    $attribute_accordion_section_TextArea = $attributes['accordionSectionTextArea'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_accordion_section_className)) ; ?> govuk-accordion__section">
        <div class="govuk-accordion__section-header">
        <h3 class="govuk-accordion__section-heading">
            <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
            <?php _e(esc_html($attribute_accordion_section_Title)) ; ?>
            </span>
        </h3>
        </div>
        <div id="accordion-default-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
            <div class="govuk-body">
            <?php _e(esc_html($attribute_accordion_section_TextArea)) ; ?>
            <?php _e(esc_html($content)); ?>
            </div>
        </div>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // decode escaped html so users can add markup to content
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
