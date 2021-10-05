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
    $attribute_box_numberItems = $attributes['latestNewsNumber'] ?? 3;
    $attribute_box_hasDate = $attributes['latestNewsHasDate'] ?? 'true';
    $attribute_box_hasImage = $attributes['latestNewsHasImage'] ?? 'true';
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

                if (has_post_thumbnail( $post -> get_the_ID() )) {
                    $image = wp_get_attachment_image_src( get_post_thumbnail_id( )) ;
                }
                $news_array[] = [get_the_title(), get_the_date('d F Y'), get_permalink(get_the_ID()), $image[0] ];
                if (has_post_thumbnail(get_the_ID())) {
                    $news_array[3] = hale_post_thumbnail();                    ;
                };
            }
        } else {
            // no posts found
        }
        /* Restore original Post Data */
        wp_reset_postdata();
/*
        //placeholders TO CHANGE
        $news_array = array(
            array("Capt. Kirk gaoled for splitting infinitive", "1 October", "https://regia.org/wychurst/", ""),
            array("Vikings sail down river", "21 September", "https://regia.org/fleet/fleet.php", "https://regia.org/fleet/images/Pershore2015-HelenBowsteadStallybrass.jpg"), 
            array("Embriodery workshop moves outdoors", "09 September", "https://regia.org/about.php", "https://regia.org/images/about/EmbroideryWychurst2014-MjB.JPG"),
            array("William Longespée, Earl of Salisbury, issues statement", "3 September", "https://regia.org/members/armorial.php", "https://regia.org/members/armorial/EK.png"),
            array("Man digs trench on a weekend", "31 August", "https://regia.org/wychurst/", "https://regia.org/wychurst/images/pic2.jpg")
        );
*/

        if ($attribute_box_hasImage) {
            $hasImage = false;
            for ($j = 0; $j < count($news_array); $j++) {
                if ($news_array[$j][3]) {
                    $hasImage = true;
                    //set placeholder for absent image
                    if ( has_custom_logo() ) {
                        $custom_logo_id = get_theme_mod( 'custom_logo' );
                        $image = wp_get_attachment_image( $custom_logo_id , 'full' );
                    } else {
                        //placeholder TO CHANGE
                        $image = 'https://design-system.service.gov.uk/assets/images/govuk-crest-2x.png';
                    }
                    break;
                }
            }
        }
    ?>

    <div class="mojblocks-latest-news">
        <div class="govuk-width-container">
            <h2><?php _e(esc_html($attribute_box_title)); ?></h2>
            <div class="govuk-grid-row">
                <?php
                    $i = 0;
                    while ($i < count($news_array)) {
                        $articleDate = strtotime($news_array[$i][1]);
                        if (date("Y") == date("Y",$articleDate)) {
                            $dateString = date("j F",$articleDate);
                        } else {
                            $dateString = date("j F Y",$articleDate);
                        }
                        $news_array[$i][1] = $dateString;
                ?>
                        <div class="mojblocks-latest-news__item">
                            <?php if($attribute_box_hasImage && $hasImage) { 
                                $extraClass = "";
                                if ($news_array[$i][3]) {
                                    $thumbnail_image = esc_html($news_array[$i][3]);
                                } else {
                                    $extraClass = "mojblocks-latest-news__image--no-bespoke-image";
                                    $thumbnail_image = $image;
                                }
                                ?>
                                <div class="mojblocks-latest-news__image <?php _e($extraClass);?>" role="img" aria-label="Cover image for article" style="background-image:url('<?php _e($thumbnail_image);?>');">
                                </div>
                            <?php } ?>
                            <div class="mojblocks-latest-news__headline" >
                                <a href="<?php _e(esc_html($news_array[$i][2]));?>"><?php _e(esc_html($news_array[$i][0]));?></a>
                            </div>
                            <?php if ($attribute_box_hasDate) { ?>
                                <div class="mojblocks-latest-news__date" >
                                    <?php _e(esc_html($news_array[$i][1]));?>
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
