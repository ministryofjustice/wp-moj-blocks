/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/svg/index.js":
/*!*****************************!*\
  !*** ./assets/svg/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Icons = {};
Icons.upload = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "32px",
  height: "32px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);

/***/ }),

/***/ "./src/custom-blocks/accordion/index.js":
/*!**********************************************!*\
  !*** ./src/custom-blocks/accordion/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  RichText
} = wp.blockEditor;
const {
  InnerBlocks
} = wp.blockEditor;

/**
 * MOJBLOCKS: Accordion
 *
 * Display content in accordion layout.
 */
registerBlockType('mojblocks/accordion', {
  title: __('Accordion', 'mojblocks'),
  description: __('Display content in an accordion component.'),
  icon: "list-view",
  category: 'mojblocks',
  keywords: [__('accordion'), __('sections'), __('lists')],
  attributes: {},
  edit: () => {
    // Load allowed blocks on repeater
    const allowedBlocks = ['mojblocks/accordion-section'];

    // Load template/block when block is selected
    const templates = [['mojblocks/accordion-section', {}]];
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-accordion",
      "data-module": "govuk-accordion",
      id: "accordion-default",
      key: "accordion-block"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: templates,
      allowedBlocks: allowedBlocks
    }))];
  },
  // When using InnerBlocks with dynamic blocks, you need to return the content.
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/**
 * MOJBLOCKS: Accordion section
 *
 * Inner-block. Displayed only in the parent accordion block.
 */
registerBlockType("mojblocks/accordion-section", {
  title: __("Accordion Section", "mojblocks"),
  category: "mojblocks",
  parent: ['mojblocks/accordion'],
  attributes: {
    accordionSectionTitle: {
      type: "string"
    },
    accordionSectionTextArea: {
      type: "string"
    },
    accordionSectionClassName: {
      type: "string"
    }
  },
  edit: props => {
    const {
      attributes: {
        accordionSectionTitle,
        accordionSectionTextArea
      },
      className,
      setAttributes
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      accordionSectionClassName: className
    });

    // Load allowed blocks to be added to accordion section body
    const allowedBlocks = ['core/heading', 'core/list', 'core/paragraph'];
    const onChangeAccordionTitle = newAccordionTitle => {
      setAttributes({
        accordionSectionTitle: newAccordionTitle
      });
    };
    const onChangeAccordionSectionTextArea = newAccordionSectionTextArea => {
      setAttributes({
        accordionSectionTextArea: newAccordionSectionTextArea
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} govuk-accordion__section`,
      key: "accordion-block-section"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-accordion__section-header"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "govuk-accordion__section-heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "govuk-accordion__section-button",
      id: "accordion-default-heading-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Add accordion section title', 'mojblocks'),
      value: accordionSectionTitle,
      onChange: onChangeAccordionTitle,
      keepPlaceholderOnFocus: true
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "accordion-default-content-1",
      className: "govuk-accordion__section-content",
      "aria-labelledby": "accordion-default-heading-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Add accordion section content', 'mojblocks'),
      value: accordionSectionTextArea,
      onChange: onChangeAccordionSectionTextArea,
      keepPlaceholderOnFocus: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }))))];
  },
  // When using InnerBlocks with dynamic blocks, you need to return the content.
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/banner/index.js":
/*!*******************************************!*\
  !*** ./src/custom-blocks/banner/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InnerBlocks
} = wp.blockEditor;
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

    // Load allowed blocks to be added to banner content
    const allowedBlocks = ['core/heading'];
    const banner_template = [['core/heading', {
      placeholder: 'Banner Title'
    }]];

    // Set className attribute for PHP frontend to use
    setAttributes({
      bannerClassName: className
    });
    const onTitleChange = newTitle => {
      setAttributes({
        bannerTitle: newTitle
      });
    };
    const onChangeButtonLink = newButtonLink => {
      setAttributes({
        buttonLink: newButtonLink
      });
    };
    const onChangeButtonLabel = newButtonLabel => {
      setAttributes({
        buttonLabel: newButtonLabel
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}  mojblocks-banner`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-column-two-thirds"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-banner__title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlocks,
      template: banner_template,
      templateLock: "all"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-column-one-third"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInputButton, {
      className: "mojblocks-dropdown__input",
      label: __('Button Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      className: "mojblocks-banner__button govuk-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    })))))];
  },
  // return null as frontend output is done via PHP
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/card/edit.js":
/*!****************************************!*\
  !*** ./src/custom-blocks/card/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardBlockEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_svg_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/svg/index */ "./assets/svg/index.js");

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const allowedMediaTypes = ['image'];
const templateCardBlock = [['core/heading', {
  placeholder: 'Card heading'
}]];
function CardBlockEdit(props) {
  const {
    setAttributes,
    className
  } = props;
  const {
    cardExcerpt,
    cardImageURL,
    cardImageId
  } = props.attributes;
  const onRemoveImage = () => {
    setAttributes({
      cardImageURL: null,
      cardImageId: null
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} mojblocks-card mojblocks-card-image`,
    "data-src": cardImageURL
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} mojblocks-card__image` + ' ' + (cardImageId ? 'mojblocks-card__image-selected' : ''),
    style: {
      backgroundImage: `url(${cardImageURL})`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    buttonProps: {
      className: 'change-image'
    },
    onSelect: image => setAttributes({
      cardImageId: image.id,
      cardImageURL: image.url
    }),
    allowedTypes: allowedMediaTypes,
    type: "image",
    value: cardImageId,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: 'mojblocks-card__image__button ' + (cardImageId ? 'mojblocks-card__image__button-change' : 'mojblocks-card__image__button-add'),
        onClick: open
      }, _assets_svg_index__WEBPACK_IMPORTED_MODULE_4__["default"].upload), cardImageId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "mojblocks-card__image__button mojblocks-card__image__button-remove",
        onClick: onRemoveImage
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
        icon: 'dismiss'
      })));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    template: templateCardBlock,
    templateLock: "all"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add excerpt text...', 'mojblocks'),
    keepPlaceholderOnFocus: true,
    value: cardExcerpt,
    className: "mojblocks-card-excerpt",
    onChange: value => setAttributes({
      cardExcerpt: value
    })
  }));
}

