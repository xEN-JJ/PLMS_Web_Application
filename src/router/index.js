/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import Dashboard from '../pages/Dashboard.vue'
import Borrow from '../pages/Borrow.vue'
import Cataloging from '../pages/Cataloging.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  route: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/cataloging',
      name: 'Cataloging',
      component: Cataloging
    }
  ]
})

export default router
