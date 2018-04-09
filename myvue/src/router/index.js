import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Index'
import Info from '@/components/Info'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { 
      path: '/',
      redirect: {
        name: 'Home'
      } 
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    { 
      path: '*', 
      redirect: {
        name: 'Error'
      } 
    }
  ]
})
