import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main'
import Aside from '@/components/aside'
import Bookrack from '@/Systemseting/Bookrack.vue'
import libraryinfo from '@/Systemseting/libraryinfo.vue'
import borrow from '@/booktrans/borrow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children:[{
        path:'bookrack',
        name:'Bookrack',
        component:Bookrack
      },
      {
        path:'borrow',
        name:'borrow',
        component:borrow
      }]
    },
    {
      path: '/aside',
      name: 'aside',
      component: Aside
    },
    {
      path:'/libraryinfo',
      name:'libraryinfo',
      component:libraryinfo
    }
  ]
})
