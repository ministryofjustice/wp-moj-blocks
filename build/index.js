/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/svg/index.js":
/*!*****************************!*\
  !*** ./assets/svg/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var Icons = {};
Icons.upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "32px",
  height: "32px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"
}));
/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./src/custom-blocks/accordion/index.js":
/*!**********************************************!*\
  !*** ./src/custom-blocks/accordion/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.blockEditor.RichText;
var InnerBlocks = wp.blockEditor.InnerBlocks;
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
  edit: function edit() {
    // Load allowed blocks on repeater
    var allowedBlocks = ['mojblocks/accordion-section']; // Load template/block when block is selected

    var templates = [['mojblocks/accordion-section', {}]];
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion",
      "data-module": "govuk-accordion",
      id: "accordion-default",
      key: "accordion-block"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: templates,
      allowedBlocks: allowedBlocks
    }))];
  },
  // When using InnerBlocks with dynamic blocks, you need to return the content.
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
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
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        accordionSectionTitle = _props$attributes.accordionSectionTitle,
        accordionSectionTextArea = _props$attributes.accordionSectionTextArea,
        className = props.className,
        setAttributes = props.setAttributes; // Set className attribute for PHP frontend to use

    setAttributes({
      accordionSectionClassName: className
    }); // Load allowed blocks to be added to accordion section body

    var allowedBlocks = ['core/heading', 'core/list', 'core/paragraph'];

    var onChangeAccordionTitle = function onChangeAccordionTitle(newAccordionTitle) {
      setAttributes({
        accordionSectionTitle: newAccordionTitle
      });
    };

    var onChangeAccordionSectionTextArea = function onChangeAccordionSectionTextArea(newAccordionSectionTextArea) {
      setAttributes({
        accordionSectionTextArea: newAccordionSectionTextArea
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " govuk-accordion__section"),
      key: "accordion-block-section"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion__section-header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "govuk-accordion__section-heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "govuk-accordion__section-button",
      id: "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __('Add accordion section title', 'mojblocks'),
      value: accordionSectionTitle,
      onChange: onChangeAccordionTitle,
      keepPlaceholderOnFocus: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "accordion-default-content-1",
      className: "govuk-accordion__section-content",
      "aria-labelledby": "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __('Add accordion section content', 'mojblocks'),
      value: accordionSectionTextArea,
      onChange: onChangeAccordionSectionTextArea,
      keepPlaceholderOnFocus: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }))))];
  },
  // When using InnerBlocks with dynamic blocks, you need to return the content.
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/banner/index.js":
/*!*******************************************!*\
  !*** ./src/custom-blocks/banner/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
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
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        bannerTitle = _props$attributes.bannerTitle,
        buttonLink = _props$attributes.buttonLink,
        buttonLabel = _props$attributes.buttonLabel,
        className = props.className; // Load allowed blocks to be added to banner content

    var allowedBlocks = ['core/heading'];
    var banner_template = [['core/heading', {
      placeholder: 'Banner Title'
    }]]; // Set className attribute for PHP frontend to use

    setAttributes({
      bannerClassName: className
    });

    var onTitleChange = function onTitleChange(newTitle) {
      setAttributes({
        bannerTitle: newTitle
      });
    };

    var onChangeButtonLink = function onChangeButtonLink(newButtonLink) {
      setAttributes({
        buttonLink: newButtonLink
      });
    };

    var onChangeButtonLabel = function onChangeButtonLabel(newButtonLabel) {
      setAttributes({
        buttonLabel: newButtonLabel
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, "  mojblocks-banner")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-column-two-thirds"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-banner__title"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: allowedBlocks,
      template: banner_template,
      templateLock: "all"
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-column-one-third"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["URLInputButton"], {
      className: "mojblocks-dropdown__input",
      label: __('Button Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      className: "mojblocks-banner__button govuk-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    })))))];
  },
  // return null as frontend output is done via PHP
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/card/edit.js":
/*!****************************************!*\
  !*** ./src/custom-blocks/card/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBlockEdit; });
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


var allowedMediaTypes = ['image'];
var templateCardBlock = [['core/heading', {
  placeholder: 'Card heading'
}]];
function CardBlockEdit(props) {
  var setAttributes = props.setAttributes,
      className = props.className;
  var _props$attributes = props.attributes,
      cardExcerpt = _props$attributes.cardExcerpt,
      cardImageURL = _props$attributes.cardImageURL,
      cardImageId = _props$attributes.cardImageId;

  var onRemoveImage = function onRemoveImage() {
    setAttributes({
      cardImageURL: null,
      cardImageId: null
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(className, " mojblocks-card mojblocks-card-image"),
    "data-src": cardImageURL
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(className, " mojblocks-card__image") + ' ' + (cardImageId ? 'mojblocks-card__image-selected' : ''),
    style: {
      backgroundImage: "url(".concat(cardImageURL, ")")
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    buttonProps: {
      className: 'change-image'
    },
    onSelect: function onSelect(image) {
      return setAttributes({
        cardImageId: image.id,
        cardImageURL: image.url
      });
    },
    allowedTypes: allowedMediaTypes,
    type: "image",
    value: cardImageId,
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: 'mojblocks-card__image__button ' + (cardImageId ? 'mojblocks-card__image__button-change' : 'mojblocks-card__image__button-add'),
        onClick: open
      }, _assets_svg_index__WEBPACK_IMPORTED_MODULE_4__["default"].upload), cardImageId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "mojblocks-card__image__button mojblocks-card__image__button-remove",
        onClick: onRemoveImage
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
        icon: 'dismiss'
      })));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    template: templateCardBlock,
    templateLock: "all"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add excerpt text...', 'mojblocks'),
    keepPlaceholderOnFocus: true,
    value: cardExcerpt,
    className: "mojblocks-card-excerpt",
    onChange: function onChange(value) {
      return setAttributes({
        cardExcerpt: value
      });
    }
  }));
}

/***/ }),

