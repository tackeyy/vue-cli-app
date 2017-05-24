import Vue from 'vue'
import Router from 'vue-router'
import VueList from '../components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    }, {
      path: '/lists',
      name: 'lists',
      component: VueList
    }
  ]
})
