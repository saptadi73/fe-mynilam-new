import { createRouter, createWebHistory } from 'vue-router'
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
    children: [
      {
        path: '/',
        name: 'Beranda',
        component: () => import('../pages/Beranda.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../pages/DashboardPage.vue'),
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

export default router
