import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../pages/layouts/MainLayout.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login.vue'),
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
        path: 'penjualan',
        children: [
          {
            path: 'daftar-penjualan',
            name: 'Daftar Penjualan',
            component: () => import('../pages/penjualan/DaftarPenjualan.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
