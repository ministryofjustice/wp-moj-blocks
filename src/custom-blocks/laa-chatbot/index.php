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

    // Wrapper attributes.
    //
    // get_block_wrapper_attributes() is the PHP counterpart to useBlockProps()
    // in edit(). It emits the generated wp-block-mojblocks-laa-chatbot class and
    // the user's custom classes, which WordPress persists in `className`.
    //
    // No extra class is passed: the editor's mojblocks-laa-chatbot marker has no
    // styles and has never been on the frontend wrapper.
    //
    // The legacy chatbotClassName attribute is deliberately not read: custom
    // classes have always been saved separately in `className`, so nothing is
    // lost for chatbots saved before the apiVersion 3 upgrade.
    $chatbot_wrapper_attributes = get_block_wrapper_attributes();

    // Turn on buffering so we can collect all the html markup below and load it via the return
    // This is an alternative method to using sprintf(). By using buffering you can write your
    // code below as you would in any other PHP file rather then having to use the sprintf() syntax
    ob_start();

    $uuid_code = "script_51621790560365ddc0e8ac6.80171075";
    $id_code = "__8x8-chat-button-container-$uuid_code";

    ?>

    <div <?php echo $chatbot_wrapper_attributes; ?> id="<?php echo esc_attr($id_code); ?>"></div>

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
