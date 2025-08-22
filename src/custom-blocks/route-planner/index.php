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
    $attribute_route_method = $attributes['routeMethod'] ?? '';
    $attribute_class_name = $attributes['className'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    if ($attribute_route_destination != '') {
        // only show block if destination set
        $rand_num = rand();
    ?>
        <form class="<?php _e(esc_html($attribute_class_name)); ?> mojblocks-route-planner">
            <label class="govuk-label" for="<?php echo $rand_num;?>-postcodeInput"><?php _e("Enter a postcode or location","hale"); ?></label>
            <div id="<?php echo $rand_num;?>-postcodeInput-hint" class="govuk-hint">
            <?php _e("For example, SW1A 1AA","hale"); ?>
            </div>
            <p id="<?php echo $rand_num;?>-postcodeInput-error" class="govuk-error-message" style="display:none;" aria-live="polite">
                <span class="govuk-visually-hidden">Error:</span> Enter a postcode or address.
            </p>
            <input class="govuk-input govuk-input--width-10 govuk-!-margin-bottom-4" type="text" id="<?php echo $rand_num;?>-postcodeInput" aria-describedby="<?php echo $rand_num;?>-postcodeInput-hint"/><br />
            <button class="govuk-button" onclick="redirectToMap<?php echo $rand_num;?>(event)"><?php _e("Submit","hale"); ?></button>
        </form>
        <script>
            function redirectToMap<?php echo $rand_num;?>(e) {
                e.preventDefault();
                const postcode = document.getElementById("<?php echo $rand_num;?>-postcodeInput").value.trim();
                if (!postcode) {
                    document.getElementById("<?php echo $rand_num;?>-postcodeInput-error").style.display = "block";
                    document.getElementById("<?php echo $rand_num;?>-postcodeInput").classList.add("govuk-input--error");
                    return;
                }
                document.getElementById("<?php echo $rand_num;?>-postcodeInput-error").style.display = "none";
                document.getElementById("<?php echo $rand_num;?>-postcodeInput").classList.remove("govuk-input--error");

                const origin = encodeURIComponent(postcode);
                const destination = encodeURIComponent("<?php echo esc_html($attribute_route_destination); ?>"); // your fixed location

                const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=<?php echo esc_html($attribute_route_method); ?>`;

                window.open(url, '_blank').focus();
            }
        </script>

    <?php
    }

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