/***/ }),

/***/ "./src/custom-blocks/card/index.js":
/*!*****************************************!*\
  !*** ./src/custom-blocks/card/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/custom-blocks/card/edit.js");

/**
 * Card block
 *
 * Create a flexible card pattern on the page,
 * with an image, hyperlink title and body content.
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/card', {
  apiVersion: 1,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card', 'mojblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a card pattern to a default page', 'mojblocks'),
  category: 'mojblocks',
  icon: 'table-row-after',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('card', 'navigation', 'mojblocks')],
  supports: {
    align: ['wide', 'full'],
    html: false
  },
  attributes: {
    cardTitle: {
      type: 'string'
    },
    cardExcerpt: {
      type: 'string'
    },
    cardImageURL: {
      type: 'string'
    },
    cardImageId: {
      type: 'number'
    },
    cardClassName: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/cta/index.js":
/*!****************************************!*\
  !*** ./src/custom-blocks/cta/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * CTA
 * A stylised call to action displaying a title, text and cta button
 */



const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow,
  ToggleControl
} = wp.components;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/cta', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Call to Action', 'mojblocks'),
  icon: 'megaphone',
  category: 'mojblocks',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('cta'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Call to Action'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('banner')],
  example: {
    attributes: {
      ctaTitle: 'Add a Call to Action banner to your site',
      ctaText: 'Call To Action text',
      buttonLabel: 'Click me now',
      buttonLink: 'https://intranet.justice.gov.uk/',
      flushBottom: false
    }
  },
  attributes: {
    ctaTitle: {
      type: 'string'
    },
    ctaText: {
      type: 'string'
    },
    buttonLabel: {
      type: 'string'
    },
    buttonLink: {
      type: 'string'
    },
    flushBottom: {
      type: 'boolean'
    },
    ctaClassName: {
      type: 'string'
    }
  },
  edit: props => {
    const {
      setAttributes,
      attributes: {
        ctaTitle,
        ctaText,
        buttonLink,
        buttonLabel,
        flushBottom
      },
      className
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      ctaClassName: className
    });

    // Grab newCtaTitle, set the value of ctaTitle to newCtaTitle.
    const onChangeCtaTitle = newCtaTitle => {
      setAttributes({
        ctaTitle: newCtaTitle
      });
    };

    // Grab newCtaText, set the value of ctaText to newCtaText.
    const onChangeCtaText = newCtaText => {
      setAttributes({
        ctaText: newCtaText
      });
    };

    // Grab newButtonLabel, set the value of buttonLabel to newButtonLabel.
    const onChangeButtonLabel = newButtonLabel => {
      setAttributes({
        buttonLabel: newButtonLabel
      });
    };

    // Grab newButtonLink, set the value of buttonLink to newButtonLink.
    const onChangeButtonLink = newButtonLink => {
      setAttributes({
        buttonLink: newButtonLink
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}  mojblocks-cta`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Bottom Margin",
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Flush bottom",
      help: flushBottom ? 'Gap removed from beneath this block' : 'Normal gap beneath this block',
      checked: flushBottom,
      onChange: newFlushBottom => setAttributes({
        flushBottom: newFlushBottom
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "govuk-grid-column-three-quarters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-cta__heading-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "mojblocks-cta__heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mojblocks-cta__heading-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add a Call To Action title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: ctaTitle,
      onChange: onChangeCtaTitle
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'mojblocks-cta__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      multiline: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add compelling text to send the message home', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeCtaText,
      value: ctaText
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.URLInputButton, {
      className: "mojblocks-dropdown__input",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('CTA Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: "mojblocks-button govuk-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    })))));
  },
  save: () => null
});

/***/ }),

/***/ "./src/custom-blocks/featured-document/edit.js":
/*!*****************************************************!*\
  !*** ./src/custom-blocks/featured-document/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturedDocumentEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);






const {
  Fragment
} = wp.element;
const d = new Date();
const templateFeaturedDocumentBlock = [['core/heading', {
  placeholder: 'Add featured document section title'
}]];
function FeaturedDocumentEdit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    featuredDocumentID,
    featuredDocumentHasDate,
    className
  } = attributes;
  const {
    allDocuments
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords,
      getMedia,
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      imageSizes,
      imageDimensions
    } = getSettings();
    const posts = getEntityRecords('postType', 'document', {
      per_page: -1
    });
    return {
      allDocuments: posts
    };
  });
  let docOptions = [{
    label: "None",
    value: '0'
  }];
  let docList = [{
    title: "No document selected",
    summary: "",
    date: "date",
    image: ""
  }];
  if (Array.isArray(allDocuments)) {
    for (let i = 0; i < allDocuments.length; i++) {
      docList[allDocuments[i].id] = {
        title: allDocuments[i].title.rendered,
        date: allDocuments[i].date
      };
      docOptions.push({
        label: allDocuments[i].title.rendered,
        value: allDocuments[i].id
      });
    }
  }
  const setDocument = newDocumentID => {
    setAttributes({
      featuredDocumentID: newDocumentID
    });
  };
  const setHasDate = newDateSetting => {
    setAttributes({
      featuredDocumentHasDate: newDateSetting
    });
  };
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured Document settings'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Select document",
    value: featuredDocumentID,
    options: docOptions,
    onChange: setDocument
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Show/hide publish date",
    help: featuredDocumentHasDate === false ? 'The date will be hidden' : 'The date will be displayed',
    checked: featuredDocumentHasDate,
    onChange: setHasDate
  })));
  if (!Array.isArray(allDocuments) || !Array.isArray(docList)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-spinner"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-spinner-text govuk-body"
    }, "Loading"));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mojblocks-featured-document ${className}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-width-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      template: templateFeaturedDocumentBlock,
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `govuk-grid-row ${featuredDocumentHasDate ? '' : 'mojblocks-featured-document-hide-date'} `
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-featured-document__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-document__text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-document__headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-document__headline-link"
    }, docList[featuredDocumentID].title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body-s mojblocks-featured-document__date"
    }, datify(docList[featuredDocumentID].date, d))))))));
  }
}
function datify(x, d) {
  if (!x) return "Date";
  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";
  var x = x.split("-");
  if (x.length != 3) {
    //wrong format, return today
    return d.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long'
    });
  }
  var day = x[2].substring(0, 2);
  var month = " " + month[parseInt(x[1])];
  var year = " " + x[0];
  if (d.getFullYear() == x[0]) {
    return day + month;
  } else {
    return day + month + year;
  }
}

/***/ }),

/***/ "./src/custom-blocks/featured-document/index.js":
/*!******************************************************!*\
  !*** ./src/custom-blocks/featured-document/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-blocks/featured-document/edit.js");

const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;
const {
  __
} = wp.i18n;


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
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/featured-news/edit.js":
/*!*************************************************!*\
  !*** ./src/custom-blocks/featured-news/edit.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeaturedNewsEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);







const {
  Fragment
} = wp.element;
const d = new Date();
const templateFeaturedNewsBlock = [['core/heading', {
  placeholder: 'Add featured news section title'
}]];
function FeaturedNewsEdit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    featuredNewsID,
    featuredNewsHasDate,
    className
  } = attributes;
  const {
    latestNews
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getEntityRecords,
      getMedia,
      getUsers
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const {
      getSettings
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      imageSizes,
      imageDimensions
    } = getSettings();
    const posts = getEntityRecords('postType', 'news', {
      per_page: 20
    });
    return {
      latestNews: posts
    };
  });
  const {
    featuredNewsArticle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    if (featuredNewsID.length > 0) {
      const {
        getEntityRecord
      } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
      const posts = getEntityRecord('postType', 'news', featuredNewsID);
      return {
        featuredNewsArticle: posts
      };
    } else {
      return {
        featuredNewsArticle: false
      };
    }
  });
  let optionList = [{
    label: "None",
    value: '0'
  }];
  let newsList = [{
    title: "No news article selected",
    summary: "",
    date: "date",
    image: ""
  }];
  if (Array.isArray(latestNews)) {
    for (let i = 0; i < latestNews.length; i++) {
      if (latestNews[i].summary_meta.news_story_summary) {
        newsList[latestNews[i].id] = {
          title: latestNews[i].title.rendered,
          summary: latestNews[i].summary_meta.news_story_summary,
          date: latestNews[i].date,
          image: latestNews[i].featured_image_url
        };
        optionList.push({
          label: latestNews[i].title.rendered,
          value: latestNews[i].id
        });
      }
    }
    if (featuredNewsArticle != null && featuredNewsID.length > 0 && newsList.hasOwnProperty(featuredNewsID) == false) {
      newsList[featuredNewsID] = {
        title: featuredNewsArticle.title.rendered,
        summary: featuredNewsArticle.summary_meta.news_story_summary,
        date: featuredNewsArticle.date,
        image: featuredNewsArticle.featured_image_url
      };
      optionList.push({
        label: featuredNewsArticle.title.rendered,
        value: featuredNewsArticle.id
      });
    }
  }
  const setHasDate = newDateSetting => {
    setAttributes({
      featuredNewsHasDate: newDateSetting
    });
  };
  const setStory = newStory => {
    setAttributes({
      featuredNewsID: newStory
    });
  };
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('News settings'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Select news",
    help: "Only news articles with a summary are available for selection",
    value: featuredNewsID,
    options: optionList,
    onChange: setStory
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Show/hide article dates",
    help: featuredNewsHasDate === false ? 'The date will be hidden' : 'The date will be displayed',
    checked: featuredNewsHasDate,
    onChange: setHasDate
  })));
  if (!Array.isArray(latestNews) || !Array.isArray(newsList)) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-spinner"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-spinner-text govuk-body"
    }, "Loading"));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mojblocks-featured-news mojblocks-featured-news--${featuredNewsID} ${className}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-width-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
      template: templateFeaturedNewsBlock,
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `govuk-grid-row ${featuredNewsHasDate ? '' : 'mojblocks-featured-news-hide-date'} ${featuredNewsID != "0" && !newsList[featuredNewsID].image ? 'mojblocks-featured-news--no-image' : ''} `
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "mojblocks-featured-news__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-news__image",
      styles: `background:url('${newsList[featuredNewsID].image}')`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: newsList[featuredNewsID].image,
      alt: "Feature image for news article"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-news__text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-news__headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline-link"
    }, newsList[featuredNewsID].title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body mojblocks-featured-news__summary"
    }, newsList[featuredNewsID].summary), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body-s mojblocks-featured-news__date"
    }, datify(newsList[featuredNewsID].date, d)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-featured-news__link"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "govuk-link"
    }, "Read full article"))))))));
  }
}
function datify(x, d) {
  if (!x) return "Date";
  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";
  var x = x.split("-");
  if (x.length != 3) {
    //wrong format, return today
    return d.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long'
    });
  }
  var day = x[2].substring(0, 2);
  var month = " " + month[parseInt(x[1])];
  var year = " " + x[0];
  if (d.getFullYear() == x[0]) {
    return day + month;
  } else {
    return day + month + year;
  }
}

/***/ }),

/***/ "./src/custom-blocks/featured-news/index.js":
/*!**************************************************!*\
  !*** ./src/custom-blocks/featured-news/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-blocks/featured-news/edit.js");

const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;
const {
  __
} = wp.i18n;


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
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/hero/index.js":
/*!*****************************************!*\
  !*** ./src/custom-blocks/hero/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls,
  MediaUpload,
  InnerBlocks
} = wp.blockEditor;
const {
  PanelBody,
  PanelRow
} = wp.components;
registerBlockType("mojblocks/hero", {
  title: __("Hero", "mojblocks"),
  description: __("Full width hero banner with title and text", "mojblocks"),
  category: "mojblocks",
  icon: "schedule",
  attributes: {
    backgroundImage: {
      type: 'string'
    },
    heroClassName: {
      type: 'string'
    },
    heroImagePosition: {
      type: 'string'
    }
  },
  edit: props => {
    const {
      setAttributes,
      attributes: {
        backgroundImage,
        heroImagePosition
      },
      className
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      heroClassName: className
    });

    // Load allowed blocks to be added to hero content
    const allowedBlocks = ['core/heading', 'core/list', 'core/paragraph', 'mojblocks/intro'];
    const onChangeBackgroundImage = imageObject => {
      var imageSizes = imageObject.sizes;

      // determine the image size displayed with fallback
      var image = typeof imageSizes.hero !== 'undefined' ? imageSizes.hero.url : imageSizes.full.url;
      setAttributes({
        backgroundImage: image
      });
    };
    const optionList = [{
      label: "Centre",
      value: 'center'
    }, {
      label: "Top",
      value: 'top'
    }, {
      label: "Bottom",
      value: 'bottom'
    }, {
      label: "Left",
      value: 'left'
    }, {
      label: "Right",
      value: 'right'
    }, {
      label: "Top left",
      value: 'top left'
    }, {
      label: "Top right",
      value: 'top right'
    }, {
      label: "Bottom left",
      value: 'bottom left'
    }, {
      label: "Bottom right",
      value: 'bottom right'
    }];
    const setPosition = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('center');
    const onChangeImagePosition = newImagePosition => {
      setAttributes({
        heroImagePosition: newImagePosition
      });
      setPosition(newImagePosition);
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Choose hero block banner image', 'mojblocks'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "block-editor-block-hero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "For best results, uploaded images must meet a minimum size of 1366\xD7683 pixels (or aspect ratio of 2:1).")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onChangeBackgroundImage,
      type: "image",
      value: backgroundImage,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Upload image");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      label: "Image position",
      help: "",
      value: heroImagePosition,
      options: optionList,
      onChange: onChangeImagePosition
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: `${className}  mojblocks-hero`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-hero__image",
      style: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: `${heroImagePosition}`
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-hero__overlay"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-column-three-quarters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }))))))];
  },
  // return null as frontend output is done via PHP
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/highlights-list/index.js":
/*!****************************************************!*\
  !*** ./src/custom-blocks/highlights-list/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Highlights List
 * A stylised list displaying bullet points and a title
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/highlights-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlights List', 'mojblocks'),
  icon: 'list-view',
  category: 'mojblocks',
  example: {
    attributes: {
      listTitle: 'This is a highlights list title',
      listItems: 'This is a list item'
    }
  },
  attributes: {
    listTitle: {
      type: 'string'
    },
    listItems: {
      type: 'string' //sting due to key error issue with array
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
    setAttributes({
      listClassName: className
    });

    // Grab newListTitle, set the value of listTitle to newListTitle.
    const onChangeListTitle = newListTitle => {
      setAttributes({
        listTitle: newListTitle
      });
    };

    // Grab newListItems, set the value of listItems to newListItems.
    const onChangeListItems = newListItems => {
      setAttributes({
        listItems: newListItems
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className}  mojblocks-highlights-list`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-highlights-list__heading-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "mojblocks-highlights-list__heading"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      role: "text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mojblocks-highlights-list__heading-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add highlights title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: listTitle,
      onChange: onChangeListTitle
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'mojblocks-highlights-list__content'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "ul",
      multiline: "li",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add list item', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeListItems,
      value: listItems
    })))));
  },
  save: () => null
});

