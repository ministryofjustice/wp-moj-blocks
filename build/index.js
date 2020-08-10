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
      selector: '.mojblocks-highlights-list__heading-text'
    },
    listText: {
      type: 'array',
      source: 'children',
      multiline: 'li',
      selector: '.mojblocks-highlights-list__content > ul'
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
    }; // add a class to li


    var onChangeListTextSetClass = function onChangeListTextSetClass(newListText) {
      setAttributes({
        listText: newListText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'nhsuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-highlights-list__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojblocks-highlights-list__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-highlights-list__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlights title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: listTitle,
      onChange: onChangeListTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-highlights-list__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      tagName: "ul",
      multiline: "li",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlights item', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeListText,
      value: listText
    })))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        listTitle = _props$attributes2.listTitle,
        listText = _props$attributes2.listText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-highlights-list"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-highlights-list__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojblocks-highlights-list__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-highlights-list__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: listTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-highlights-list__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "ul",
      multiline: "li",
      value: listText
    })))));
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
      selector: '.mojblocks-cta__heading-text'
    },
    ctaText: {
      type: 'string',
      source: 'html',
      selector: '.mojblocks-cta__content'
    },
    buttonLabel: {
      type: 'string',
      source: 'html',
      selector: '.mojblocks-button'
    },
    buttonLink: {
      type: 'string',
      source: 'attribute',
      selector: 'a.mojblocks-button',
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
      className: 'nhsuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-cta__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojblocks-cta__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-cta__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A great call-to-action title', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      value: ctaTitle,
      onChange: onChangeCtaTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-cta__content'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Some compelling text to send the message home!', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeCtaText,
      value: ctaText
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["URLInputButton"], {
      className: "mojblocks-dropdown__input",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('CTA Link', 'mojblocks'),
      onChange: onChangeButtonLink,
      url: buttonLink
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      className: "mojblocks-button",
      value: buttonLabel,
      onChange: onChangeButtonLabel,
      placeholder: "Button label"
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        ctaTitle = _props$attributes2.ctaTitle,
        ctaText = _props$attributes2.ctaText,
        buttonLabel = _props$attributes2.buttonLabel,
        buttonLink = _props$attributes2.buttonLink;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-cta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'nhsuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-cta__heading-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      className: "mojblocks-cta__heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      role: "text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "mojblocks-cta__heading-text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: ctaTitle
    }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-cta__content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: ctaText,
      multiline: "p"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: buttonLink,
      className: "mojblocks-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: buttonLabel
    })))));
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
registerBlockType("mojblocks/hero", {
  title: __("Hero", "mojblocks"),
  description: __("Full width hero banner with title and text", "mojblocks"),
  category: "mojblocks",
  icon: "schedule",
  attributes: {
    backgroundImage: {
      type: 'string'
    },
    heroTitle: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    heroText: {
      type: 'string',
      source: 'html',
      selector: '.mojblocks-hero__content'
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className;
    var backgroundImage = attributes.backgroundImage,
        heroTitle = attributes.heroTitle,
        heroText = attributes.heroText;

    function onImageSelect(imageObject) {
      setAttributes({
        backgroundImage: imageObject.sizes.full.url
      });
    }

    function onTitleChange(changes) {
      setAttributes({
        heroTitle: changes
      });
    }

    function onChangeHeroText(changes) {
      setAttributes({
        heroText: changes
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a background image:"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: onImageSelect,
      type: "image",
      value: backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: "button button-primary button-hero",
          onClick: open
        }, "Upload Image!");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "".concat(className, "  mojblocks-hero")
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__image",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "h2",
      className: "mojblocks-hero__title",
      value: attributes.heroTitle,
      keepPlaceholderOnFocus: true,
      onChange: onTitleChange,
      placeholder: "Enter your hero title here!"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-hero__content intro'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      multiline: "p",
      placeholder: __('Enter your hero text here!', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeHeroText,
      value: attributes.heroText
    })))))))];
  },
  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    var backgroundImage = attributes.backgroundImage,
        heroTitle = attributes.heroTitle,
        heroText = attributes.heroText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
      className: "mojblocks-hero"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__image",
      style: {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-width-container'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'govuk-grid-row'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__overlay"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "govuk-grid-column-three-quarters"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "h2",
      className: "mojblocks-hero__title",
      value: attributes.heroTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-hero__content intro"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: attributes.heroText,
      multiline: "p"
    })))))));
  }
});

