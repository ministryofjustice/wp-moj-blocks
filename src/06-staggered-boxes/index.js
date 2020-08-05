const { __ } = wp.i18n;
const { registerBlockType, registerBlockStyle } = wp.blocks;
const { RichText, InnerBlocks } = wp.blockEditor;

registerBlockType("mojblocks/staggered-box", {
  title: __("Staggered box", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered box'), __('photo box')],

  edit: props => {
    const {
      attributes: { className }
    } = props

    // Load allowed blocks on repeater
    const allowedBlocks = [
      'mojblocks/staggered-box-button-and-caption',
      'mojblocks/staggered-box-button-no-caption',
      'mojblocks/staggered-box-caption-and-no-button',
      'mojblocks/staggered-box-no-button-no-caption'
    ];

    return (
      <div className={`${className}  mojblocks-staggered-box`}>
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
            <p>Text</p>
            <InnerBlocks
              allowedBlocks={allowedBlocks}
            />
          </div>
        </div>
      </div>
    );
  },

  save: props => {
    return (
      <div className="mojblocks-staggered-box">
        <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <InnerBlocks.Content />
            </div>
        </div>
      </div>
    );
  }
});

// style variations
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'image-right',
    label: 'Image aligned on the right',
    isDefault: true,
  }
);
registerBlockStyle('mojblocks/staggered-box',
  {
    name: 'staggered-box-image-left',
    label: 'Image aligned on left'
  }
);
