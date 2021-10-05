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
    $attribute_box_content = $attributes['latestNewsHeadline'] ?? '';
    $attribute_box_numberItems = $attributes['latestNewsNumber'] ?? 3;
    $attribute_box_hasDate = $attributes['latestNewsHasDate'] ?? 'true';
    $attribute_box_expiryWeeks = $attributes['latestNewsExpiry'] ?? 0;

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <?php

        if ($attribute_box_expiryWeeks && is_numeric($attribute_box_expiryWeeks)) {
            $expiryDateDays = -7*$attribute_box_expiryWeeks;
            $expiryDate = strtotime($expiryDateDays." day", strtotime("now"));
        }
        // The Query
        $query = new WP_Query( array( 'post_type' => 'news' ) );

        // The Loop
        $news_array = array();
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                if (count($news_array) > $attribute_box_numberItems) break;
                if ($attribute_box_expiryWeeks && strtotime(get_the_date()) < $expiryDate) break;

                $news_array[] = [
                    "title" => get_the_title(),
                    "date" => get_the_date('d F Y'),
                    "link" => get_permalink(get_the_ID()),
                ];
            }
        } else {
            // no posts found
        }
        /* Restore original Post Data */
        wp_reset_postdata();
    ?>

    <div class="mojblocks-latest-news">
        <div class="govuk-width-container">
            <h2 class="govuk-heading-m mojblocks-latest-news__title"><?php _e(esc_html($attribute_box_title)); ?></h2>
            <div class="govuk-grid-row">
                <?php
                    $i = 0;
                    while ($i < count($news_array)) {
                        $articleDate = strtotime($news_array[$i]["date"]);
                        if (date("Y") == date("Y",$articleDate)) {
                            $dateString = date("j F",$articleDate);
                        } else {
                            $dateString = date("j F Y",$articleDate);
                        }
                        $news_array[$i]["date"] = $dateString;
                ?>
                        <div class="mojblocks-latest-news__item">
                            <div class="govuk-body mojblocks-latest-news__headline" >
                                <a href="<?php _e(esc_html($news_array[$i]["link"]));?>"><?php _e(esc_html($news_array[$i]["title"]));?></a>
                            </div>
                            <?php if ($attribute_box_hasDate) { ?>
                                <div class="mojblocks-latest-news__date" >
                                    <?php _e(esc_html($news_array[$i]["date"]));?>
                                </div>
                            <?php } ?>
                        </div>
                    <?php
                        $i++;
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
