<?php

/**
 * Hero block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_hero_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_hero_image = $attributes['backgroundImage'] ?? '';
    $attribute_hero_className = $attributes['heroClassName'] ?? '';
    $attribute_hero_image_position = $attributes['heroImagePosition'] ?? 'center';
    $attribute_hero_image_wide = $attributes['heroImageWide'] ?? true;
    $attribute_overlay_background_colour = $attributes['overlayBackgroundColour'] ?? '#fff';
    $attribute_overlay_opacity = $attributes['overlayBackgroundOpacity'] ?? "1";
    $attribute_overlay_position = $attributes['overlayPosition'] ?? "inset";
    $attribute_corners = $attributes['overlayCorners'] ?? "0";
    $attribute_overlay_tilt = $attributes['overlayTilt'] ?? "0";

    if ($attribute_overlay_position != "middle") {
        $attribute_overlay_tilt = "0";
    }

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();
    ?>

    <section class="<?php _e(esc_html($attribute_hero_className)) ; ?> mojblocks-hero <?php if (!$attribute_hero_image_wide) echo 'mojblocks-hero--narrow';?>">
        <div
            class="mojblocks-hero__image"
            style="
                background-image:url('<?php _e(esc_url_raw($attribute_hero_image)); ?>');
                background-position: <?php _e($attribute_hero_image_position); ?>;
            "></div>
        <?php if (trim($content)) { ?>
            <div class="govuk-width-container">
                <div class="govuk-grid-row mojblocks-hero__overlay-container mojblocks-hero__overlay-container--<?php echo esc_html($attribute_overlay_position);?>">
                    <div class="mojblocks-hero__overlay" style="border-radius:<?php echo $attribute_corners;?>px;rotate:<?php echo $attribute_overlay_tilt;?>deg;">
                        <div
                            class="mojblocks-hero__overlay__background"
                            style="<?php echo "background-color:$attribute_overlay_background_colour; opacity:$attribute_overlay_opacity";?>"
                        ></div>
                        <?php _e(esc_html($content)); ?>
                    </div>
                </div>
            </div>
        <?php } ?>
    </section>

<?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