/***/ }),

/***/ "./src/custom-blocks/index.js":
/*!************************************!*\
  !*** ./src/custom-blocks/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _highlights_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./highlights-list */ "./src/custom-blocks/highlights-list/index.js");
/* harmony import */ var _cta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cta */ "./src/custom-blocks/cta/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./src/custom-blocks/hero/index.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/custom-blocks/accordion/index.js");
/* harmony import */ var _staggered_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staggered-box */ "./src/custom-blocks/staggered-box/index.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote */ "./src/custom-blocks/quote/index.js");
/* harmony import */ var _intro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro */ "./src/custom-blocks/intro/index.js");
/* harmony import */ var _reveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reveal */ "./src/custom-blocks/reveal/index.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card */ "./src/custom-blocks/card/index.js");
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner */ "./src/custom-blocks/banner/index.js");
/* harmony import */ var _latest_news__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./latest-news */ "./src/custom-blocks/latest-news/index.js");
/* harmony import */ var _featured_news__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./featured-news */ "./src/custom-blocks/featured-news/index.js");
/* harmony import */ var _featured_document__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./featured-document */ "./src/custom-blocks/featured-document/index.js");
/**
 * Import blocks as components.
 */















/***/ }),

/***/ "./src/custom-blocks/intro/index.js":
/*!******************************************!*\
  !*** ./src/custom-blocks/intro/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Intro
 * A stylised intro section
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/intro', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Intro Text', 'mojblocks'),
  icon: 'editor-paragraph',
  category: 'mojblocks',
  attributes: {
    introText: {
      type: 'string'
    },
    introClassName: {
      type: 'string'
    }
  },
  edit: props => {
    const {
      attributes: {
        introText
      },
      className,
      setAttributes
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      introClassName: className
    });

    // Grab newIntroText, set the value of introText to newIntroText.
    const onChangeIntroText = newIntroText => {
      setAttributes({
        introText: newIntroText
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} mojblocks-intro`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-column-three-quarters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-intro--type"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'mojblocks-intro__content intro'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      multiline: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Some compelling text to send the message home', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeIntroText,
      value: introText
    })))))));
  },
  // return null as frontend output is done via PHP
  save: () => null
});

/***/ }),