/***/ }),

/***/ "./src/04-accordion/index.js":
/*!***********************************!*\
  !*** ./src/04-accordion/index.js ***!
  \***********************************/
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
  title: __('Accordion (MoJ Blocks)', 'mojblocks'),
  description: __('Display content in an accordion format.'),
  icon: "list-view",
  category: 'mojblocks',
  keywords: [__('accordion'), __('sections'), __('lists')],
  edit: function edit(props) {
    // Load allowed blocks on repeater
    var allowedBlocks = ['mojblocks/accordion-section']; // Load template/block when block is selected

    var templates = [['mojblocks/accordion-section', {
      placeholder: 'Add accordion sections'
    }]];
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion",
      "data-module": "govuk-accordion",
      id: "accordion-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: templates,
      allowedBlocks: allowedBlocks
    }));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion",
      "data-module": "govuk-accordion",
      id: "accordion-default"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});
/**
 * MOJBLOCKS: Accordion section
 *
 * Inner-block. Displayed only in the parent accordion block.
 */

registerBlockType("mojblocks/accordion-section", {
  title: __("MoJBlocks Accordion Section", "mojblocks"),
  category: "mojblocks",
  parent: ['mojblocks/accordion'],
  attributes: {
    accordionSectionTitle: {
      type: "string",
      source: "html",
      selector: ".govuk-accordion__section-button"
    },
    accordionSectionTextArea: {
      type: "string",
      source: "html",
      selector: ".govuk-body"
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        accordionSectionTitle = _props$attributes.accordionSectionTitle,
        accordionSectionTextArea = _props$attributes.accordionSectionTextArea,
        setAttributes = props.setAttributes;

    var onChangeAccordionSectionTitle = function onChangeAccordionSectionTitle(newAccordionTitle) {
      setAttributes({
        accordionSectionTitle: newAccordionTitle
      });
    };

    var onChangeAccordionSectionTextArea = function onChangeAccordionSectionTextArea(newAccordionSectionTextArea) {
      setAttributes({
        accordionSectionTextArea: newAccordionSectionTextArea
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion__section"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion__section-header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "govuk-accordion__section-heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "govuk-accordion__section-button",
      id: "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __('Add title', 'mojblocks'),
      value: accordionSectionTitle,
      onChange: onChangeAccordionSectionTitle,
      keepPlaceholderOnFocus: true
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "accordion-default-content-1",
      className: "govuk-accordion__section-content",
      "aria-labelledby": "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      placeholder: __('Add content', 'mojblocks'),
      value: accordionSectionTextArea,
      onChange: onChangeAccordionSectionTextArea,
      keepPlaceholderOnFocus: true
    }))));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        accordionSectionTitle = _props$attributes2.accordionSectionTitle,
        accordionSectionTextArea = _props$attributes2.accordionSectionTextArea;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion__section"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-accordion__section-header"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      className: "govuk-accordion__section-heading"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
      className: "govuk-accordion__section-button",
      id: "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: accordionSectionTitle
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: "accordion-default-content-1",
      className: "govuk-accordion__section-content",
      "aria-labelledby": "accordion-default-heading-1"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "govuk-body"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: accordionSectionTextArea
    }))));
  }
});

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
      attribute: 'href',
      selector: 'a.mojblocks-staggered-box__button'
    },
    staggeredBoxImageURL: {
      type: "string",
      default: ''
    },
    staggeredBoxImageAltText: {
      type: "string",
      source: "attribute",
      attribute: "alt"
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
        className = _props$attributes.className,
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
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        staggeredBoxTitle = _props$attributes2.staggeredBoxTitle,
        staggeredBoxContent = _props$attributes2.staggeredBoxContent,
        staggeredBoxButtonText = _props$attributes2.staggeredBoxButtonText,
        staggeredBoxButtonLink = _props$attributes2.staggeredBoxButtonLink,
        staggeredBoxImageURL = _props$attributes2.staggeredBoxImageURL,
        staggeredBoxImageAltText = _props$attributes2.staggeredBoxImageAltText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-staggered-box"
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
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "mojblocks-staggered-box__title",
      tagName: "h2",
      value: staggeredBoxTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      className: "mojblocks-staggered-box__content",
      tagName: "p",
      value: staggeredBoxContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: staggeredBoxButtonLink,
      className: "mojblocks-staggered-box__button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      value: staggeredBoxButtonText
    }))))));
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

