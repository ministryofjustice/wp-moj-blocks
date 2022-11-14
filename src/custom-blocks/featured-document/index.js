const { registerBlockType, registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;

import { InnerBlocks } from "@wordpress/block-editor";

import edit from './edit';

registerBlockType("mojblocks/featured-document", {
  title: __("Featured Document", "mojblocks"),
  description: __('Display featured document'),
  category: "mojblocks",
  icon: "id-alt",
  keywords: [__('featured document')],

  attributes: {
    featuredDocumentHasDate: {
      type: "boolean",
      default: true
    },
    featuredDocumentID: {
          type: "string",
          default: "0"
    }
  },
  edit, 
  save: () => { return <InnerBlocks.Content />; }
});
