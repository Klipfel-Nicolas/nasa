import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spirit',
    name: 'Spirit',
    component: () => import('../views/Spirit.vue')
  },
  {
    path: '/curiosity',
    name: 'Curiosity',
    component: () => import('../views/Curiosity.vue')
  },
  {
    path: '/rover',
    name: 'Rover',
    component: () => import('../views/Rover.vue')
  },
  {
    path: '/opportunity',
    name: 'Opportunity',
    component: () => import('../views/Opportunity.vue')
  },
  {
    path: '/astrologicalEvents',
    name: 'AstrologicalEvents',
    component: () => import('../views/AstrologicalEvents.vue')
  },
  {
    path: '/perseverance',
    name: 'Perseverance',
    component: () => import('../views/Perseverance.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
