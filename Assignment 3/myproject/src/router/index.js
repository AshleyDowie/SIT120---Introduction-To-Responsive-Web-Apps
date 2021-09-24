import Vue from 'vue'
import Router from 'vue-router'
import Members from '@/components/Members'
import Guest from '@/components/Guest'
import Home from '@/components/Home'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Members',
      component: Members
    },
    {
      path: '/',
      name: 'Guest',
      component: Guest
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Contact',
      component: Contact
    }
  ]
})