/***/ "./src/custom-blocks/card/index.js":
/*!*****************************************!*\
  !*** ./src/custom-blocks/card/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/card', {
  apiVersion: 1,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Card', 'mojblocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add a card pattern to a default page', 'mojblocks'),
  category: 'mojblocks',
  icon: 'table-row-after',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('card', 'navigation', 'mojblocks')],
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
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/cta/index.js":
/*!****************************************!*\
  !*** ./src/custom-blocks/cta/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/cta', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call to Action', 'mojblocks'),
  icon: 'megaphone',
  category: 'mojblocks',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('cta'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Call to Action'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('banner')],
  example: {
    attributes: {
      ctaTitle: 'Add a Call to Action banner to your site',
      ctaText: 'Call To Action text',
      buttonLabel: 'Click me now',
      buttonLink: 'https://intranet.justice.gov.uk/'
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
    ctaClassName: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        ctaTitle = _props$attributes.ctaTitle,
        ctaText = _props$attributes.ctaText,
        buttonLink = _props$attributes.buttonLink,
        buttonLabel = _props$attributes.buttonLabel,
        className = props.className; // Set className attribute for PHP frontend to use

    setAttributes({
      ctaClassName: className
    }); // Grab newCtaTitle, set the value of ctaTitle to newCtaTitle.

    var onChangeCtaTitle = function onChangeCtaTitle(newCtaTitle) {
      setAttributes({
        ctaTitle: newCtaTitle
      });
    }; // Grab newCtaText, set the value of ctaText to newCtaText.


    var onChangeCtaText = function onChangeCtaText(newCtaText) {
      setAttributes({
        ctaText: newCtaText
      });
    }; // Grab newButtonLabel, set the value of buttonLabel to newButtonLabel.


    var onChangeButtonLabel = function onChangeButtonLabel(newButtonLabel) {
      setAttributes({
        buttonLabel: newButtonLabel
      });
    }; // Grab newButtonLink, set the value of buttonLink to newButtonLink.


    var onChangeButtonLink = function onChangeButtonLink(newButtonLink) {
      setAttributes({
        buttonLink: newButtonLink
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, "  mojblocks-cta")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-cta__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "mojblocks-cta__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-cta__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add a Call To Action title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: ctaTitle,
      onChange: onChangeCtaTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-cta__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add compelling text to send the message home', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeCtaText,
      value: ctaText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      className: "mojblocks-dropdown__input",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "mojblocks-button govuk-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    })))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/custom-blocks/featured-document/edit.js":
/*!*****************************************************!*\
  !*** ./src/custom-blocks/featured-document/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedDocumentEdit; });
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






var Fragment = wp.element.Fragment;
var d = new Date();
var templateFeaturedDocumentBlock = [['core/heading', {
  placeholder: 'Add featured document section title'
}]];
function FeaturedDocumentEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var featuredDocumentID = attributes.featuredDocumentID,
      featuredDocumentHasDate = attributes.featuredDocumentHasDate,
      className = attributes.className;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    var _select = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__["store"]),
        getEntityRecords = _select.getEntityRecords,
        getMedia = _select.getMedia,
        getUsers = _select.getUsers;

    var _select2 = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["store"]),
        getSettings = _select2.getSettings;

    var _getSettings = getSettings(),
        imageSizes = _getSettings.imageSizes,
        imageDimensions = _getSettings.imageDimensions;

    var posts = getEntityRecords('postType', 'document', {
      per_page: -1
    });
    return {
      allDocuments: posts
    };
  }),
      allDocuments = _useSelect.allDocuments;

  var docOptions = [{
    label: "None",
    value: '0'
  }];
  var docList = [{
    title: "No document selected",
    summary: "",
    date: "date",
    image: ""
  }];

  if (Array.isArray(allDocuments)) {
    for (var i = 0; i < allDocuments.length; i++) {
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

  var setDocument = function setDocument(newDocumentID) {
    setAttributes({
      featuredDocumentID: newDocumentID
    });
  };

  var setHasDate = function setHasDate(newDateSetting) {
    setAttributes({
      featuredDocumentHasDate: newDateSetting
    });
  };

  var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Featured Document settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Select document",
    value: featuredDocumentID,
    options: docOptions,
    onChange: setDocument
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Show/hide publish date",
    help: featuredDocumentHasDate === false ? 'The date will be hidden' : 'The date will be displayed',
    checked: featuredDocumentHasDate,
    onChange: setHasDate
  })));

  if (!Array.isArray(allDocuments) || !Array.isArray(docList)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-spinner"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-spinner-text govuk-body"
    }, "Loading"));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-document ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
      template: templateFeaturedDocumentBlock,
      templateLock: "all"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-row ".concat(featuredDocumentHasDate ? '' : 'mojblocks-featured-document-hide-date', " ")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-featured-document__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-document__text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-document__headline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-document__headline-link"
    }, docList[featuredDocumentID].title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-blocks/featured-document/edit.js");

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;
var __ = wp.i18n.__;


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
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/featured-news/edit.js":
/*!*************************************************!*\
  !*** ./src/custom-blocks/featured-news/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedNewsEdit; });
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







var Fragment = wp.element.Fragment;
var d = new Date();
var templateFeaturedNewsBlock = [['core/heading', {
  placeholder: 'Add featured news section title'
}]];
function FeaturedNewsEdit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var featuredNewsID = attributes.featuredNewsID,
      featuredNewsHasDate = attributes.featuredNewsHasDate,
      className = attributes.className;

  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(function (select) {
    var _select = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__["store"]),
        getEntityRecords = _select.getEntityRecords,
        getMedia = _select.getMedia,
        getUsers = _select.getUsers;

    var _select2 = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["store"]),
        getSettings = _select2.getSettings;

    var _getSettings = getSettings(),
        imageSizes = _getSettings.imageSizes,
        imageDimensions = _getSettings.imageDimensions;

    var posts = getEntityRecords('postType', 'news', {
      per_page: 20
    });
    return {
      latestNews: posts
    };
  }),
      latestNews = _useSelect.latestNews;

  var _useSelect2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(function (select) {
    if (featuredNewsID.length > 0) {
      var _select3 = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__["store"]),
          getEntityRecord = _select3.getEntityRecord;

      var posts = getEntityRecord('postType', 'news', featuredNewsID);
      return {
        featuredNewsArticle: posts
      };
    } else {
      return {
        featuredNewsArticle: false
      };
    }
  }),
      featuredNewsArticle = _useSelect2.featuredNewsArticle;

  var optionList = [{
    label: "None",
    value: '0'
  }];
  var newsList = [{
    title: "No news article selected",
    summary: "",
    date: "date",
    image: ""
  }];

  if (Array.isArray(latestNews)) {
    for (var i = 0; i < latestNews.length; i++) {
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

  var setHasDate = function setHasDate(newDateSetting) {
    setAttributes({
      featuredNewsHasDate: newDateSetting
    });
  };

  var setStory = function setStory(newStory) {
    setAttributes({
      featuredNewsID: newStory
    });
  };

  var inspectorControls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('News settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Select news",
    help: "Only news articles with a summary are available for selection",
    value: featuredNewsID,
    options: optionList,
    onChange: setStory
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
    label: "Show/hide article dates",
    help: featuredNewsHasDate === false ? 'The date will be hidden' : 'The date will be displayed',
    checked: featuredNewsHasDate,
    onChange: setHasDate
  })));

  if (!Array.isArray(latestNews) || !Array.isArray(newsList)) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-spinner"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-spinner-text govuk-body"
    }, "Loading"));
  } else {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, inspectorControls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-news mojblocks-featured-news--".concat(featuredNewsID, " ").concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
      template: templateFeaturedNewsBlock,
      templateLock: "all"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-row ".concat(featuredNewsHasDate ? '' : 'mojblocks-featured-news-hide-date', " ").concat(featuredNewsID != "0" && !newsList[featuredNewsID].image ? 'mojblocks-featured-news--no-image' : '', " ")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "mojblocks-featured-news__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-news__image",
      styles: "background:url('".concat(newsList[featuredNewsID].image, "')")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: newsList[featuredNewsID].image,
      alt: "Feature image for news article"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-news__text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-news__headline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#",
      className: "govuk-link govuk-!-font-size-24 govuk-!-font-weight-bold mojblocks-featured-news__headline-link"
    }, newsList[featuredNewsID].title)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body mojblocks-featured-news__summary"
    }, newsList[featuredNewsID].summary), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body-s mojblocks-featured-news__date"
    }, datify(newsList[featuredNewsID].date, d)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-featured-news__link"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-blocks/featured-news/edit.js");

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;
var __ = wp.i18n.__;


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
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/hero/index.js":
/*!*****************************************!*\
  !*** ./src/custom-blocks/hero/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
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
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        backgroundImage = _props$attributes.backgroundImage,
        heroImagePosition = _props$attributes.heroImagePosition,
        className = props.className; // Set className attribute for PHP frontend to use

    setAttributes({
      heroClassName: className
    }); // Load allowed blocks to be added to hero content

    var allowedBlocks = ['core/heading', 'core/list', 'core/paragraph', 'mojblocks/intro'];

    var onChangeBackgroundImage = function onChangeBackgroundImage(imageObject) {
      var imageSizes = imageObject.sizes; // determine the image size displayed with fallback

      var image = typeof imageSizes.hero !== 'undefined' ? imageSizes.hero.url : imageSizes.full.url;
      setAttributes({
        backgroundImage: image
      });
    };

    var optionList = [{
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
    var setPosition = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('center');

    var onChangeImagePosition = function onChangeImagePosition(newImagePosition) {
      setAttributes({
        heroImagePosition: newImagePosition
      });
      setPosition(newImagePosition);
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('Choose hero block banner image', 'mojblocks'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      className: "block-editor-block-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "For best results, uploaded images must meet a minimum size of 1366\xD7683 pixels (or aspect ratio of 2:1).")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onChangeBackgroundImage,
      type: "image",
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Upload image");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
      label: "Image position",
      help: "",
      value: heroImagePosition,
      options: optionList,
      onChange: onChangeImagePosition
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "".concat(className, "  mojblocks-hero")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__image",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: "".concat(heroImagePosition)
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: allowedBlocks
    }))))))];
  },
  // return null as frontend output is done via PHP
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/highlights-list/index.js":
/*!****************************************************!*\
  !*** ./src/custom-blocks/highlights-list/index.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/highlights-list', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlights List', 'mojblocks'),
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
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        listTitle = _props$attributes.listTitle,
        listItems = _props$attributes.listItems,
        className = props.className,
        setAttributes = props.setAttributes;
    setAttributes({
      listClassName: className
    }); // Grab newListTitle, set the value of listTitle to newListTitle.

    var onChangeListTitle = function onChangeListTitle(newListTitle) {
      setAttributes({
        listTitle: newListTitle
      });
    }; // Grab newListItems, set the value of listItems to newListItems.


    var onChangeListItems = function onChangeListItems(newListItems) {
      setAttributes({
        listItems: newListItems
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, "  mojblocks-highlights-list")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-highlights-list__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "mojblocks-highlights-list__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-highlights-list__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add highlights title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: listTitle,
      onChange: onChangeListTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-highlights-list__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add list item', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeListItems,
      value: listItems
    })))));
  },
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/custom-blocks/index.js":
/*!************************************!*\
  !*** ./src/custom-blocks/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/intro', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Intro Text', 'mojblocks'),
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
  edit: function edit(props) {
    var introText = props.attributes.introText,
        className = props.className,
        setAttributes = props.setAttributes; // Set className attribute for PHP frontend to use

    setAttributes({
      introClassName: className
    }); // Grab newIntroText, set the value of introText to newIntroText.

    var onChangeIntroText = function onChangeIntroText(newIntroText) {
      setAttributes({
        introText: newIntroText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " mojblocks-intro")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-intro--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-intro__content intro'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Some compelling text to send the message home', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeIntroText,
      value: introText
    })))))));
  },
  // return null as frontend output is done via PHP
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/custom-blocks/latest-news/index.js":
/*!************************************************!*\
  !*** ./src/custom-blocks/latest-news/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInputButton = _wp$blockEditor.URLInputButton;
var ALLOWED_MEDIA_TYPES = ['image'];
var PanelBody = wp.components.PanelBody;
var templateLatestNewsBlock = [['core/heading', {
  placeholder: 'Add latest news section title'
}]];
var title0 = 'Title automatically updated on preview page';
var title1 = 'Title automatically updated on preview page';
var title2 = 'Title automatically updated on preview page';
var date0 = 'Date';
var date1 = 'Date';
var date2 = 'Date';
var d = new Date();

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
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        latestNewsExpiry = _props$attributes.latestNewsExpiry,
        latestNewsEmptyText = _props$attributes.latestNewsEmptyText,
        latestNewsHasDate = _props$attributes.latestNewsHasDate,
        className = props.className;

    var setHasDate = function setHasDate(newDateSetting) {
      setAttributes({
        latestNewsHasDate: newDateSetting
      });
    };

    var setEmptyText = function setEmptyText(newEmptyText) {
      setAttributes({
        latestNewsEmptyText: newEmptyText
      });
    };

    var setExpiry = function setExpiry(newExpiry) {
      setAttributes({
        latestNewsExpiry: newExpiry
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: __('News settings'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
      label: "Show/hide article dates",
      help: latestNewsHasDate === false ? 'Dates will be hidden' : 'Dates will be displayed',
      checked: latestNewsHasDate,
      onChange: setHasDate
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
      label: "Text for no news",
      help: latestNewsEmptyText === "" ? "If there are no news articles to display, the block will be blank." : "This will be shown if there are no articles to display.",
      value: latestNewsEmptyText,
      onChange: setEmptyText
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalNumberControl"], {
      label: "Auto-hide after how many weeks",
      value: latestNewsExpiry,
      min: "0",
      onChange: setExpiry
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["__experimentalText"], null, !latestNewsExpiry ? "Articles will not expire." : "Articles will expire after " + latestNewsExpiry + " weeks."))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news mojblocks-latest-news--expiry-weeks-".concat(latestNewsExpiry, " ").concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
      template: templateLatestNewsBlock,
      templateLock: "all"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-row ".concat(latestNewsHasDate === false ? 'mojblocks-latest-news-hide-date' : '', " ")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, title0)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__date"
    }, date0)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, title1)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__date"
    }, date1)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__item"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body mojblocks-latest-news__headline"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: "#"
    }, title2)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-latest-news__date"
    }, date2))))));
  },
  save: function save() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null);
  }
});

/***/ }),

