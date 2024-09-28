export default {
  path: 'inventaris',
  children: [
    {
      path: 'daftar-produk',
      name: 'Daftar Produk Minyak Nilam',
      component: () => import('../pages/inventaris/DaftarProduk.vue'),
    },
    {
      path: 'daftar-gudang',
      name: 'Daftar Gudang',
      component: () => import('../pages/inventaris/DaftarGudang.vue'),
    },
    {
      path: 'laporan-pergerakan-barang',
      name: 'Laporan Pergerakan Barang',
      component: () => import('../pages/inventaris/LaporanPergerakanBarang.vue'),
    },
    {
      path: 'laporan-petani',
      name: 'Laporan Petani',
      component: () => import('../pages/inventaris/LaporanPetani.vue'),
    },
  ],
}
