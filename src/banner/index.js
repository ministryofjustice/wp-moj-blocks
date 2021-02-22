import {URLInputButton} from "@wordpress/block-editor";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {  RichText } = wp.blockEditor;

registerBlockType("mojblocks/banner", {
    title: __("Banner", "mojblocks"),
    description: __("Banner with title and button", "mojblocks"),
    category: "mojblocks",
    icon: "schedule",
    attributes: {
        bannerTitle: {
            type: 'string'
        },
        buttonLink: {
            type: 'string'
        },
        buttonLabel: {
            type: 'string'
        },
        bannerClassName: {
            type: 'string'
        }
    },
    edit: props => {
        const {
            setAttributes,
            attributes: {
                bannerTitle,
                buttonLink,
                buttonLabel
            },
            className
        } = props;

        // Set className attribute for PHP frontend to use
        setAttributes({ bannerClassName: className });

        const onTitleChange = newTitle => {
            setAttributes({ bannerTitle: newTitle })
        }

        const onChangeButtonLink = newButtonLink => {
            setAttributes({ buttonLink: newButtonLink })
        }

        const onChangeButtonLabel = newButtonLabel => {
            setAttributes({ buttonLabel: newButtonLabel })
        }

        return ([

        <div className={`${className}  mojblocks-banner`} >

            <div className={'govuk-width-container'}>
                <div className={'govuk-grid-row'}>
                    <div className="govuk-grid-column-two-thirds">
                            <RichText
                            tagName="h1"
                            className="mojblocks-banner__title"
                            value={ bannerTitle }
                            keepPlaceholderOnFocus
                            onChange={ onTitleChange }
                            placeholder="Enter your banner title"
                                />
                    </div>
                    <div className="govuk-grid-column-one-third">
                        <URLInputButton
                            className="mojblocks-dropdown__input"
                            label={__('Button Link', 'mojblocks')}
                            onChange={onChangeButtonLink}
                            url={buttonLink}
                            />
                            <RichText
                            className="mojblocks-banner__button"
                            value={buttonLabel}
                            onChange={onChangeButtonLabel}
                            placeholder="Button label"
                        />

                    </div>
                </div>
            </div>

        </div>
    ])

    },
    // return null as frontend output is done via PHP
    save: () => null
});
