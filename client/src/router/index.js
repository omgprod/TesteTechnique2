import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/components/views/Contact'
import Index from '@/components/views/Index'
import AddRoom from '@/components/AddRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Add',
      name: 'AddRoom',
      component: AddRoom
    },
  ]
})
