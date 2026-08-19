/**
 * LAA Chatbot
 * Embeds the LAA 8x8 web chat button
 *
 * Block metadata — name, title, icon, category, attributes — lives in block.json
 * and is registered server-side from mojblocks.php. This file only supplies the
 * editor behaviour.
 *
 * The chatbotClassName attribute in block.json is legacy: older chatbots
 * persisted the editor's generated className there so the PHP could read it
 * back. apiVersion 3 no longer passes className to edit(), and the render
 * callback now uses get_block_wrapper_attributes(), so nothing reads or writes
 * it. It stays registered only so it isn't stripped from content saved before
 * that change.
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

import metadata from './block.json';

registerBlockType(metadata.name, {

    edit: () => {

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        //
        // mojblocks-laa-chatbot is an editor-only marker — it has no styles, and
        // the frontend wrapper has never carried it.
        const blockProps = useBlockProps({ className: 'mojblocks-laa-chatbot' });

        return (
            <div { ...blockProps }>
                <p>LAA 8x8 Chatbot</p>
            </div>
        );
    },
    // return null as frontend output is done via PHP
    save: () => null
});
