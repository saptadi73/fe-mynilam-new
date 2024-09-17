import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../pages/layouts/MainLayout.vue'
import inventaris from './inventaris'
import penjualan from './penjualan'
import produksi from './produksi'

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
      {
        path: 'profile',
        name: 'Profile ',
        component: () => import('../pages/profile/ProfilePage.vue'),
      },
      {
        path: 'profile-petani',
        name: 'Profile Card Petani',
        component: () => import('../pages/profile/CardPetaniPage.vue'),
      },
      {
        path: 'profile-petani/:id',
        name: 'Profile Petani',
        component: () => import('../pages/profile/ProfilePetaniPage.vue'),
      },
      {
        path: 'profile-agen',
        name: 'Profile Card Agen',
        component: () => import('../pages/profile/CardAgenPage.vue'),
      },
      {
        path: 'profile-agen/:id',
        name: 'Profile Agen',
        component: () => import('../pages/profile/ProfileAgenPage.vue'),
      },
      {
        path: 'profile-ugreen',
        name: 'Profile Ugreen',
        component: () => import('../pages/profile/ProfileUgreenPage.vue'),
      },
      {
        path: 'profile-aset',
        name: 'Profile Aset',
        component: () => import('../pages/profile/CardAsetPage.vue'),
      },
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
