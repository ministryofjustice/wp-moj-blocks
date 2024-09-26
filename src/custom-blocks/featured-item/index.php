<?php

/**
 * Featured Item block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_featured_item_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_box_featuredType = esc_html($attributes['featuredItemType'] ?? '');
    $attribute_box_featuredID = esc_html($attributes['featuredItemID'] ?? '');
    $attribute_box_hasImage = esc_html($attributes['featuredImage'] ?? true);
    $attribute_box_hasDate = esc_html($attributes['featuredItemHasDate'] ?? 'true');
    $attribute_box_hasBar = esc_html($attributes['featuredItemHasBar'] ?? 'true');
    $attribute_box_linkText = esc_html($attributes['featuredLinkText'] ?? 'Read full article');
    $attribute_box_customImage = esc_url_raw($attributes['featuredCustomImage'] ?? '');
    $attribute_box_className = esc_html($attributes['className'] ?? '');

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <?php
        if ($attribute_box_featuredID != "" && get_post_type($attribute_box_featuredID) == $attribute_box_featuredType) {
            $feature_content = [
                "title" => get_the_title($attribute_box_featuredID),
                "summary" => get_post_meta( $attribute_box_featuredID, 'post_summary', TRUE ),
                "date" => get_the_date('d F Y',$attribute_box_featuredID),
                "link" => get_permalink($attribute_box_featuredID),
                "image" => get_the_post_thumbnail_url($attribute_box_featuredID, "large"),
                "imageID" => get_post_thumbnail_id($attribute_box_featuredID),
            ];

            if (!empty($attribute_box_customImage)) {
                $image = $attribute_box_customImage;
            } elseif (!empty($feature_content["image"])) {
                $image = $feature_content["image"];
            } else {
                $image = false;
            }
    ?>
        <div class="<?php _e(esc_html($attribute_box_className)); ?> mojblocks-featured-item">
            <div class="govuk-width-container govuk-!-margin-0">
                <?php
                    // Content generated by innerblocks
                    echo $content;
                ?>
                <div class="govuk-grid-row">
                    <div class="mojblocks-featured-item__item">
                        <?php if ($image && $attribute_box_hasImage) { ?>
                            <div class="mojblocks-featured-item__image mojblocks-featured-item__image--cover" style="background-image:url('<?php echo $image ?>')">
                                <span role="img" aria-label="Cover image for featured item (<?php _e(esc_html($feature_content["title"]));?>)"></span>
                            </div>
                        <?php } ?>
                        <div class="mojblocks-featured-item__text">
                            <div class="mojblocks-featured-item__headline <?php if(!$attribute_box_hasBar) echo "mojblocks-featured-item__headline--no-bar"; ?>">
                                <a class="govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-item__headline-link" href="<?php _e(esc_html($feature_content["link"]));?>" >
                                    <?php _e(esc_html($feature_content["title"]));?>
                                </a>
                            </div>

                            <?php if (!empty($feature_content["summary"])) { ?>
                                <p class="govuk-body mojblocks-featured-item__summary" >
                                    <?php _e(esc_html($feature_content["summary"]));?>
                                </p>
                            <?php } ?>

                            <?php
                            if ($attribute_box_hasDate) {
                                $articleDate = strtotime($feature_content["date"]);
                                $date_string = date("F j, Y",$articleDate);
                            ?>
                                <p class="govuk-body-s mojblocks-featured-item__date" >
                                    <span class="govuk-visually-hidden"><?php _e("Published on ","hale"); ?></span><?php _e(esc_html($date_string));?>
                                </p>
                            <?php } ?>

                            <?php if (!empty(trim($attribute_box_linkText))) { ?>
                                <a class="govuk-link mojblocks-featured-item__link" href="<?php _e(esc_html($feature_content["link"])); ?>">
                                    <?php _e(esc_html($attribute_box_linkText));?>
                                </a>
                            <?php } ?>

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
