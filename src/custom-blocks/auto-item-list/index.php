<?php
/**
 * Auto-populated Item List
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_auto_item_list_block($attributes)
{

    // Parse attributes found in index.js
    $attribute_box_numberItems = $attributes['listLength'] ?? 3;
    $attribute_box_hasDate = $attributes['listHasDate'] ?? true;
    $attribute_box_hasTime = $attributes['listHasTime'] ?? false;
    $attribute_box_pastFuture = $attributes['pastFuture'] ?? 'past';
    $attribute_box_expiryWeeks = $attributes['listExpiry'] ?? 0;
    $attribute_box_emptyText = $attributes['listEmptyText'] ?? 'No items to display.';
    $attribute_box_className = $attributes['listClassName'] ?? '';
    $attribute_box_listPostType = $attributes['listItemType'] ?? '';
    $attribute_box_listSort = $attributes['listSort'] ?? 'date';
    $attribute_box_listImage = $attributes['listImage'] ?? false;
    $attribute_box_listDefaultImage = $attributes['listDefaultImage'] ?? '';
    $attribute_box_listDatePrefix = $attributes['listDatePrefix'] ?? 'Updated';

    $use_logo_as_default = false;
    if (empty($attribute_box_listDefaultImage)) {
        // If no default image is selected, use the site logo
        $use_logo_as_default = true;
        $attribute_box_listDefaultImage = wp_get_attachment_image_src(get_theme_mod( 'custom_logo' ), "medium")[0];
    }

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <?php
        // The Query
        $args = array(
            'post_type' => $attribute_box_listPostType,
        );
        $query = new WP_Query( $args );

        // The Loop
        $item_array = array();
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                if ($attribute_box_listDatePrefix) $date_prefix = __("$attribute_box_listDatePrefix: ","hale");
                if ($attribute_box_hasTime) $date_prefix .= "<br />"; //Break to give more space for the long date and time string
                if ($attribute_box_listSort == "date") {
                    $date_to_use = get_the_date("Ymd");
                    $time_to_use = get_the_time("YmdHis");
                    $date_prefix = "";
                } elseif ($attribute_box_listSort == "modified") {
                    $date_to_use = get_the_modified_date("Ymd");
                    $time_to_use = get_the_modified_time("YmdHis");
                } else {
                    $date_meta = get_date_format(get_post_meta(get_the_ID(), $attribute_box_listSort, true));
                    if (!$date_meta) {
                        // not a date/time, use publish date
                        $date_to_use = get_the_date("Ymd");
                        $time_to_use = get_the_time("YmdHis");
                        $date_prefix = "";
                    } else {
                        $date_to_use = $time_to_use = $date_meta["datetime"];
                        if (!$date_meta["has_time"]) $time_to_use = ""; //there is no time data so we set it to ""
                    }
                }

                if (!get_the_title() || !$date_to_use || !get_permalink(get_the_ID())) continue; //in case any of the required items is missing, we skip this entry

                if (!get_the_post_thumbnail_url(get_the_ID(),"medium")) {
                    $image = $attribute_box_listDefaultImage;
                    $use_default = true;
                } else {
                    $image = get_the_post_thumbnail_url(get_the_ID(),"medium");
                    $use_default = false;
                }

                $item_array[] = [
                    "id" => get_the_ID(),
                    "title" => get_the_title(),
                    "date" => $date_to_use,
                    "time" => $time_to_use,
                    "link" => get_permalink(get_the_ID()),
                    "image" => $image,
                    "useLogo" => $use_logo_as_default && $use_default,
                ];
            }
        }
        // Restore original Post Data
        wp_reset_postdata();

        $now = date("YmdHis");

        $future = false;
        if ($attribute_box_pastFuture == 'future') $future = true;

        $expiryDate = strtotime("01 Jan 1970");
        if ($attribute_box_expiryWeeks && is_numeric($attribute_box_expiryWeeks)) {
            $expiryDateDays = -7*$attribute_box_expiryWeeks;
            $expiryDate = strtotime($expiryDateDays." day", strtotime("now"));
        }

        // Sort the array according to the date
        $key_values = array_column($item_array, 'date');
        if ($future) {
            array_multisort($key_values, SORT_ASC, $item_array);
        } else {
            array_multisort($key_values, SORT_DESC, $item_array);
        }
        foreach($item_array as $k => $item) {
            if ($future && $item["date"]<$now) {
                // items in past are removed
                unset($item_array[$k]);
                continue;
            } elseif (!$future && $item["date"]>$now) {
                // items in future are removed
                unset($item_array[$k]);
                continue;
            }
            if (abs($attribute_box_expiryWeeks) > 0) {
                //0 = include all
                $difference_in_weeks = abs(intval((strtotime($item["date"]) - strtotime($now))/604800)); //604800 = seconds in 1 week
                if ($difference_in_weeks > abs($attribute_box_expiryWeeks)) {
                    // items outside range are removed
                    unset($item_array[$k]);
                    continue;
                }
            }
        }
        $item_array = array_values($item_array); //re-index
    ?>

    <div class="<?php _e(esc_html($attribute_box_className)); ?> mojblocks-auto-item-list">
        <div class="govuk-width-container">
            <div class="govuk-grid-row">
                <?php
                    $i = 0;
                    $number_of_items = count($item_array);
                    if ($number_of_items) {
                        while ($i < $number_of_items && $i < $attribute_box_numberItems) {
                ?>
                            <div class="mojblocks-auto-item-list__item mojblocks-auto-item-list__item--<?php echo $number_of_items; ?>">
                                <?php if ($attribute_box_listImage) { ?>
                                    <div class="mojblocks-auto-item-list__image <?php if ($item_array[$i]["useLogo"]) echo "mojblocks-auto-item-list__image--logo";?>" style="background-image:url('<?php echo $item_array[$i]["image"] ?>')">
                                        <span role="img" aria-label="Cover image for this item"></span>
                                    </div>
                                <?php } ?>
                                <p class="govuk-body mojblocks-auto-item-list__headline" >
                                    <a href="<?php _e(esc_html($item_array[$i]["link"]));?>"><?php _e(esc_html($item_array[$i]["title"]));?></a>
                                </p>
                                <?php
                                if ($attribute_box_hasDate) {
                                    $itemDate = strtotime($item_array[$i]["date"]);
                                    $itemTime = strtotime($item_array[$i]["time"]);
                                    $dateString = date("j F Y",$itemDate);
                                    $timeString = "";
                                    if ($attribute_box_hasTime && !empty($itemTime)) {
                                        $timeString .= ", ";
                                        if (date("Hi",$itemTime) == "1200") {
                                            $timeString .= "12 ".__("noon", "hale");
                                        } elseif (date("Hi",$itemTime) == "0000") {
                                            $timeString .= __("midnight", "hale");
                                        } else {
                                            $timeString .= date("g:i",$itemTime);
                                            $timeString .= __(date("a",$itemTime), "hale");
                                        }
                                    }
                                    $item_array[$i]["date"] = $date_prefix.$dateString.$timeString;
                                ?>
                                    <p class="govuk-body-s mojblocks-auto-item-list__date" >
                                        <?php _e(esc_html($item_array[$i]["date"]));?>
                                    </p>
                                <?php } ?>
                            </div>
                        <?php
                            $i++;
                        }
                    } else {
                        _e("<p class='govuk-body'>".esc_html($attribute_box_emptyText)."</p>");
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

function get_date_format($suspected_date) {

    if (empty($suspected_date)) return false;

    switch(!false) {
        // We cycle through formats checking the format
        // Dates are stored as Ymd (e.g. 29th Feb 1980 = 19800229)
        // Datetimess are stored as Y-m-d H:i:s (e.g. 12:34:56 on 29th Feb 1980 = 19800229123456)
        case DateTime::createFromFormat('Y-m-d H:i:s', $suspected_date):
            $format = 'Y-m-d H:i:s';
            $time = true;
            $datetime = DateTime::createFromFormat($format, $suspected_date)->format('YmdHis');
            break;
        case DateTime::createFromFormat('Ymd', $suspected_date):
            $format = 'Ymd';
            $time = false;
            $datetime = DateTime::createFromFormat($format, $suspected_date)->format('Ymd')."000000";
            break;
    }

    $return_array = [];
    $return_array["has_time"] = $time;
    $return_array["datetime"] = $datetime;

    return $return_array;
}
