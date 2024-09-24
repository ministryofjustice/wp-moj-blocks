const { registerBlockType, registerBlockStyle } = wp.blocks;
const { __ } = wp.i18n;

import { InnerBlocks } from "@wordpress/block-editor";

import edit from './edit';

registerBlockType("mojblocks/featured-item", {
  title: __("Featured Item", "mojblocks"),
  description: __('Display featured Item'),
  category: "mojblocks",
  icon: "id-alt",
  keywords: [__('featured item')],

  attributes: {
    featuredItemHasDate: {
      type: "boolean",
      default: true
    },
    featuredItemHasBar: {
      type: "boolean",
      default: true
    },
    featuredItemID: {
      type: "string",
      default: "0"
    },
    featuredItemType: {
      type: "string",
      default: "post"
    },
    featuredImage: {
      type: "string",
      default: "contain"
    },
    featuredCustomImage: {
      type: "string",
      default: ""
    },
    featuredImage: {
      type: "string",
      default: "contain"
    },
    featuredLinkText: {
      type: "string",
      default: "Read full article"
    },
    className: {
      type: "string"
    }
  },
  edit, 
  save: () => { return <InnerBlocks.Content />; }
});

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'wide',
  label: __('Wide', 'mojblocks'),
} );

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'image-left',
  label: __('Image left', 'mojblocks'),
} );

registerBlockStyle( 'mojblocks/featured-item', {
  name: 'image-right',
  label: __('Image right', 'mojblocks'),
} );
