<?php

/**
 * Card block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_card_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_card_title = $attributes['cardTitle'] ?? '';
    $attribute_card_excerpt = $attributes['cardExcerpt'] ?? '';
    $attribute_card_image_URL = $attributes['cardImageURL'] ?? '';
	$attribute_card_className = $attributes['cardClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_card_className)) ; ?> mojblocks-card" data-src="<?php _e(esc_url_raw($attribute_card_image_URL)); ?>">
		<?php if(!empty($attribute_card_image_URL)) {  ?>
		  <div class="mojblocks-card__image mojblocks-card__image-selected" style="background-image: url(<?php _e(esc_url_raw($attribute_card_image_URL)); ?>)">
		  </div>
		<?php } ?>
      <h2><?php _e(esc_html($attribute_card_title)); ?></h2>
      <p><?php _e(esc_html($attribute_card_excerpt)); ?></p>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
