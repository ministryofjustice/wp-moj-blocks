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

/***/ "./src/00-example/index.js":
/*!*********************************!*\
  !*** ./src/00-example/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var format = wp.date.format;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    subscribe = _wp$data.subscribe,
    select = _wp$data.select,
    withSelect = _wp$data.withSelect;
registerBlockType('mojblocks/example', {
  title: __('Example Block', 'mojblocks'),
  category: 'mojblocks',
  icon: 'admin-post',
  example: {
    attributes: {
      lastSaved: __('5 July 1948')
    }
  },
  attributes: {
    lastSaved: {
      type: 'string',
      source: 'html',
      selector: '.last-saved-date'
    }
  },
  edit: withSelect(function (select) {
    return {
      savedDate: select('core/editor').getEditedPostAttribute('modified')
    };
  })(function (_ref) {
    var savedDate = _ref.savedDate,
        className = _ref.className,
        setAttributes = _ref.setAttributes,
        lastSaved = _ref.attributes.lastSaved;

    if (savedDate) {
      var formattedDate = format('d F Y', new Date(savedDate));

      if (lastSaved !== formattedDate) {
        setAttributes({
          lastSaved: formattedDate
        });

        if (typeof lastSaved === 'undefined') {
          setAttributes({
            lastSaved: formattedDate
          });
          dispatch('core/editor').savePost();
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "nhsuk-review-date"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: "nhsuk-body-s"
      }, "Page last reviewed: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
        className: "last-saved-date"
      }, lastSaved)));
    }
  }),
  save: function save(props) {
    var className = props.className,
        lastSaved = props.attributes.lastSaved;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "nhsuk-review-date"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "nhsuk-body-s"
    }, "Page last reviewed: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "last-saved-date"
    }, lastSaved)));
  }
});

/***/ }),

/***/ "./src/01-highlights-list/index.js":
/*!*****************************************!*\
  !*** ./src/01-highlights-list/index.js ***!
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
      listText: 'This is a list item'
    }
  },
  attributes: {
    listTitle: {
      type: 'string',
      source: 'html',
      selector: '.mojuk-highlights-list__heading-text'
    },
    listText: {
      type: 'array',
      source: 'children',
      multiline: 'li',
      selector: '.mojuk-highlights-list__content > ul'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        listTitle = _props$attributes.listTitle,
        listText = _props$attributes.listText,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newListTitle, set the value of listTitle to newListTitle.

    var onChangeListTitle = function onChangeListTitle(newListTitle) {
      setAttributes({
        listTitle: newListTitle
      });
    }; // Grab newListText, set the value of listText to newListText.


    var onChangeListText = function onChangeListText(newListText) {
      setAttributes({
        listText: newListText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-highlights-list__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojuk-highlights-list__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojuk-highlights-list__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlights title', 'mojblocks'),
      value: listTitle,
      onChange: onChangeListTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojuk-highlights-list__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlights item', 'mojblocks'),
      onChange: onChangeListText,
      value: listText
    })));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        listTitle = _props$attributes2.listTitle,
        listText = _props$attributes2.listText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-grid-column-width mojuk-highlights-list--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-highlights-list__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojuk-highlights-list__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojuk-highlights-list__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: listTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojuk-highlights-list__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "ul",
      multiline: "li",
      value: listText
    })));
  }
}); // style variations

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('mojblocks/highlights-list', {
  name: 'moj-blue',
  label: 'MoJ Blue',
  isDefault: true
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('mojblocks/highlights-list', {
  name: 'judicial-teal',
  label: 'Judicial Teal'
});

/***/ }),

/***/ "./src/02-cta/index.js":
/*!*****************************!*\
  !*** ./src/02-cta/index.js ***!
  \*****************************/
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
  example: {
    attributes: {
      ctaTitle: 'Interact with this amazing CTA!',
      ctaText: 'This is the CTA text',
      buttonLabel: 'Click me now!',
      buttonLink: 'https://intranet.justice.gov.uk/'
    }
  },
  attributes: {
    ctaTitle: {
      type: 'string',
      source: 'html',
      selector: '.mojuk-cta__heading-text'
    },
    ctaText: {
      type: 'string',
      source: 'html',
      selector: '.mojuk-cta__content'
    },
    buttonLabel: {
      type: 'string',
      source: 'html',
      selector: '.mojuk-button'
    },
    buttonLink: {
      type: 'string',
      source: 'attribute',
      selector: 'a.mojuk-button',
      attribute: 'href'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        ctaTitle = _props$attributes.ctaTitle,
        ctaText = _props$attributes.ctaText,
        buttonLabel = _props$attributes.buttonLabel,
        buttonLink = _props$attributes.buttonLink,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newCtaTitle, set the value of ctaTitle to newCtaTitle.

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
      className: "".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-cta__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojuk-cta__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojuk-cta__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A great call-to-action title', 'mojblocks'),
      value: ctaTitle,
      onChange: onChangeCtaTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojuk-cta__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Some compelling text to send the message home!', 'mojblocks'),
      onChange: onChangeCtaText,
      value: ctaText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      className: "mojblocks-dropdown__input",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "mojuk-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    }));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        ctaTitle = _props$attributes2.ctaTitle,
        ctaText = _props$attributes2.ctaText,
        buttonLabel = _props$attributes2.buttonLabel,
        buttonLink = _props$attributes2.buttonLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-grid-column-width mojuk-cta--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-cta__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojuk-cta__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojuk-cta__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: ctaTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojuk-cta__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: ctaText,
      multiline: "p"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: buttonLink,
      className: "mojuk-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: buttonLabel
    })));
  }
}); // style variations

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('mojblocks/cta', {
  name: 'moj-blue',
  label: 'MoJ Blue',
  isDefault: true
});
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockStyle"])('mojblocks/cta', {
  name: 'judicial-teal',
  label: 'Judicial Teal'
});

/***/ }),

/***/ "./src/03-hero/index.js":
/*!******************************!*\
  !*** ./src/03-hero/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/04-accordion/index.js":
/*!***********************************!*\
  !*** ./src/04-accordion/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/05-video/index.js":
/*!*******************************!*\
  !*** ./src/05-video/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/06-staggered-boxes/index.js":
/*!*****************************************!*\
  !*** ./src/06-staggered-boxes/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/07-quote/index.js":
/*!*******************************!*\
  !*** ./src/07-quote/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _00_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./00-example */ "./src/00-example/index.js");
/* harmony import */ var _01_highlights_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./01-highlights-list */ "./src/01-highlights-list/index.js");
/* harmony import */ var _02_cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-cta */ "./src/02-cta/index.js");
/* harmony import */ var _03_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./03-hero */ "./src/03-hero/index.js");
/* harmony import */ var _03_hero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_03_hero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _04_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./04-accordion */ "./src/04-accordion/index.js");
/* harmony import */ var _04_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_04_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./05-video */ "./src/05-video/index.js");
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_05_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _06_staggered_boxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./06-staggered-boxes */ "./src/06-staggered-boxes/index.js");
/* harmony import */ var _06_staggered_boxes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_06_staggered_boxes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _07_quote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./07-quote */ "./src/07-quote/index.js");
/* harmony import */ var _07_quote__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_07_quote__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Import blocks as components.
 */









/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map