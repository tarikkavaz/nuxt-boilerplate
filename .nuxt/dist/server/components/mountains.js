exports.ids = [1];
exports.modules = {

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("17d766a8", content, true, context)
};

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mountains_vue_vue_type_style_index_0_id_3c99d5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mountains_vue_vue_type_style_index_0_id_3c99d5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mountains_vue_vue_type_style_index_0_id_3c99d5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mountains_vue_vue_type_style_index_0_id_3c99d5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mountains_vue_vue_type_style_index_0_id_3c99d5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li[data-v-3c99d5f1]{margin-bottom:.5rem}li[data-v-3c99d5f1]:first-letter{text-transform:uppercase}.loading[data-v-3c99d5f1]{display:inline-block;width:1.5rem;height:1.5rem;border-radius:50%;border:4px solid rgba(9,133,81,.705);border-top-color:#158876;-webkit-animation:spin-data-v-3c99d5f1 1s ease-in-out infinite;animation:spin-data-v-3c99d5f1 1s ease-in-out infinite}@-webkit-keyframes spin-data-v-3c99d5f1{to{-webkit-transform:rotate(1turn)}}@keyframes spin-data-v-3c99d5f1{to{-webkit-transform:rotate(1turn)}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mountains.vue?vue&type=template&id=3c99d5f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$fetchState.pending)?_vm._ssrNode("<p data-v-3c99d5f1>","</p>",[_vm._ssrNode("<span class=\"loading\" data-v-3c99d5f1></span>")],2):(_vm.$fetchState.error)?_vm._ssrNode(("<p data-v-3c99d5f1>Error while fetching mountains 🤬</p>")):_vm._ssrNode("<ul data-v-3c99d5f1>","</ul>",_vm._l((_vm.mountains),function(mountain){return _vm._ssrNode("<li data-v-3c99d5f1>","</li>",[_c('NuxtLink',{staticClass:"text-lime-600",attrs:{"to":("mountains/" + (mountain.slug))}},[_vm._v("\n        "+_vm._s(mountain.title)+"\n      ")])],1)}),0),_vm._ssrNode(" <button class=\"px-4 py-2 mt-4 text-black rounded-md bg-lime-400\" data-v-3c99d5f1>\n    Refresh Data\n  </button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Mountains.vue?vue&type=template&id=3c99d5f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mountains.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Mountainsvue_type_script_lang_js_ = ({
  data() {
    return {
      mountains: []
    };
  },

  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch();
    }
  },

  async fetch() {
    this.mountains = await this.$http.$get("https://api.nuxtjs.dev/mountains");
  },

  nuxtI18n: {
    paths: {
      en: "/mountains/",
      tr: "/daglar/"
    }
  }
});
// CONCATENATED MODULE: ./components/Mountains.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mountainsvue_type_script_lang_js_ = (Mountainsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Mountains.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(60)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mountainsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c99d5f1",
  "6ac4a8d4"
  
)

/* harmony default export */ var Mountains = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mountains.js.map