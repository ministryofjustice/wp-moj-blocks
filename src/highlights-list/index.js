/**
 * Highlights List
 * A stylised list displaying bullet points and a title
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType, registerBlockStyle } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('mojblocks/highlights-list', {
    title: __('Highlights List', 'mojblocks'),
    icon: 'list-view',
    category: 'mojblocks',
    example: {
        attributes: {
            listTitle: 'This is a highlights list title',
            listText: 'This is a list item',
        },
    },
    attributes: {
        listTitle: {
            type: 'string',
        },
        listItems: {
            type: 'string',
        },
        listClassName: {
            type: 'string'
        }
    },

    edit: props => {
        const {
            attributes: {
                listTitle,
                listItems
            },
            className,
            setAttributes
        } = props;

        setAttributes({ listClassName: className });

        // Grab newListTitle, set the value of listTitle to newListTitle.
        const onChangeListTitle = newListTitle => {
            setAttributes({ listTitle: newListTitle });
        };

        // Grab newListText, set the value of listText to newListText.
        const onChangeListItems = newListItems => {
            setAttributes({ listItems: newListItems });
        };

        return (
            <div className={`${className}`}>
                <div className={'govuk-width-container'}>
                    <div className={'govuk-grid-row'}>
                        <div className="mojblocks-highlights-list__heading-container">
                            <h2 className="mojblocks-highlights-list__heading">
                                <span role="text">
                                    <span className="mojblocks-highlights-list__heading-text">
                                        <RichText
                                            placeholder={__('Highlights title', 'mojblocks')}
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
                                placeholder={__('Highlights item', 'mojblocks')}
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

// style variations
registerBlockStyle('mojblocks/highlights-list',
    {
        name: 'moj-blue',
        label: 'MoJ Blue',
        isDefault: true,
    }
);
registerBlockStyle('mojblocks/highlights-list',
    {
        name: 'judicial-teal',
        label: 'Judicial Teal',
    }
);
