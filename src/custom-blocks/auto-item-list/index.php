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
    $attribute_box_hasDate = $attributes['listHasDate'] ?? true;
    $attribute_box_hasSummary = $attributes['listHasSummary'] ?? false;
    $attribute_box_emptyText = $attributes['listEmptyText'] ?? 'No items to display.';
    $attribute_box_className = $attributes['listClassName'] ?? '';
    $attribute_box_listPostType = $attributes['listItemType'] ?? '';
    $attribute_box_listTaxonomy = $attributes['listTaxonomy'] ?? '';
    $attribute_box_listTaxonomyOptions = $attributes['listTaxonomyOptions'] ?? [];
    $attribute_box_listTaxonomyValue = $attributes['listTaxonomyValueArray'] ?? [];
    $attribute_box_listImage = $attributes['listImage'] ?? false;
    $attribute_box_listBackupImage = $attributes['listBackupImage'] ?? '';
    $attribute_box_listBackgroundColourClass = $attributes['backgroundColourClass'] ?? '';
    $attribute_box_listTextColourClass = $attributes['textColourClass'] ?? '';
    $attribute_box_listBorderColour = $attributes['borderColour'] ?? '';

    $has_image_class = $text_colour_class = $background_colour_class = $border_style = $border_class = "";

    // Ensure that we are dealing with an array even if the JS file returns a string.
    if (is_array($attribute_box_listTaxonomyValue)) {
        $attribute_box_listTaxonomyValueArray = $attribute_box_listTaxonomyValue;
    } else {
        $attribute_box_listTaxonomyValueArray = [$attribute_box_listTaxonomyValue];
    }

    /**
     * Catch for:
     * - No tax options selected
     *   This can happen if the block is added, taxonomy selected, but no tax option is chosen.
     * - Tax option (we only check the first) isn't in the list of options
     *   This can happen if the taxonomy is changed but no tax option is chosen for the new taxonomy.
     * In both situations, we treat all viable options for the selected taxonomy as chosen.
     */
    if (
        empty($attribute_box_listTaxonomyValueArray) ||
        !in_array($attribute_box_listTaxonomyValueArray[0],$attribute_box_listTaxonomyOptions)
    ) {
        $attribute_box_listTaxonomyValueArray = $attribute_box_listTaxonomyOptions;
    }

    if (
        !$attribute_box_hasDate && !$attribute_box_hasSummary && !$attribute_box_listImage //only headline in items
        &&
        !$attribute_box_listBorderColour && !$attribute_box_listBackgroundColourClass //no border or shading selected
    ) {
        $border_class = "is-bordered"; //add a grey border to the items
    }

    if ($attribute_box_listBackgroundColourClass) {
        $background_colour_class = $attribute_box_listBackgroundColourClass . " has-background";
    }
    if ($attribute_box_listTextColourClass) {
        $text_colour_class = $attribute_box_listTextColourClass . " has-text-color";
    }
    if ($attribute_box_listBorderColour) {
        $border_style = "border-color: $attribute_box_listBorderColour";
        $border_class = "is-bordered";
    }


    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <?php

        $post_type_obj = get_post_type_object( $attribute_box_listPostType );

        if(!empty($post_type_obj)){
            // The Query
            $args = array(
                'post_type' => $attribute_box_listPostType,
                'posts_per_page' => -1
            );
            if ($attribute_box_listTaxonomy != "" && taxonomy_exists($attribute_box_listTaxonomy)) {
                $args['tax_query'] = array(
                    array(
                        'taxonomy' => $attribute_box_listTaxonomy,
                        'field' => 'term_id',
                        'terms' => $attribute_box_listTaxonomyValueArray,
                    ),
                );
            }
            $query = new WP_Query( $args );

            // The Loop
            $item_array = array();
            if ( $query->have_posts() ) {
                while ( $query->have_posts() ) {
                    $query->the_post();
                    
                    $date_to_use = get_the_date("Ymd");
                    $link = '';
            
                    if (!get_the_title() || !$date_to_use) continue; //in case any of the required items is missing, we skip this entry
                    
                    if($post_type_obj->publicly_queryable){
                        $link = get_permalink(get_the_ID());
                    }

                    $link = apply_filters( 'mojblocks_item_list_link', $link, get_the_ID());

                    $relevant_taxonomy_value = false;
                    if ($attribute_box_listTaxonomy != "" && taxonomy_exists($attribute_box_listTaxonomy)) {
                        //If taxonomy to scrutinize is specified
                        $relevant_taxonomy_array = get_the_terms(get_the_ID(),$attribute_box_listTaxonomy);
                        if(is_array($relevant_taxonomy_array)) $relevant_taxonomy_value = $relevant_taxonomy_array[0]->term_id;
                    }

                    $item_array[] = [
                        "id" => get_the_ID(),
                        "title" => get_the_title(),
                        "summary" => $attribute_box_hasSummary ? get_post_meta( get_the_ID(), 'post_summary', TRUE ) : "",
                        "date" => $date_to_use,
                        "link" => $link,
                        "relevantTaxonomyValue" => $relevant_taxonomy_value
                    ];
                    
                }
            }
            // Restore original Post Data
            wp_reset_postdata();  
            //if taxonomy set, we make sure the items which don't match are removed from the array
            if (
                $attribute_box_listTaxonomyValueArray != $attribute_box_listTaxonomyOptions // check that all options are not chosen
                &&
                $attribute_box_listTaxonomy != "" // taxonomy not set to "show all"
            ) {
                foreach($item_array as $k => $item) {
                    if ($item_array[$k]["relevantTaxonomyValue"] && !in_array($item_array[$k]["relevantTaxonomyValue"],$attribute_box_listTaxonomyValueArray)) {
                        //Remove items which don't have a correct taxonomy value
                        unset($item_array[$k]);
                        continue;
                    } elseif (!$item_array[$k]["relevantTaxonomyValue"]) {
                        //Remove items without this taxonomy value set
                        unset($item_array[$k]);
                        continue;
                    }
                }
                $item_array = array_values($item_array); //re-index
            }

            $number_of_items = count($item_array);
            $max_number_of_items = 3;
            $few_items_class = "";
            $image_size = "medium";
            if ($number_of_items < $max_number_of_items) {
                $few_items_class = " mojblocks-auto-item-list__item--$number_of_items";
            }
    ?>

    <div class="<?php _e(esc_html($attribute_box_className)); ?> mojblocks-auto-item-list">
        <?php
            $i = 0;
            if ($number_of_items) {
                if ($attribute_box_listImage) {
                    //If images are enabled, we need to check whether all/any items have images
                    $all_items_have_images = true; // assume all have images
                    $one_items_has_image = false; // assume none have an image
                    for ($j=0; $j < $number_of_items && $j < $max_number_of_items; $j++) {
                        // check that all items have an image
                        $id = $item_array[$j]['id'];
                        if (!has_post_thumbnail($id)) {
                            $all_items_have_images = false;
                        } else {
                            $one_items_has_image = true;
                            $has_image_class = "has-image";
                        }
                    }
                }
                while ($i < $number_of_items && $i < $max_number_of_items) {
                    $id           = $item_array[$i]["id"];
                    $backup_image = !empty($attribute_box_listBackupImage) ? $attribute_box_listBackupImage : "";
                    $image        = has_post_thumbnail($id) ? wp_get_attachment_image_src(get_post_thumbnail_id($id),$image_size)[0] : $backup_image;
                    $title        = __(esc_html($item_array[$i]["title"]),"hale");
                    $summary      = __(esc_html($item_array[$i]["summary"]),"hale");
                    $date         = $attribute_box_hasDate ? date(get_option("date_format"), strtotime($item_array[$i]["date"])) : "";
                    $url          = esc_url($item_array[$i]["link"]);

                    $image_class = "mojblocks-auto-item-list__image";
                    $image_innards = $image_style = "";
                    if ($image == "") {
                        $image_class .= " mojblocks-auto-item-list__image--no-image";
                        $image_innards = '
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H19V5H5V19ZM6 17H18L14.25 12L11.25 16L9 13L6 17Z"></path>
                        </svg>';
                    } else {
                        $image_style = "background-image:url('$image')";
                        $image_innards = "<span role='img' aria-label='Cover image for $title'></span>";
                    }

        ?>
                    <div
                        id="<?php echo esc_attr("item-$id"); ?>"
                        style="<?php echo $border_style;?>"
                        class="mojblocks-auto-item-list__item <?php echo $few_items_class." ".$has_image_class." ".$background_colour_class." ".$text_colour_class." ".$border_class;?>"
                    >
                        <?php if ($attribute_box_listImage && $one_items_has_image) {
                            if(!empty($link)) echo "<a class='mojblocks-auto-item-list__image-link' href='$url' tabindex='-1'>";
                                echo "
                                    <div class='$image_class' style=\"$image_style\">
                                        $image_innards
                                    </div>
                                ";
                            if(!empty($link)) echo "</a>";
                        }
                        ?>
                        <div class="mojblocks-auto-item-list__content">
                            <div class="mojblocks-auto-item-list__title-and-summary">
                                <p class="mojblocks-auto-item-list__headline" >
                                    <?php
                                    //Some post types dont have a single view
                                    if(empty($link)) {
                                        echo $title;
                                    } else {
                                        echo "<a href='$url'>$title</a>";
                                    }
                                    ?>
                                </p>
                                <?php if ($attribute_box_hasSummary) {?>
                                    <p class="mojblocks-auto-item-list__summary" >
                                        <?php echo $summary; ?>
                                    </p>
                                <?php } ?>
                            </div>
                            <?php if ($attribute_box_hasDate) { ?>
                                <p class="mojblocks-auto-item-list__date" >
                                    <?php echo $date;?>
                                </p>
                            <?php } ?>
                        </div>
                    </div>
                <?php
                    $i++;
                }
            } else {
                echo "<p class='govuk-body'>".__(esc_html($attribute_box_emptyText),"hale")."</p>";
            }
        ?>
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