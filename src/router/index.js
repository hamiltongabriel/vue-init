import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/TransitionsAndAnimations/Taxi'
import HelloWorld from '@/ch2/vif/displayingHidingElemtnoConditionally'
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
