export default {
  path: 'penjualan',
  children: [
    {
      path: 'daftar-mitra',
      name: 'Daftar Mitra',
      component: () => import('../pages/penjualan/DaftarMitra.vue'),
    },
    {
      path: 'daftar-penjualan',
      name: 'Daftar Penjualan',
      component: () => import('../pages/penjualan/DaftarPenjualan.vue'),
    },
  ],
}
