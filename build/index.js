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
registerBlockType("mojblocks/example", {
  title: __("Example Block", "mojblocks"),
  category: "mojblocks",
  icon: "admin-post",
  example: {
    attributes: {
      lastSaved: __('5 July 1948')
    }
  },
  attributes: {
    lastSaved: {
      type: "string",
      source: "html",
      selector: ".last-saved-date"
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
      var postDate = new Date(savedDate);
      var formattedDate = format('d F Y', postDate);

      if (lastSaved !== formattedDate) {
        if (typeof lastSaved === "undefined") {
          setAttributes({
            lastSaved: formattedDate
          });
          dispatch('core/editor').savePost();
        } else {
          setAttributes({
            lastSaved: formattedDate
          });
        }
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "nhsuk-review-date"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
        className: "nhsuk-body-s"
      }, "Pusheen: ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
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
    }, "Pugsheen : ", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "last-saved-date"
    }, lastSaved)));
  }
});

/***/ }),

/***/ "./src/01-highlights-list/index.js":
/*!*****************************************!*\
  !*** ./src/01-highlights-list/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/02-cta/index.js":
/*!*****************************!*\
  !*** ./src/02-cta/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls,
    URLInputButton = _wp$blockEditor.URLInputButton;
var ALLOWED_MEDIA_TYPES = ['image'];
registerBlockType("mojblocks/staggered-block", {
  title: __("Staggered Block", "mojblocks"),
  description: __('Display content on top of a staggered background image'),
  category: "mojblocks",
  icon: "admin-page",
  keywords: [__('staggered block'), __('photo block')],
  example: {
    attributes: {
      staggeredBoxTitle: 'Exciting title',
      staggeredBoxContent: 'Some exciting text that fits with the title',
      staggeredBoxButtonLink: 'https://www.google.com/',
      staggeredBoxButtonText: 'Interesting link',
      staggeredBoxImageURL: 'https://giphy.com/gifs/xFoV7P0JsHwoZvHXP6'
    }
  },
  attributes: {
    staggeredBoxTitle: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__title"
    },
    staggeredBoxContent: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__content"
    },
    staggeredBoxButtonText: {
      type: "string",
      source: "html",
      selector: ".mojblocks-staggered-box__button"
    },
    staggeredBoxButtonLink: {
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    staggeredBoxImageURL: {
      type: "string",
      default: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/header-pusheen.gif'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        staggeredBoxContent = _props$attributes.staggeredBoxContent,
        staggeredBoxImageURL = _props$attributes.staggeredBoxImageURL,
        staggeredBoxButtonText = _props$attributes.staggeredBoxButtonText,
        staggeredBoxButtonLink = _props$attributes.staggeredBoxButtonLink,
        staggeredBoxTitle = _props$attributes.staggeredBoxTitle,
        setAttributes = props.setAttributes;

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
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onStaggeredBoxImageSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      type: "image",
      value: staggeredBoxImageURL,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          onClick: open
        }, "Open Media Library");
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-staggered-block__text-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      value: staggeredBoxTitle,
      onChange: onChangeStaggeredBoxTitle,
      placeholder: __('Add staggered box title', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      value: staggeredBoxContent,
      onChange: onChangeStaggeredBoxContent,
      placeholder: __('Add staggered box content', 'mojblocks'),
      keepPlaceholderOnFocus: true
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInputButton, {
      label: __('Button link', 'mojblocks'),
      onChange: onChangeStaggeredBoxButtonLink,
      url: staggeredBoxButtonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      value: staggeredBoxButtonText,
      onChange: onChangeStaggeredBoxButtonText,
      placeholder: __('Add staggered box button', 'mojblocks')
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "mojblocks-staggered-block__image",
      src: staggeredBoxImageURL,
      alt: ""
    }));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        staggeredBoxTitle = _props$attributes2.staggeredBoxTitle,
        staggeredBoxContent = _props$attributes2.staggeredBoxContent,
        staggeredBoxButtonText = _props$attributes2.staggeredBoxButtonText,
        staggeredBoxButtonLink = _props$attributes2.staggeredBoxButtonLink,
        staggeredBoxImageURL = _props$attributes2.staggeredBoxImageURL;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-staggered-block__text-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h2",
      value: staggeredBoxTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: staggeredBoxContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: staggeredBoxButtonLink
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "button",
      value: staggeredBoxButtonText
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      className: "mojblocks-staggered-block__image",
      src: staggeredBoxImageURL,
      alt: ""
    }));
  }
});
wp.blocks.registerBlockStyle('mojblocks/staggered-block', [{
  name: 'default',
  label: 'Default',
  isDefault: true
}, {
  name: 'staggered-block-image-left',
  label: 'Image aligned on left'
}]);

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
/* harmony import */ var _01_highlights_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_01_highlights_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _02_cta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-cta */ "./src/02-cta/index.js");
/* harmony import */ var _02_cta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_02_cta__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _03_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./03-hero */ "./src/03-hero/index.js");
/* harmony import */ var _03_hero__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_03_hero__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _04_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./04-accordion */ "./src/04-accordion/index.js");
/* harmony import */ var _04_accordion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_04_accordion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./05-video */ "./src/05-video/index.js");
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_05_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _06_staggered_boxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./06-staggered-boxes */ "./src/06-staggered-boxes/index.js");
/* harmony import */ var _07_quote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./07-quote */ "./src/07-quote/index.js");
/* harmony import */ var _07_quote__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_07_quote__WEBPACK_IMPORTED_MODULE_7__);
/**
 * Import blocks as components.
 */









/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map