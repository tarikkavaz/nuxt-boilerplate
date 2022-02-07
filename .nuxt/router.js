import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _712a6362 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _de3b83b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _730abd54 = () => interopDefault(import('../pages/mountains/_slug.vue' /* webpackChunkName: "pages/mountains/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _712a6362,
    name: "about___en"
  }, {
    path: "/tr",
    component: _de3b83b2,
    name: "index___tr"
  }, {
    path: "/tr/hakkinda",
    component: _712a6362,
    name: "about___tr"
  }, {
    path: "/tr/mountains/:slug?",
    component: _730abd54,
    name: "mountains-slug___tr"
  }, {
    path: "/mountains/:slug?",
    component: _730abd54,
    name: "mountains-slug___en"
  }, {
    path: "/",
    component: _de3b83b2,
    name: "index___en"
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
