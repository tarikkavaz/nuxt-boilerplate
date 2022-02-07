exports.ids = [4];
exports.modules = {

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mountains/_slug.vue?vue&type=template&id=10a5bac7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',[_vm._ssrNode("<h1 class=\"mb-4 text-2xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.mountain.title))+"</h1> "+((_vm.$fetchState.pending)?("<p><span class=\"loading\"></span></p>"):(_vm.$fetchState.error)?("<p>Error while fetching mountains 🤬</p>"):"<!---->")+" <section><img"+(_vm._ssrAttr("src",_vm.mountain.image))+(_vm._ssrAttr("alt",_vm.mountain.title))+" class=\"object-cover h-48 rounded-md w-96\"> <p class=\"mt-6 text-lg text-slate-700\">"+_vm._ssrEscape(_vm._s(_vm.mountain.description))+"</p></section> <button class=\"px-4 py-2 mt-4 text-black rounded-md bg-lime-400\">\n    Back\n  </button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/mountains/_slug.vue?vue&type=template&id=10a5bac7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mountains/_slug.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  data() {
    return {
      mountain: {}
    };
  },

  async fetch() {
    this.mountain = await this.$http.$get(`https://api.nuxtjs.dev/mountains/${this.$route.params.slug}`);
  },

  methods: {
    goBack() {
      return this.$router.go(-1);
    }

  }
});
// CONCATENATED MODULE: ./pages/mountains/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var mountains_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/mountains/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  mountains_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3a29a546"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map