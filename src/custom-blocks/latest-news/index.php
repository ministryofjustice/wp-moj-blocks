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
    $attribute_box_numberItems = $attributes['latestNewsNumber'] ?? 3;
    $attribute_box_hasDate = $attributes['latestNewsHasDate'] ?? 'true';
    $attribute_box_expiryWeeks = $attributes['latestNewsExpiry'] ?? 0;
    $attribute_box_emptyText = $attributes['latestNewsEmptyText'] ?? 'No news to display.';
    $attribute_box_className = $attributes['latestNewsClassName'] ?? '';

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
        $query = new WP_Query( array( 'post_type' => 'news', 'posts_per_page' => 5 ) ); //only 3 are used, pulling through 5 gives 2 extra in case one is corrupted somehow

        // The Loop
        $news_array = array();
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                if (count($news_array) >= $attribute_box_numberItems) break;
                if ($attribute_box_expiryWeeks && strtotime(get_the_date()) < $expiryDate) break;

                if (!get_the_title() || !get_the_date() || !get_permalink(get_the_ID())) continue; //in case any of the required items is missing, we skip this entry
                
                $news_array[] = [
                    "title" => get_the_title(),
                    "date" => get_the_date('d F Y'),
                    "link" => get_permalink(get_the_ID()),
                ];
            }
        }
        // Restore original Post Data
        wp_reset_postdata();
    ?>

    <div class="<?php _e(esc_html($attribute_box_className)); ?> mojblocks-latest-news">
        <div class="govuk-width-container">
            <?php
        		// Content generated by innerblocks
			    echo $content;
            ?>
            <div class="govuk-grid-row">
                <?php
                    $i = 0;
                    if (count($news_array)) {
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
