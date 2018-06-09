import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/propriedadeComputada/NomeESobrenome'

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