/***/ "./src/07-quote/index.js":
/*!*******************************!*\
  !*** ./src/07-quote/index.js ***!
  \*******************************/
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
/* harmony import */ var _assets_svg_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/index */ "./assets/svg/index.js");


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
      type: 'string',
      source: 'attribute',
      selector: '.mojblocks-quote',
      attribute: 'data-src'
    },
    quoteContent: {
      type: 'string',
      selector: '.mojblocks-quote__content__quote',
      source: 'html'
    },
    quoteName: {
      type: 'string',
      selector: '.mojblocks-quote__content__name',
      source: 'html'
    },
    quoteAlignment: {
      type: 'string'
    },
    quoteImgId: {
      type: 'number'
    }
  },
  edit: function edit(props) {
    // Setup the attributes
    var setAttributes = props.setAttributes,
        attributes = props.attributes,
        className = props.className;

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
      value: attributes.quoteAlignment,
      onChange: function onChange(value) {
        return setAttributes({
          quoteAlignment: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-quote",
      "data-src": attributes.quoteImgURL
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "".concat(className, " mojblocks-quote__image ") + (attributes.quoteImgId ? 'mojblocks-quote__image-selected' : ''),
      style: {
        backgroundImage: "url(".concat(attributes.quoteImgURL, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
      value: attributes.quoteImgId,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          className: 'mojblocks-quote__image__button ' + (attributes.quoteImgId ? 'mojblocks-quote__image__button-change' : 'mojblocks-quote__image__button-add'),
          onClick: open
        }, _assets_svg_index__WEBPACK_IMPORTED_MODULE_5__["default"].upload), attributes.quoteImgId && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
        textAlign: attributes.quoteAlignment
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
      value: attributes.quoteContent,
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
      value: attributes.quoteName,
      className: "mojblocks-quote__content__name",
      onChange: function onChange(value) {
        return setAttributes({
          quoteName: value
        });
      }
    }))))];
  },
  save: function save(props) {
    var _props$attributes = props.attributes,
        quoteName = _props$attributes.quoteName,
        quoteContent = _props$attributes.quoteContent,
        quoteAlignment = _props$attributes.quoteAlignment,
        quoteImgURL = _props$attributes.quoteImgURL;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-quote',
      "data-src": quoteImgURL
    }, typeof quoteImgURL === "string" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-quote__image mojblocks-quote__image-selected",
      style: {
        backgroundImage: "url(".concat(quoteImgURL, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "q",
      className: "mojblocks-quote__content__quote",
      value: quoteContent
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      tagName: "p",
      className: "mojblocks-quote__content__name",
      value: quoteName
    }))));
  }
});

/***/ }),

/***/ "./src/08-intro/index.js":
/*!*******************************!*\
  !*** ./src/08-intro/index.js ***!
  \*******************************/
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
      type: 'string',
      source: 'html',
      selector: '.mojblocks-intro__content'
    }
  },
  edit: function edit(props) {
    var introText = props.attributes.introText,
        className = props.className,
        setAttributes = props.setAttributes; // Grab newIntroText, set the value of introText to newIntroText.

    var onChangeIntroText = function onChangeIntroText(newIntroText) {
      setAttributes({
        introText: newIntroText
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-intro--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: 'mojblocks-intro__content intro'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Some compelling text to send the message home!', 'mojblocks'),
      keepPlaceholderOnFocus: true,
      onChange: onChangeIntroText,
      value: introText
    })));
  },
  save: function save(props) {
    var introText = props.attributes.introText;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-intro--type"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "mojblocks-intro__content intro"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      value: introText,
      multiline: "p"
    })));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _01_highlights_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01-highlights-list */ "./src/01-highlights-list/index.js");
/* harmony import */ var _02_cta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./02-cta */ "./src/02-cta/index.js");
/* harmony import */ var _03_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./03-hero */ "./src/03-hero/index.js");
/* harmony import */ var _04_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./04-accordion */ "./src/04-accordion/index.js");
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./05-video */ "./src/05-video/index.js");
/* harmony import */ var _05_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_05_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _06_staggered_boxes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./06-staggered-boxes */ "./src/06-staggered-boxes/index.js");
/* harmony import */ var _07_quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./07-quote */ "./src/07-quote/index.js");
/* harmony import */ var _08_intro__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./08-intro */ "./src/08-intro/index.js");
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

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

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