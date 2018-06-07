import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Cumprimento'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
