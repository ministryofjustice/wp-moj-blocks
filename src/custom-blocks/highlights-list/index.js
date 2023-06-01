/**
 * Highlights List
 * A stylised list displaying bullet points and a title
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

registerBlockType('mojblocks/highlights-list', {
    title: __('Highlights List', 'mojblocks'),
    icon: 'list-view',
    category: 'mojblocks',
    example: {
        attributes: {
            listTitle: 'This is a highlights list title',
            listItems: 'This is a list item',
            flushBottom: false
        },
    },
    attributes: {
        listTitle: {
            type: 'string',
        },
        listItems: {
            type: 'string', //sting due to key error issue with array
        },
        flushBottom: {
            type: 'boolean'
        },
        listClassName: {
            type: 'string'
        }
    },

    edit: props => {
        const {
            attributes: {
                listTitle,
                listItems,
                flushBottom
            },
            className,
            setAttributes
        } = props;

        setAttributes({ listClassName: className });

        // Grab newListTitle, set the value of listTitle to newListTitle.
        const onChangeListTitle = newListTitle => {
            setAttributes({ listTitle: newListTitle });
        };

        // Grab newListItems, set the value of listItems to newListItems.
        const onChangeListItems = newListItems => {
            setAttributes({ listItems: newListItems });
        };

        return (
            <div className={`${className}  mojblocks-highlights-list`}>
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

