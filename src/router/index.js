import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: function () {
      return import('../views/Contact.vue')
    }
  },
  {
    path: '/table',
    name: 'TableLocal',
    component: function () {
      return import('../views/Table.vue')
    }
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: function () {
      return import('../views/Pokemon.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
