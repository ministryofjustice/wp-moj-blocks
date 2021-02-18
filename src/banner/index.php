<?php

/**
 * Banner block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_banner_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_banner_title = $attributes['bannerTitle'] ?? '';
	$attribute_button_link = $attributes['buttonLink'] ?? '';
	$attribute_button_label = $attributes['buttonLabel'] ?? '';
    $attribute_banner_className = $attributes['bannerClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class="<?php _e(esc_html($attribute_banner_className)) ; ?> mojblocks-banner">
		<div class="govuk-width-container">
			<div class="govuk-grid-row">
				<div class="govuk-grid-column-two-thirds">
					<h1 class="mojblocks-banner__title">
					<?php _e(esc_html($attribute_banner_title)); ?>
					</h1>
				</div>
				<div class="govuk-grid-column-one-third">
					<a href="<?php _e($attribute_button_link); ?>" class="mojblocks-banner__button">
						<?php _e(esc_html($attribute_button_label)); ?>
					</a>
				</div>
			</div>
		</div>
    </div>

    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
