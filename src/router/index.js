import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/formularioComCaixaDeSelecao/PaginaDeConfirmacao'

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