/***/ "./src/custom-blocks/latest-news/index.js":
/*!************************************************!*\
  !*** ./src/custom-blocks/latest-news/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

const {
  __
} = wp.i18n;
const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  RichText,
  MediaUpload,
  InspectorControls,
  URLInputButton
} = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
const {
  PanelBody
} = wp.components;
const templateLatestNewsBlock = [['core/heading', {
  placeholder: 'Add latest news section title'
}]];
let title0 = 'Title automatically updated on preview page';
let title1 = 'Title automatically updated on preview page';
let title2 = 'Title automatically updated on preview page';
let date0 = 'Date';
let date1 = 'Date';
let date2 = 'Date';
const d = new Date();
function datify(x, d) {
  var month = new Array();
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  month[12] = "December";
  var x = x.split("-");
  if (x.length != 3) {
    //wrong format, return today
    return d.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long'
    });
  }
  var day = x[2].substring(0, 2);
  var month = " " + month[parseInt(x[1])];
  var year = " " + x[0];
  if (d.getFullYear() == x[0]) {
    return day + month;
  } else {
    return day + month + year;
  }
}





registerBlockType("mojblocks/latest-news", {
  title: __("Latest News", "mojblocks"),
  description: __('Display latest news items'),
  category: "mojblocks",
  icon: "slides",
  keywords: [__('latest news'), __('recent news'), __('headlines')],
  attributes: {
    latestNewsHasDate: {
      type: "boolean",
      default: true
    },
    latestNewsExpiry: {
      type: "numeric",
      default: 0
    },
    latestNewsEmptyText: {
      type: "string",
      default: "No news to display."
    }
  },
  edit: props => {
    const {
      setAttributes,
      attributes: {
        latestNewsExpiry,
        latestNewsEmptyText,
        latestNewsHasDate
      },
      className
    } = props;
    const setHasDate = newDateSetting => {
      setAttributes({
        latestNewsHasDate: newDateSetting
      });
    };
    const setEmptyText = newEmptyText => {
      setAttributes({
        latestNewsEmptyText: newEmptyText
      });
    };
    const setExpiry = newExpiry => {
      setAttributes({
        latestNewsExpiry: newExpiry
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('News settings'),
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
      label: "Show/hide article dates",
      help: latestNewsHasDate === false ? 'Dates will be hidden' : 'Dates will be displayed',
      checked: latestNewsHasDate,
      onChange: setHasDate
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Text for no news",
      help: latestNewsEmptyText === "" ? "If there are no news articles to display, the block will be blank." : "This will be shown if there are no articles to display.",
      value: latestNewsEmptyText,
      onChange: setEmptyText
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalNumberControl, {
      label: "Auto-hide after how many weeks",
      value: latestNewsExpiry,
      min: "0",
      onChange: setExpiry
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, null, !latestNewsExpiry ? "Articles will not expire." : "Articles will expire after " + latestNewsExpiry + " weeks."))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mojblocks-latest-news mojblocks-latest-news--expiry-weeks-${latestNewsExpiry} ${className}`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-width-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      template: templateLatestNewsBlock,
      templateLock: "all"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `govuk-grid-row ${latestNewsHasDate === false ? 'mojblocks-latest-news-hide-date' : ''} `
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, title0)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__date"
    }, date0)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, title1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__date"
    }, date1)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__item"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#"
    }, title2)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-latest-news__date"
    }, date2))))));
  },
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/quote/index.js":
/*!******************************************!*\
  !*** ./src/custom-blocks/quote/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_svg_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/svg/index */ "./assets/svg/index.js");

