const { registerBlockType, registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;

import { InnerBlocks } from "@wordpress/block-editor";

import edit from './edit';

registerBlockType("mojblocks/featured-news", {
  title: __("Featured News", "mojblocks"),
  description: __('Display featured news item'),
  category: "mojblocks",
  icon: "id-alt",
  keywords: [__('featured news'), __('headline news'), __('headlines')],

  attributes: {
    featuredNewsHasDate: {
      type: "boolean",
      default: true
    },
    featuredNewsID: {
      type: "string",
      default: "0"
    }
  },
  edit, 
  save: () => { return <InnerBlocks.Content />; }
});
