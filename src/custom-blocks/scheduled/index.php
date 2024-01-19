<?php

/**
 * Schedule block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_scheduled_block($attributes, $content) {
    $triggerDate = $attributes['controlTriggerDate'] ?? false;
    if ($attributes['controlShowOrHide']) {
        $triggerAction = "show";
    } else {
        $triggerAction = "hide";
    }
    
    $now = date("YmdHi");
    $trigger = date("YmdHi",
        mktime(
            date_parse($triggerDate)["hour"],
            date_parse($triggerDate)["minute"],
            0,
            date_parse($triggerDate)["month"],
            date_parse($triggerDate)["day"],
            date_parse($triggerDate)["year"],
        )       
    );

    $scheduledClassName = $attributes['scheduledClassName'] ?? "";

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();


    if (
        ($triggerAction == "show" && $trigger <= $now)
        ||
        ($triggerAction == "hide" && $trigger > $now)
    ) {
    ?>

    <div class="scheduled-block <?php echo $scheduledClassName; ?>">

        <?php echo $content; ?>

    </div>

    <?php
    
    } else {

        /*
        For testing
    ?>

    <div>
        Hidden block <br />
        <?php echo $now; ?> <br />
        <?php echo $trigger; ?> <br />
        <?php echo $triggerAction; ?> <br />
        <?php echo $attributes['controlTriggerDate']; ?> <br />
       
    </div>
    
    <?php
    */
    }

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