/**
 * Quote
 * A stylised quotation with image upload, quote and name fields
 */








const ALLOWED_MEDIA_TYPES = ['image'];
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/quote', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Quote', 'mojblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A user quote block with an optional image background, quote text and name', 'mojblocks'),
  category: 'mojblocks',
  icon: 'format-quote',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('quote', 'mojblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('testimonial', 'mojblocks'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('moj', 'mojblocks')],
  attributes: {
    quoteImgURL: {
      type: 'string'
    },
    quoteContent: {
      type: 'string'
    },
    quoteName: {
      type: 'string'
    },
    quoteAlignment: {
      type: 'string'
    },
    quoteImgId: {
      type: 'number'
    },
    quoteClassName: {
      type: 'string'
    }
  },
  edit: props => {
    const {
      setAttributes,
      attributes: {
        quoteImgURL,
        quoteContent,
        quoteName,
        quoteAlignment,
        quoteImgId
      },
      className
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      quoteClassName: className
    });
    const onRemoveImage = () => {
      setAttributes({
        quoteImgURL: null,
        quoteImgId: null
      });
    };
    return [
    // Show the alignment toolbar on focus
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, {
      key: "controls"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: quoteAlignment,
      onChange: value => setAttributes({
        quoteAlignment: value
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mojblocks-quote`,
      "data-src": quoteImgURL
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} mojblocks-quote__image ` + (quoteImgId ? 'mojblocks-quote__image-selected' : ''),
      style: {
        backgroundImage: `url(${quoteImgURL})`
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
      buttonProps: {
        className: 'change-image'
      },
      onSelect: img => setAttributes({
        quoteImgId: img.id,
        quoteImgURL: img.url
      }),
      allowed: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: quoteImgId,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: 'mojblocks-quote__image__button ' + (quoteImgId ? 'mojblocks-quote__image__button-change' : 'mojblocks-quote__image__button-add'),
          onClick: open
        }, _assets_svg_index__WEBPACK_IMPORTED_MODULE_6__["default"].upload), quoteImgId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: "mojblocks-quote__image__button mojblocks-quote__image__button-remove",
          onClick: onRemoveImage
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
          icon: 'dismiss'
        })));
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-width-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-quote__content",
      style: {
        textAlign: quoteAlignment
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-quote__content__icon"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dashicon, {
      icon: "format-quote"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "q",
      multiline: "span",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add quotation text...', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: quoteContent,
      allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough', 'core/link'],
      className: "mojblocks-quote__content__quote",
      onChange: value => setAttributes({
        quoteContent: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add name', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: quoteName,
      className: "mojblocks-quote__content__name",
      onChange: value => setAttributes({
        quoteName: value
      })
    }))))];
  },
  // return null as frontend output is done via PHP
  save: () => null
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.unregisterBlockType)('core/quote');
});

