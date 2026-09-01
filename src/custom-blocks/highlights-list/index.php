<?php

/**
 * Highlights list block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_highlights_list_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_list_title = $attributes['listTitle'] ?? '';
    $attribute_list_items = $attributes['listItems'] ?? '';
    $attribute_list_bottom = $attributes['flushBottom'] ?? false;

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-highlights-list class
    // and the user's custom classes, which WordPress persists in `className`.
    //
    // The legacy listClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for lists saved before the apiVersion 3 upgrade.
    //
    // The flush-bottom margin must be passed in rather than written as a
    // separate style attribute on the element: this function returns a complete
    // class="..." style="..." string, and a second style attribute on the same
    // tag would be ignored by the browser.
    $highlights_list_wrapper_args = ['class' => 'mojblocks-highlights-list'];

    if ($attribute_list_bottom) {
        $highlights_list_wrapper_args['style'] = 'margin-bottom:0';
    }

    $highlights_list_wrapper_attributes = get_block_wrapper_attributes($highlights_list_wrapper_args);

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div <?php echo $highlights_list_wrapper_attributes; ?>>
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <div class="mojblocks-highlights-list__heading-container">
                    <h2 class="mojblocks-highlights-list__heading">
                        <span role="text">
                            <span class="mojblocks-highlights-list__heading-text">
                                    <?php _e(esc_html($attribute_list_title)); ?>
                            </span>
                        </span>
                    </h2>
                </div>
                <div class="mojblocks-highlights-list__content">
                    <ul class="mojblocks-highlights-list__list">
                        <?php _e(esc_html($attribute_list_items)); ?>
                    </ul>
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
