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
        path: 'profile',
        name: 'Profile ',
        component: () => import('../pages/ProfilePage.vue'),
      },
      {
        path: 'profile-petani',
        name: 'Profile Card Petani',
        component: () => import('../pages/CardPetaniPage.vue'),
      },
      {
        path: 'profile-petani/:id',
        name: 'Profile Petani',
        component: () => import('../pages/ProfilePetaniPage.vue'),
      },
      {
        path: 'profile-agen',
        name: 'Profile Agen',
        component: () => import('../pages/ProfileAgenPage.vue'),
      },
      {
        path: 'profile-ugreen',
        name: 'Profile Ugreen',
        component: () => import('../pages/ProfileUgreenPage.vue'),
      },
      {
        path: 'produksi',
        children: [
          {
            path: 'laporan-produksi',
            name: 'Laporan Produksi',
            component: () => import('../pages/produksi/LaporanProduksi.vue'),
          },
        ],
      },
      {
        path: 'inventaris',
        children: [
          {
            path: 'laporan-petani',
            name: 'Laporan Petani',
            component: () => import('../pages/inventaris/LaporanPetani.vue'),
          },
        ],
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