/***/ }),

/***/ "./src/custom-blocks/reveal/index.js":
/*!*******************************************!*\
  !*** ./src/custom-blocks/reveal/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Reveal
 */



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('mojblocks/reveal', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reveal', 'mojblocks'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Arrow toggle to reveal text", "mojblocks"),
  icon: 'controls-play',
  category: 'mojblocks',
  attributes: {
    revealTitle: {
      type: 'string'
    },
    revealContent: {
      type: 'string'
    },
    revealClassName: {
      type: 'string'
    }
  },
  edit: props => {
    const {
      setAttributes,
      attributes: {
        revealTitle,
        revealContent
      },
      className
    } = props;

    // Set className attribute for PHP frontend to use
    setAttributes({
      revealClassName: className
    });

    // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.
    const onChangeRevealTitle = newRevealTitle => {
      setAttributes({
        revealTitle: newRevealTitle
      });
    };

    // Grab newrevealContent, set the value of revealContent to newrevealContent.
    const onChangeRevealContent = newRevealContent => {
      setAttributes({
        revealContent: newRevealContent
      });
    };
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `mojblocks-reveal`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-width-container'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'govuk-grid-row'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-column-three-quarters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("details", {
      className: "govuk-details",
      "data-module": "govuk-details",
      open: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("summary", {
      className: "govuk-details__summary"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mojblocks-reveal__title govuk-details__summary-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      value: revealTitle,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add reveal title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeRevealTitle
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-reveal__content govuk-details__text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      multiline: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add reveal content', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeRevealContent,
      value: revealContent
    })))))))];
  },
  // return null as frontend output is done via PHP
  save: () => null
});

