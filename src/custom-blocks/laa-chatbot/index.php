<?php

/**
 * Intro block
 * Frontend PHP code
 *
 * Uses WordPress' dynamic block method
 * https://developer.wordpress.org/block-editor/tutorials/block-tutorial/creating-dynamic-blocks/
 *
 * @package mojblocks
 *
 */

function render_callback_laa_chatbot_block($attributes, $content)
{

    // Parse attributes found in index.js
    $attribute_chatbot_className = $attributes['chatbotClassName'] ?? '';

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    ?>

    <div class = "<?php echo $attribute_chatbot_className ?>" id="__8x8-chat-button-container-script_51621790560365ddc0e8ac6.80171075"></div>

    <script type="text/javascript">
        window.__8x8Chat = {
            uuid: "script_51621790560365ddc0e8ac6.80171075",
            tenant: "bGVnYWxhaWRhZ2VuY3lsYWEwMQ",
            channel: "LAA Web Chat",
            domain: "https://vcc-eu9b.8x8.com",
            path: "/.",
            buttonContainerId: "__8x8-chat-button-container-script_51621790560365ddc0e8ac6.80171075",
            align: "right"
        };

        (function() {
            var se = document.createElement("script");
            se.type = "text/javascript";
            se.async = true;
            se.src = window.__8x8Chat.domain + window.__8x8Chat.path + "/CHAT/common/js/chat.js";

            var os = document.getElementsByTagName("script")[0];
            os.parentNode.insertBefore(se, os);
        })();
    </script>
    <?php

    // Get all the html/content that has been captured in the buffer and output via return
    $output = ob_get_contents();

    // Decode the output in case editors want to add in hyperlinks or other markup
    $output = html_entity_decode($output);

    ob_end_clean();

    return $output;
}
