import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _de3b83b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _6a059f25 = () => interopDefault(import('../pages/sample.vue' /* webpackChunkName: "pages/sample" */))
const _600e0444 = () => interopDefault(import('../pages/strapi.vue' /* webpackChunkName: "pages/strapi" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _de3b83b2,
    name: "index___en"
  }, {
    path: "/sample",
    component: _6a059f25,
    name: "sample"
  }, {
    path: "/strapi",
    component: _600e0444,
    name: "strapi"
  }, {
    path: "/tr",
    component: _de3b83b2,
    name: "index___tr"
  }, {
    path: "/en/sample",
    component: _6a059f25,
    name: "sample___en"
  }, {
    path: "/en/strapi",
    component: _600e0444,
    name: "strapi___en"
  }, {
    path: "/tr/ornek",
    component: _6a059f25,
    name: "sample___tr"
  }, {
    path: "/tr/strapi",
    component: _600e0444,
    name: "strapi___tr"
  }, {
    path: "/",
    component: _de3b83b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