/***/ }),

/***/ "./src/custom-blocks/staggered-box/index.js":
/*!**************************************************!*\
  !*** ./src/custom-blocks/staggered-box/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  __
} = wp.i18n;
const {
  registerBlockType,
  registerBlockStyle
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  RichText,
  MediaUpload,
  InspectorControls,
  URLInputButton
} = wp.blockEditor;
const ALLOWED_MEDIA_TYPES = ['image'];
registerBlockType("mojblocks/staggered-box", {
  title: __("Staggered Box", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered box'), __('photo block')],
  attributes: {
    staggeredBoxTitle: {
      type: "string"
    },
    staggeredBoxContent: {
      type: "string"
    },
    staggeredBoxButtonText: {
      type: "string"
    },
    staggeredBoxButtonLink: {
      type: 'string'
    },
    staggeredBoxImageURL: {
      type: "string"
    },
    staggeredBoxImageAltText: {
      type: "string"
    },
    staggeredBoxClassName: {
      type: "string"
    }
  },
  edit: props => {
    const {
      attributes: {
        staggeredBoxContent,
        staggeredBoxImageURL,
        staggeredBoxButtonText,
        staggeredBoxButtonLink,
        staggeredBoxTitle,
        staggeredBoxImageAltText
      },
      className,
      setAttributes
    } = props;
    setAttributes({
      staggeredBoxClassName: className
    });
    const onChangeStaggeredBoxTitle = newStaggeredBoxTitle => {
      setAttributes({
        staggeredBoxTitle: newStaggeredBoxTitle
      });
    };
    const onChangeStaggeredBoxContent = newStaggeredBoxContent => {
      setAttributes({
        staggeredBoxContent: newStaggeredBoxContent
      });
    };
    const onChangeStaggeredBoxButtonText = newStaggeredBoxButtonText => {
      setAttributes({
        staggeredBoxButtonText: newStaggeredBoxButtonText
      });
    };
    const onChangeStaggeredBoxButtonLink = newStaggeredBoxButtonLink => {
      setAttributes({
        staggeredBoxButtonLink: newStaggeredBoxButtonLink
      });
    };
    const onStaggeredBoxImageSelect = newStaggeredBoxImageURL => {
      setAttributes({
        staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.full.url
      });
      setAttributes({
        staggeredBoxImageAltText: newStaggeredBoxImageURL.alt
      });
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onStaggeredBoxImageSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: staggeredBoxImageURL,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Open Media Library");
      }
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${className} mojblocks-staggered-box`
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-width-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "govuk-grid-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "mojblocks-staggered-block__image",
      src: staggeredBoxImageURL,
      alt: staggeredBoxImageAltText
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mojblocks-staggered-box__text-container govuk-grid-column-one-half"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h2",
      value: staggeredBoxTitle,
      onChange: onChangeStaggeredBoxTitle,
      className: "mojblocks-staggered-box__title",
      placeholder: __('Add staggered box title', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      value: staggeredBoxContent,
      onChange: onChangeStaggeredBoxContent,
      className: "mojblocks-staggered-box__content",
      placeholder: __('Add staggered box content', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInputButton, {
      label: __('Button link', 'mojblocks'),
      onChange: onChangeStaggeredBoxButtonLink,
      url: staggeredBoxButtonLink
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      value: staggeredBoxButtonText,
      onChange: onChangeStaggeredBoxButtonText,
      className: "mojblocks-staggered-box__button",
      placeholder: __('Add staggered box button', 'mojblocks')
    }))))));
  },
  save: () => null
});
registerBlockStyle('mojblocks/staggered-box', {
  name: 'image-left',
  label: 'Image aligned on the left',
  isDefault: true
});
registerBlockStyle('mojblocks/staggered-box', {
  name: 'staggered-box-image-right',
  label: 'Image aligned on right'
});

/***/ }),

