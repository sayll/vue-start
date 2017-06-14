import Vue from 'vue'
import Router from 'vue-router'
const Hello = resolve => require(['@components/Hello'], resolve)

Vue.use(Router)

export default new Router({
  // base: '/static/fed/fed/app.investigation',
  // mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
