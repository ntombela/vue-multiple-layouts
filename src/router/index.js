import { createRouter, createWebHistory } from 'vue-router'
import Public from '../views/layouts/Public.vue'
import Private from '../views/layouts/Private.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Public',
    component: Public,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/app',
    name: 'Private',
    component: Private,
    children: [
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
