import Vue from 'vue'
import Router from 'vue-router'
import homeCompotent from '../page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
      {path:'/home',component:homeCompotent}
  ]
})