/***/ "./src/custom-blocks/quote/index.js":
/*!******************************************!*\
  !*** ./src/custom-blocks/quote/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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







var ALLOWED_MEDIA_TYPES = ['image'];
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/quote', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Quote', 'mojblocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A user quote block with an optional image background, quote text and name', 'mojblocks'),
  category: 'mojblocks',
  icon: 'format-quote',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('quote', 'mojblocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('testimonial', 'mojblocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('moj', 'mojblocks')],
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
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        quoteImgURL = _props$attributes.quoteImgURL,
        quoteContent = _props$attributes.quoteContent,
        quoteName = _props$attributes.quoteName,
        quoteAlignment = _props$attributes.quoteAlignment,
        quoteImgId = _props$attributes.quoteImgId,
        className = props.className; // Set className attribute for PHP frontend to use

    setAttributes({
      quoteClassName: className
    });

    var onRemoveImage = function onRemoveImage() {
      setAttributes({
        quoteImgURL: null,
        quoteImgId: null
      });
    };

    return [// Show the alignment toolbar on focus
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["BlockControls"], {
      key: "controls"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["AlignmentToolbar"], {
      value: quoteAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          quoteAlignment: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-quote",
      "data-src": quoteImgURL
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " mojblocks-quote__image ") + (quoteImgId ? 'mojblocks-quote__image-selected' : ''),
      style: {
        backgroundImage: "url(".concat(quoteImgURL, ")")
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaUpload"], {
      buttonProps: {
        className: 'change-image'
      },
      onSelect: function onSelect(img) {
        return setAttributes({
          quoteImgId: img.id,
          quoteImgURL: img.url
        });
      },
      allowed: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: quoteImgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: 'mojblocks-quote__image__button ' + (quoteImgId ? 'mojblocks-quote__image__button-change' : 'mojblocks-quote__image__button-add'),
          onClick: open
        }, _assets_svg_index__WEBPACK_IMPORTED_MODULE_6__["default"].upload), quoteImgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: "mojblocks-quote__image__button mojblocks-quote__image__button-remove",
          onClick: onRemoveImage
        }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
          icon: 'dismiss'
        })));
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-quote__content",
      style: {
        textAlign: quoteAlignment
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-quote__content__icon"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dashicon"], {
      icon: "format-quote"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "q",
      multiline: "span",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add quotation text...', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: quoteContent,
      allowedFormats: ['core/bold', 'core/italic', 'core/strikethrough', 'core/link'],
      className: "mojblocks-quote__content__quote",
      onChange: function onChange(value) {
        return setAttributes({
          quoteContent: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add name', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: quoteName,
      className: "mojblocks-quote__content__name",
      onChange: function onChange(value) {
        return setAttributes({
          quoteName: value
        });
      }
    }))))];
  },
  // return null as frontend output is done via PHP
  save: function save() {
    return null;
  }
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_5___default()(function () {
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["unregisterBlockType"])('core/quote');
});

/***/ }),