/***/ "./src/extended-core-blocks/button/index.js":
/*!**************************************************!*\
  !*** ./src/extended-core-blocks/button/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/**
 *  Extend core WP Button, Buttons blocks
 *  https://wordpress.org/support/article/button-block/
 *  https://wordpress.org/support/article/buttons-block/
 *
 */





/**
 * Modify the CSS styles associated with
 * two button blocks 'core/button' and 'core/buttons'.
 * Remove default core styles.
 */

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(() => {
  // Remove the default styles
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.unregisterBlockStyle)('core/button', ['outline', 'squared', 'fill']);

  // Add custom CSS class
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/button', [{
    name: 'mojblocks-cta-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button - CTA style', 'mojblocks'),
    isDefault: true
  }]);

  // Add custom CSS class
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockStyle)('core/buttons', [{
    name: 'mojblocks-cta-button',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button - CTA style', 'mojblocks'),
    isDefault: true
  }]);
});

/***/ }),

/***/ "./src/extended-core-blocks/file/index.js":
/*!************************************************!*\
  !*** ./src/extended-core-blocks/file/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/**
 *  Extend core WP file block
 *  https://wordpress.org/support/article/file-block/
 *
 * This makes use of WP Blocks extention filters
 * https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
 *
 */

const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;

/**
 * Extention utility
 * Parse file href to get a file's extention (.pdf, .doc, .xml)
 *
 */

function getFileExtension() {
  let file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
}

/**
 * Append the file's extention type to the end of the file
 *
 * @param {Object} BlockEdit BlockEdit for the block.
 *
 * @return {Object} BlockEdit Modified settings.
 */

const addFileExtention = createHigherOrderComponent(BlockEdit => {
  return props => {
    // Apply to core file block only
    if ('core/file' !== props.name) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
    }
    const appendedFile = '(' + getFileExtension(props.attributes.href).toUpperCase() + ')';

    // The downloadButtonText is not being used as part
    // of our design, so we are using it to append the
    // extention.
    props.attributes.downloadButtonText = appendedFile;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props);
  };
}, 'addFileExtention');
addFilter('editor.BlockEdit', 'core/file', addFileExtention);

/***/ }),

/***/ "./src/extended-core-blocks/index.js":
/*!*******************************************!*\
  !*** ./src/extended-core-blocks/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/extended-core-blocks/button/index.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./src/extended-core-blocks/file/index.js");
/**
 * Import extended block code
 */

// Extends both button and buttons core blocks



/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_blocks_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-blocks/index */ "./src/custom-blocks/index.js");
/* harmony import */ var _extended_core_blocks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extended-core-blocks/index */ "./src/extended-core-blocks/index.js");
/**
 * Import all JS from modules
 */



})();

/******/ })()
;
//# sourceMappingURL=index.js.map