import { useAuthUserStore } from '@/stores/authUser'
import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import DashboardView from '@/views/system/DashboardView.vue'
import ForbiddenView from '@/views/errors/ForbiddenView.vue'
import NotFoundView from '@/views/errors/NotFoundView.vue'

// Define routes
const routes = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/system/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }, // Mark route as requiring authentication
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: ForbiddenView,
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFoundView,
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for unmatched routes
    redirect: { name: 'notfound' },
  },
]

// Create the router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Add navigation guards
router.beforeEach(async (to) => {
  const authStore = useAuthUserStore() // Get the auth store
  const isLoggedIn = await authStore.isAuthenticated()

  // Redirect from home route
  if (to.name === 'home') {
    return isLoggedIn ? { name: 'dashboard' } : { name: 'login' }
  }

  // Prevent logged-in users from accessing login or register
  if (isLoggedIn && (to.name === 'login' || to.name === 'register')) {
    return { name: 'dashboard' }
  }

  // Redirect unauthenticated users trying to access protected routes
  if (!isLoggedIn && to.meta.requiresAuth) {
    return { name: 'login' }
  }
})

export default router

