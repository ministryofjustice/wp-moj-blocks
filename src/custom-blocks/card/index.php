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
    $attribute_card_image_URL = $attributes['cardImageURL'] ?? '';
    $attribute_card_className = $attributes['cardClassName'] ?? 'wp-block-mojblocks-card';
	$attribute_card_excerpt = $attributes['cardExcerpt'] ?? '';
	$attribute_card_image_shape = $attributes['cardImageShape'] ?? '75'; //as percentage of width
	$attribute_card_image_position = $attributes['cardImagePosition'] ?? 'center';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_card_className)) ; ?> mojblocks-card" data-src="<?php _e(esc_url_raw($attribute_card_image_URL)); ?>">

		<?php if (!empty($attribute_card_image_URL)) {  ?>
			<div
				class="mojblocks-card__image mojblocks-card__image-selected mojblocks-card__image--shape-<?php _e(esc_html($attribute_card_image_shape)); ?>"
				style="
					background-image: url(<?php _e(esc_url_raw($attribute_card_image_URL)); ?>);
					background-position: <?php _e(esc_html($attribute_card_image_position)); ?>;
				"
			>
			</div>

		<?php

		}

		// Revert to use old data if content is empty
		if (empty(trim($content))) {

			$attribute_card_title = $attributes['cardTitle'] ?? '';

			echo '<h2>';
			_e(esc_html($attribute_card_title));
			echo '</h2>';

			echo '<p>';
			_e(esc_html($attribute_card_excerpt));
			echo '</p>';

		} else {

			// Content generated by innerblocks
			echo $content;

			// Custom block attributes
			echo '<p>';
			_e(esc_html($attribute_card_excerpt));
			echo '</p>';
		}

		?>

	</div>

	<?php
    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // decode escaped html so users can add markup to content
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
