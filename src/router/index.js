/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import Dashboard from '../pages/Dashboard.vue'
import Borrow from '../pages/Borrow.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  route: [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/borrow',
    name: 'borrow',
    component: Borrow
  }
]
})
 
export default router
