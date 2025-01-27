/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






/**
 * Adds custom attributes to the core/columns and core/column blocks.
 *
 * @since 0.1.0
 * @param {Object} settings The block settings object.
 * @param {string} name    The block name/type (e.g., 'core/columns' or 'core/column').
 * @return {Object} Modified block settings with additional attributes.
 */

(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.registerBlockType', 'mai-column-order/add-attributes', (settings, name) => {
  if ('core/columns' === name) {
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        isReversedDirectionOnMobile: {
          type: 'boolean',
          default: false
        }
      }
    };
  }
  if ('core/column' === name) {
    return {
      ...settings,
      attributes: {
        ...settings.attributes,
        orderMobile: {
          type: 'number',
          default: 0
        }
      }
    };
  }
  return settings;
});

/**
 * Adds inspector controls to the core/columns and core/column blocks.
 * Allows configuring mobile direction and order settings.
 *
 * @since 0.1.0
 * @param {Function} BlockEdit Original block edit component.
 * @return {Function} Enhanced block edit component with additional controls.
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockEdit', 'mai-column-order/add-inspector-controls', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      name,
      attributes,
      setAttributes
    } = props;
    const {
      isReversedDirectionOnMobile,
      orderMobile
    } = attributes;

    // Handle columns block.
    if ('core/columns' === name) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              padding: '0 16px 8px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Reverse direction on mobile', 'mai-column-order'),
              checked: isReversedDirectionOnMobile,
              onChange: () => {
                setAttributes({
                  isReversedDirectionOnMobile: !isReversedDirectionOnMobile
                });
              }
            })
          })
        })]
      });
    }

    // Handle column block.
    if ('core/column' === name) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
          ...props
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              padding: '0 16px 8px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Order on mobile', 'mai-column-order'),
              value: orderMobile,
              onChange: value => {
                setAttributes({
                  orderMobile: value
                });
              },
              min: -4,
              max: 8,
              allowReset: true,
              resetFallbackValue: 0
            })
          })
        })]
      });
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockEdit, {
      ...props
    });
  };
}));

/**
 * Applies custom styles and classes to blocks in the editor.
 * Handles mobile direction for columns and order for individual columns.
 *
 * @since 0.1.0
 * @param {Function} BlockListBlock Original block list block component.
 * @return {Function} Enhanced block list block component with additional styles.
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.BlockListBlock', 'mai-column-order/with-styles', (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockListBlock => {
  return props => {
    const {
      name,
      attributes
    } = props;
    const {
      isReversedDirectionOnMobile,
      orderMobile
    } = attributes;

    // Return early if not our blocks.
    if (!['core/columns', 'core/column'].includes(name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockListBlock, {
        ...props
      });
    }

    // Handle columns block.
    if ('core/columns' === name) {
      const classes = [];
      if (isReversedDirectionOnMobile) {
        classes.push('is-reversed-direction-on-mobile');
      }
      if (classes.length) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockListBlock, {
          ...props,
          className: `${props.className || ''} ${classes.join(' ')}`.trim()
        });
      }
    }

    // Handle column block.
    if ('core/column' === name) {
      const style = {};
      if (orderMobile) {
        style['--order-mobile'] = String(orderMobile);
      }
      if (Object.keys(style).length) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockListBlock, {
          ...props,
          wrapperProps: {
            ...props.wrapperProps,
            style: {
              ...(props.wrapperProps?.style || {}),
              ...style
            }
          }
        });
      }
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockListBlock, {
      ...props
    });
  };
}));

/**
 * Modifies the saved content props for columns and column blocks.
 * Adds custom classes and styles for mobile responsiveness.
 *
 * @since 0.1.0
 * @param {Object} extraProps     Additional props to be applied to the block's save element.
 * @param {Object} blockType      The block type configuration object.
 * @param {Object} attributes     The block's attributes.
 * @return {Object} Modified extra props to be applied to the block's save element.
 */
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('blocks.getSaveContent.extraProps', 'mai-column-order/save-props', (extraProps, blockType, attributes) => {
  // Return early if not our blocks.
  if (!['core/columns', 'core/column'].includes(blockType.name)) {
    return extraProps;
  }

  // Handle columns block.
  if ('core/columns' === blockType.name) {
    const classes = [];
    if (attributes.isReversedDirectionOnMobile) {
      classes.push('is-reversed-direction-on-mobile');
    }
    if (classes.length) {
      return {
        ...extraProps,
        className: `${extraProps.className || ''} ${classes.join(' ')}`.trim()
      };
    }
  }

  // Handle column block.
  if ('core/column' === blockType.name) {
    const style = {
      ...extraProps.style
    };
    if (attributes.orderMobile) {
      style['--order-mobile'] = String(attributes.orderMobile);
    }
    if (Object.keys(style).length) {
      return {
        ...extraProps,
        style
      };
    }
  }
  return extraProps;
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map