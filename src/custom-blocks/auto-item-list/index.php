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
    $attribute_box_emptyText = $attributes['listEmptyText'] ?? 'No items to display.';
    $attribute_box_className = $attributes['listClassName'] ?? '';
    $attribute_box_listPostType = $attributes['listItemType'] ?? '';
    $attribute_box_listTaxonomy = $attributes['listTaxonomy'] ?? '';
    $attribute_box_listTaxonomyOptions = $attributes['listTaxonomyOptions'] ?? [];
    $attribute_box_listTaxonomyValueArray = $attributes['listTaxonomyValueArray'] ?? [];
    $attribute_box_listImage = $attributes['listImage'] ?? false;
    $attribute_box_listBackupImage = $attributes['listBackupImage'] ?? '';

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
                'post_per_page' => -1
            );
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
                !empty($attribute_box_listTaxonomyValueArray) // at least one value in array of tax values
                &&
                in_array($attribute_box_listTaxonomyValueArray[0], $attribute_box_listTaxonomyOptions) //the first selected value is in the array for this taxonomy (if it isn't, the previously selected taxonomy's values might still be being used, so we treat as show all)
                &&
                $attribute_box_listTaxonomy !="" // taxonomy not set to "show all"
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
                        }
                    }
                }
                while ($i < $number_of_items && $i < $max_number_of_items) {
                    $id           = $item_array[$i]["id"];
                    $backup_image = !empty($attribute_box_listBackupImage) ? $attribute_box_listBackupImage : "";
                    $image        = has_post_thumbnail($id) ? wp_get_attachment_image_src(get_post_thumbnail_id($id))[0] : $backup_image;
                    $title        = __(esc_html($item_array[$i]["title"]),"hale");
                    $date         = $attribute_box_hasDate ? date(get_option("date_format"), strtotime($item_array[$i]["date"])) : "";
                    $url          = esc_html($item_array[$i]["link"]);

        ?>
                    <div id="item-<?php echo $id;?>" class="mojblocks-auto-item-list__item <?php echo $few_items_class;?>">
                        <?php if ($attribute_box_listImage && $one_items_has_image) { ?>
                            <div class="mojblocks-auto-item-list__image" style="background-image:url('<?php echo $image; ?>')">
                                <span role="img" aria-label="Cover image for <?php echo $title;?>"></span>
                            </div>
                        <?php } ?>
                        <div class="mojblocks-auto-item-list__content">
                            <p class="govuk-body mojblocks-auto-item-list__headline" >
                                <?php 
                                //Some post types dont have a single view
                                if(empty($link)) {
                                    echo $title;
                                } else {
                                    echo "<a href='$url'>$title</a>";
                                }
                                ?>
                            </p>
                            <?php if ($attribute_box_hasDate) { ?>
                                <p class="govuk-body-s mojblocks-auto-item-list__date" >
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