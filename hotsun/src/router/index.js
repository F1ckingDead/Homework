import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Position from '@/components/Position'
import Center from '@/components/Center'
import Box from '@/components/Box'
import flowWrap from '@/components/flowWrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Position',
      name: 'Position',
      component: Position
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center
    },
    {
      path: '/Box',
      name: 'Box',
      component: Box
    },
    {
      path: '/flowWrap',
      name: 'flowWrap',
      component: flowWrap
    }
  ]
})
