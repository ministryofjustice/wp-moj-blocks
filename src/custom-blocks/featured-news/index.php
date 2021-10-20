<?php

/**
 * Featured News block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_featured_news_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_box_featuredID = $attributes['featuredNewsID'] ?? '';
    $attribute_box_hasDate = $attributes['featuredNewsHasDate'] ?? 'true';
    $attribute_box_newsLinkText = $attributes['featuredNewsLink'] ?? 'Read full article';
    $attribute_box_className = $attributes['featuredNewsClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <?php
        if (get_post_type($attribute_box_featuredID) == "news") {
            $news_array = [
                "title" => get_the_title($attribute_box_featuredID),
                "summary" => get_post_meta( $attribute_box_featuredID, 'news_story_summary', TRUE ),
                "date" => get_the_date('d F Y',$attribute_box_featuredID),
                "link" => get_permalink($attribute_box_featuredID),
                "image" => get_the_post_thumbnail_url($attribute_box_featuredID),
            ];
    ?>
        <div class="<?php _e(esc_html($attribute_box_className)); if (!$news_array["image"]) _e("mojblocks-featured-news--no-image"); ?> mojblocks-featured-news">
            <div class="govuk-width-container">
                <?php
                    // Content generated by innerblocks
                    echo $content;
                ?>
                <div class="govuk-grid-row">
                    <div class="mojblocks-featured-news__item">
                        <?php if ($news_array["image"]) { ?>
                        <div class="mojblocks-featured-news__image" style="background-image:url('<?php _e($news_array["image"]); ?>')">
                            <span role="img" aria-label="Cover image for featured news story"></span>
                        </div>
                        <?php } ?>
                        <div class="mojblocks-featured-news__text">
                            <div class="govuk-body govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline" >
                                <?php _e(esc_html($news_array["title"]));?>
                            </div>
                            <div class="govuk-body mojblocks-featured-news__summary" >
                                <?php _e(esc_html($news_array["summary"]));?>
                            </div>
                            <?php
                            if ($attribute_box_hasDate) {
                                $articleDate = strtotime($news_array["date"]);
                                if (date("Y") == date("Y",$articleDate)) {
                                    $dateString = date("j F",$articleDate);
                                } else {
                                    $dateString = date("j F Y",$articleDate);
                                }
                                $news_array["date"] = $dateString;
                            ?>
                                <div class="govuk-body-s mojblocks-featured-news__date" >
                                    <?php _e(esc_html($news_array["date"]));?>
                                </div>
                            <?php } ?>
                            <a class="govuk-button mojblocks-featured-news__link" href="<?php _e(esc_html($news_array["link"]));?>" class="mojblocks-featured-news__link">
                                <?php
                                    _e(esc_html($attribute_box_newsLinkText));
                                ?>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <?php
        }

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
?>
