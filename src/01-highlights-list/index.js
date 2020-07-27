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
            source: 'html',
            selector: '.mojblocks-highlights-list__heading-text'
        },
        listText: {
            type: 'array',
            source: 'children',
            multiline: 'li',
            selector: '.mojblocks-highlights-list__content > ul'
        }
    },

    edit: props => {
        let {
            attributes: {
                listTitle,
                listText
            },
            className,
            setAttributes
        } = props;

        // Grab newListTitle, set the value of listTitle to newListTitle.
        let onChangeListTitle = newListTitle => {
            setAttributes({ listTitle: newListTitle });
        };

        // Grab newListText, set the value of listText to newListText.
        let onChangeListText = newListText => {
            setAttributes({ listText: newListText });
        };

        // add a class to li
        let onChangeListTextSetClass = newListText => {
            setAttributes({ listText: newListText });
        };

        return (
            <div className={`${className}`}>
                <div className="mojblocks-highlights-list__heading-container">
                    <h3 className="mojblocks-highlights-list__heading">
				  <span role="text">
					<span className="mojblocks-highlights-list__heading-text">
					  <RichText
                          placeholder={__('Highlights title', 'mojblocks')}
                          value={listTitle}
                          onChange={onChangeListTitle}
                      />
					</span>
				  </span>
                    </h3>
                </div>
                <div className={'mojblocks-highlights-list__content'}>
                    <RichText
                        tagName='ul'
                        multiline='li'
                        placeholder={__('Highlights item', 'mojblocks')}
                        onChange={onChangeListText}
                        value={listText}
                    />
                </div>
            </div>
        );
    },

    save: props => {
        let {
            attributes: {
                listTitle,
                listText
            }
        } = props;

        return (
            <div className="mojblocks-grid-column-width mojblocks-highlights-list--type">
                <div className="mojblocks-highlights-list__heading-container">
                    <h3 className="mojblocks-highlights-list__heading">
				 <span role="text">
					<span className="mojblocks-highlights-list__heading-text">
						<RichText.Content value={listTitle}/>
					</span>
				  </span>
                    </h3>
                </div>
                <div className={'mojblocks-highlights-list__content'}>
                    <RichText.Content
                        tagName='ul'
                        multiline='li'
                        value={listText}
                    />
                </div>
            </div>
        );
    }
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
