import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import TestComponent from '../components/TestComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: TestComponent
    }
  ]
})

export default router
