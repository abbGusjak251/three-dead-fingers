import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Concerts from '../views/Concerts.vue'
import Videos from '../views/Videos.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: Concerts
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: Contact
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
