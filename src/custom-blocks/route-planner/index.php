<?php

/**
 * Route planner block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_route_planner_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_route_destination = trim(str_replace("\n",", ",$attributes['routeDestination'])) ?? '';
    $attribute_route_method = $attributes['routeMethod'] ?? 'driving';
    $attribute_class_name = $attributes['className'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    if ($attribute_route_destination != '') {
        // only show block if destination set
    ?>

        <label class="govuk-label" for="postcodeInput"><?php _e("Enter a postcode or location","hale"); ?></label>
        <div id="postcodeInput-hint" class="govuk-hint">
        <?php _e("For example, SW1A 1AA","hale"); ?>
        </div>
        <input class="govuk-input govuk-input--width-10 govuk-!-margin-bottom-4" type="text" id="postcodeInput" aria-describedby="postcodeInput-hint"/><br />
        <button class="govuk-button" onclick="redirectToMap()"><?php _e("Submit","hale"); ?></button>

        <script>
            function redirectToMap() {
                const postcode = document.getElementById("postcodeInput").value.trim();
                if (!postcode) {
                alert("Please enter a valid UK postcode.");
                return;
                }

                const origin = encodeURIComponent(postcode);
                const destination = encodeURIComponent("<?php echo esc_html($attribute_route_destination); ?>"); // your fixed location

                const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=<?php echo esc_html($attribute_route_method); ?>`;

                window.location.href = url;
            }
        </script>

    <?php
    }

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
