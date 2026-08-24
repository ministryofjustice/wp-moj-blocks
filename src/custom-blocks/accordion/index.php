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
    $welshControls = $attributes['controlLanguageWelsh'] ?? false;
    $wideContent = $attributes['wideContent'] ?? false;

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-accordion class and
    // the user's custom classes, which WordPress persists in `className`.
    //
    // These go on a separate outer div rather than on .govuk-accordion, to match
    // edit(). There, blockProps cannot sit on .govuk-accordion because
    // editor.scss draws "Accordion start" and "Accordion end" labels with
    // :before and :after on that class, and Gutenberg draws its selection
    // outline with ::after on the element carrying blockProps — the two collide.
    // Keeping the structures identical means one set of theme selectors works in
    // both places.
    //
    // The legacy accordionClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for accordions saved before the apiVersion 3 upgrade.
    $accordion_wrapper_attributes = get_block_wrapper_attributes();

    $accordionClassName = '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    if ($wideContent) {
        $accordionClassName .= ' wide-content-true';
    }

    ?>

    <div <?php echo $accordion_wrapper_attributes; ?>>
    <div
        class="govuk-accordion <?php echo esc_attr($accordionClassName); ?> "
        id="accordion-default"
        data-module="govuk-accordion"
        <?php
            // Translations taken from https://covid19.public-inquiry.uk/cy/materion-pob-stori/
            if ($welshControls) {
        ?>
            data-i18n.hide-all-sections="Cuddio pob adran"
            data-i18n.show-all-sections="Dangos pob adran"
            data-i18n.hide-section="Dangos"
            data-i18n.show-section="Cuddio"
            data-i18n.hide-section-aria-label="dangos yr adran hon"
            data-i18n.show-section-aria-label="cuddio'r adran hon"
        <?php } ?>
    >

    <?php echo $content; ?>

    </div>
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

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-accordion-section
    // class and the user's custom classes, which WordPress persists in
    // `className`.
    //
    // The legacy accordionSectionClassName attribute is deliberately not read:
    // custom classes have always been saved separately in `className`, so
    // nothing is lost for sections saved before the apiVersion 3 upgrade.
    $accordion_section_wrapper_attributes = get_block_wrapper_attributes(
        ['class' => 'govuk-accordion__section']
    );

    // Parse attributes found in index.js
    $attribute_accordion_section_Title = $attributes['accordionSectionTitle'] ?? '';
    $attribute_accordion_section_TextArea = $attributes['accordionSectionTextArea'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div <?php echo $accordion_section_wrapper_attributes; ?>>
        <div class="govuk-accordion__section-header">
            <h3 class="govuk-accordion__section-heading">
                <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
                <?php _e(esc_html($attribute_accordion_section_Title)) ; ?>
                </span>
            </h3>
        </div>
        <div id="accordion-default-content-1" class="govuk-accordion__section-content">
            <?php
            $firstParagraphContent = _(trim(esc_html($attribute_accordion_section_TextArea)));
            if (!empty($firstParagraphContent)) {
                echo "<p class='govuk-body'>$firstParagraphContent</p>";
            }
            _e(esc_html($content));
            ?>
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
