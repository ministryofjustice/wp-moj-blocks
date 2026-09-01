/**
 * Highlights List
 * A stylised list displaying bullet points and a title
 *
 * Block metadata — name, title, icon, category, attributes, example — lives in
 * block.json and is registered server-side from mojblocks.php. This file only
 * supplies the editor behaviour.
 *
 * The listClassName attribute in block.json is legacy: older lists persisted the
 * editor's generated className there so the PHP could read it back. apiVersion 3
 * no longer passes className to edit(), and the render callback now uses
 * get_block_wrapper_attributes(), so nothing reads or writes it. It stays
 * registered only so it isn't stripped from content saved before that change.
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow, ToggleControl } from '@wordpress/components';

import metadata from './block.json';

registerBlockType(metadata.name, {

    edit: props => {
        const {
            attributes: {
                listTitle,
                listItems,
                flushBottom
            },
            setAttributes
        } = props;

        // apiVersion 3: the wrapper element must carry the props returned by
        // useBlockProps. className is no longer passed to edit() as a prop.
        const blockProps = useBlockProps({ className: 'mojblocks-highlights-list' });

        // Grab newListTitle, set the value of listTitle to newListTitle.
        const onChangeListTitle = newListTitle => {
            setAttributes({ listTitle: newListTitle });
        };

        // Grab newListItems, set the value of listItems to newListItems.
        const onChangeListItems = newListItems => {
            setAttributes({ listItems: newListItems });
        };

        return (
            <div { ...blockProps }>
                <InspectorControls>
                    <PanelBody
                            title="Bottom Margin"
                            initialOpen={false}
                    >
                        <PanelRow>
                            <ToggleControl
                                label="Flush bottom"
                                help={
                                    flushBottom
                                        ? 'Gap removed from beneath this block'
                                        : 'Normal gap beneath this block'
                                }
                                checked={flushBottom}
                                onChange={newFlushBottom => setAttributes({ flushBottom: newFlushBottom }) }
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="mojblocks-highlights-list__heading-container">
                            <h2 className="mojblocks-highlights-list__heading">
                                <span role="text">
                                    <span className="mojblocks-highlights-list__heading-text">
                                        <RichText
                                            placeholder={__('Add highlights title', 'mojblocks')}
                                            keepPlaceholderOnFocus
                                            value={listTitle}
                                            onChange={onChangeListTitle}
                                        />
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <div className={'mojblocks-highlights-list__content'}>
                            <RichText
                                tagName='ul'
                                multiline='li'
                                placeholder={__('Add list item', 'mojblocks')}
                                keepPlaceholderOnFocus
                                onChange={onChangeListItems}
                                value={listItems}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    save: () => null
});