/***/ "./src/custom-blocks/reveal/index.js":
/*!*******************************************!*\
  !*** ./src/custom-blocks/reveal/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('mojblocks/reveal', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Reveal', 'mojblocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Arrow toggle to reveal text", "mojblocks"),
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
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        _props$attributes = props.attributes,
        revealTitle = _props$attributes.revealTitle,
        revealContent = _props$attributes.revealContent,
        className = props.className; // Set className attribute for PHP frontend to use

    setAttributes({
      revealClassName: className
    }); // Grab newRevealTitle, set the value of revealTitle to newRevealTitle.

    var onChangeRevealTitle = function onChangeRevealTitle(newRevealTitle) {
      setAttributes({
        revealTitle: newRevealTitle
      });
    }; // Grab newrevealContent, set the value of revealContent to newrevealContent.


    var onChangeRevealContent = function onChangeRevealContent(newRevealContent) {
      setAttributes({
        revealContent: newRevealContent
      });
    };

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-reveal"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("details", {
      className: "govuk-details",
      "data-module": "govuk-details",
      open: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("summary", {
      className: "govuk-details__summary"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-reveal__title govuk-details__summary-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      value: revealTitle,
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add reveal title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeRevealTitle
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-reveal__content govuk-details__text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add reveal content', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeRevealContent,
      value: revealContent
    })))))))];
  },
  // return null as frontend output is done via PHP
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./src/custom-blocks/staggered-box/index.js":
/*!**************************************************!*\
  !*** ./src/custom-blocks/staggered-box/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    registerBlockStyle = _wp$blocks.registerBlockStyle;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInputButton = _wp$blockEditor.URLInputButton;
var ALLOWED_MEDIA_TYPES = ['image'];
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
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        staggeredBoxContent = _props$attributes.staggeredBoxContent,
        staggeredBoxImageURL = _props$attributes.staggeredBoxImageURL,
        staggeredBoxButtonText = _props$attributes.staggeredBoxButtonText,
        staggeredBoxButtonLink = _props$attributes.staggeredBoxButtonLink,
        staggeredBoxTitle = _props$attributes.staggeredBoxTitle,
        staggeredBoxImageAltText = _props$attributes.staggeredBoxImageAltText,
        className = props.className,
        setAttributes = props.setAttributes;
    setAttributes({
      staggeredBoxClassName: className
    });

    var onChangeStaggeredBoxTitle = function onChangeStaggeredBoxTitle(newStaggeredBoxTitle) {
      setAttributes({
        staggeredBoxTitle: newStaggeredBoxTitle
      });
    };

    var onChangeStaggeredBoxContent = function onChangeStaggeredBoxContent(newStaggeredBoxContent) {
      setAttributes({
        staggeredBoxContent: newStaggeredBoxContent
      });
    };

    var onChangeStaggeredBoxButtonText = function onChangeStaggeredBoxButtonText(newStaggeredBoxButtonText) {
      setAttributes({
        staggeredBoxButtonText: newStaggeredBoxButtonText
      });
    };

    var onChangeStaggeredBoxButtonLink = function onChangeStaggeredBoxButtonLink(newStaggeredBoxButtonLink) {
      setAttributes({
        staggeredBoxButtonLink: newStaggeredBoxButtonLink
      });
    };

    var onStaggeredBoxImageSelect = function onStaggeredBoxImageSelect(newStaggeredBoxImageURL) {
      setAttributes({
        staggeredBoxImageURL: newStaggeredBoxImageURL.sizes.full.url
      });
      setAttributes({
        staggeredBoxImageAltText: newStaggeredBoxImageURL.alt
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onStaggeredBoxImageSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: staggeredBoxImageURL,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Open Media Library");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " mojblocks-staggered-box")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-width-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-grid-row"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-staggered-box__image-container govuk-grid-column-two-thirds "
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "mojblocks-staggered-block__image",
      src: staggeredBoxImageURL,
      alt: staggeredBoxImageAltText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-staggered-box__text-container govuk-grid-column-one-half"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      value: staggeredBoxTitle,
      onChange: onChangeStaggeredBoxTitle,
      className: "mojblocks-staggered-box__title",
      placeholder: __('Add staggered box title', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      value: staggeredBoxContent,
      onChange: onChangeStaggeredBoxContent,
      className: "mojblocks-staggered-box__content",
      placeholder: __('Add staggered box content', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      label: __('Button link', 'mojblocks'),
      onChange: onChangeStaggeredBoxButtonLink,
      url: staggeredBoxButtonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: staggeredBoxButtonText,
      onChange: onChangeStaggeredBoxButtonText,
      className: "mojblocks-staggered-box__button",
      placeholder: __('Add staggered box button', 'mojblocks')
    }))))));
  },
  save: function save() {
    return null;
  }
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  // Remove the default styles
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["unregisterBlockStyle"])('core/button', ['outline', 'squared', 'fill']); // Add custom CSS class

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockStyle"])('core/button', [{
    name: 'mojblocks-cta-button',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Button - CTA style', 'mojblocks'),
    isDefault: true
  }]); // Add custom CSS class

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockStyle"])('core/buttons', [{
    name: 'mojblocks-cta-button',
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Button - CTA style', 'mojblocks'),
    isDefault: true
  }]);
});

/***/ }),

