<?php

/**
 * Latest News block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_latest_news_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_box_title = $attributes['latestNewsTitle'] ?? '';
    $attribute_box_img_url = $attributes['latestNewsImageURL'] ?? '';
    $attribute_box_img_alt_text = $attributes['laterstNewsImageAltText'] ?? '';
    $attribute_box_content = $attributes['latestNewsHeadline'] ?? '';
    $attribute_box_className = $attributes['latestNewsClassName'] ?? '';
    $attribute_box_numberItems = $attributes['latestNewsNumber'] ?? 3;
    $attribute_box_hasDate = $attributes['latestNewsHasDate'] ?? 'true';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_box_className)) ; ?> mojblocks-latest-news">
        <div class="govuk-width-container">
            <h2><?php _e(esc_html($attribute_box_title)); ?></h2>
            <div class="govuk-grid-row">
                <?php
                    $i = 0;
                    while (++$i <= $attribute_box_numberItems) {
                    ?>
                        <div class="mojblocks-latest-news__item">
                            <div class="mojblocks-latest-news__headline" >
                                <a href="#">News Headline Automatically Populated</a>
                            </div>
                            <?php if ($attribute_box_hasDate) { ?>
                                <div class="mojblocks-latest-news__date" >
                                    29 Febryary 1980
                                </div>
                            <?php } ?>
                        </div>
                    <?php
                    }
                ?>
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
