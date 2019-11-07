import Vue from 'vue'
import VueRouter from 'vue-router'
import AllCats from '../views/AllCats.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/allCats',
    name: 'allCats',
    component: AllCats
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