/***/ "./src/extended-core-blocks/file/index.js":
/*!************************************************!*\
  !*** ./src/extended-core-blocks/file/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
var addFilter = wp.hooks.addFilter;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
/**
 * Extention utility
 * Parse file href to get a file's extention (.pdf, .doc, .xml)
 *
 */

function getFileExtension() {
  var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2);
}
/**
 * Append the file's extention type to the end of the file
 *
 * @param {Object} BlockEdit BlockEdit for the block.
 *
 * @return {Object} BlockEdit Modified settings.
 */


var addFileExtention = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    // Apply to core file block only
    if ('core/file' !== props.name) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
    }

    var appendedFile = '(' + getFileExtension(props.attributes.href).toUpperCase() + ')'; // The downloadButtonText is not being used as part
    // of our design, so we are using it to append the
    // extention.

    props.attributes.downloadButtonText = appendedFile;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props);
  };
}, 'addFileExtention');
addFilter('editor.BlockEdit', 'core/file', addFileExtention);

/***/ }),

/***/ "./src/extended-core-blocks/index.js":
/*!*******************************************!*\
  !*** ./src/extended-core-blocks/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/extended-core-blocks/button/index.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file */ "./src/extended-core-blocks/file/index.js");
/**
 * Import extended block code
 */
// Extends both button and buttons core blocks



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_blocks_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-blocks/index */ "./src/custom-blocks/index.js");
/* harmony import */ var _extended_core_blocks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extended-core-blocks/index */ "./src/extended-core-blocks/index.js");
/**
 * Import all JS from modules
 */



/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map