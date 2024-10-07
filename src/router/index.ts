import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import MainLayout from '../pages/layouts/MainLayout.vue'
import inventaris from './inventaris'
import penjualan from './penjualan'
import produksi from './produksi'
import profile from './profile'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/Login.vue'),
  },
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Beranda',
        component: () => import('../pages/Beranda.vue'),
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../pages/Dashboard.vue'),
      },
      profile,
      produksi,
      inventaris,
      penjualan,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const checkIsAuthenticated = (): boolean => {
  const token = localStorage.getItem('token')
  // if not has token
  if (!token) return false
  // check if token is valid
  try {
    const decoded = jwtDecode(token)
    return !!decoded
  } catch (error) {
    // if not valid token
    localStorage.removeItem('token')
    return false
  }
}

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = checkIsAuthenticated()
  // if the route requires auth & user not authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    // if user is authenticated & the route is login page
    if (isAuthenticated && to.name === 'Login') next('/')
    else next()
  }
})

export default router
