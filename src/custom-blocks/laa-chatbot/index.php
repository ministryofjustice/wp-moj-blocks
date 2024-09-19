<?php

/**
 * LAA Chatbot block
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

    $uuid_code = "script_51621790560365ddc0e8ac6.80171075";
    $id_code = "__8x8-chat-button-container-$uuid_code";

    ?>

    <div class = "<?php echo $attribute_chatbot_className ?>" id="<?php echo $id_code; ?>"></div>

    <script type="text/javascript">
        window.__8x8Chat = {
            uuid: "<?php echo $uuid_code; ?>",
            tenant: "bGVnYWxhaWRhZ2VuY3lsYWEwMQ",
            channel: "LAA Web Chat",
            domain: "https://vcc-eu9b.8x8.com",
            path: "/.",
            buttonContainerId: "<?php echo $id_code; ?>",
            align: "right"
        };

        if (typeof observer === 'undefined') {
            const observer = new MutationObserver(() => {
                // Add in accessibility stuff to button
                document.getElementById("<?php echo $id_code; ?>").querySelector("a").setAttribute("role","button");
                document.getElementById("<?php echo $id_code; ?>").querySelector("a").setAttribute("aria-label","Start chat");
                document.getElementById("<?php echo $id_code; ?>").querySelector("img").setAttribute("alt","Start chat");

            });

            // call `observe()`, passing it the element to observe, and the options object
            observer.observe(document.getElementById("<?php echo $id_code; ?>"), {
                subtree: true,
                childList: true,
            });
        }

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
