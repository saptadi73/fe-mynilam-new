export default {
  path: 'laporan',
  children: [
    {
      path: '',
      name: 'Jenis Laporan',
      component: () => import('../pages/laporan/JenisLaporan.vue'),
    },
    {
      path: 'nama-pengguna',
      name: 'Laporan Nama Pengguna',
      component: () => import('../pages/laporan/LaporanNamaPengguna.vue'),
    },
    {
      path: 'produksi',
      name: 'Laporan Produksi',
      component: () => import('../pages/laporan/LaporanProduksi.vue'),
    },
    {
      path: 'pergerakan-barang',
      name: 'Laporan Pergerakan Barang',
      component: () => import('../pages/laporan/LaporanPergerakanBarang.vue'),
    },
    {
      path: 'produk-inventaris',
      name: 'Laporan Produk Inventaris',
      component: () => import('../pages/laporan/LaporanProdukInventaris.vue'),
    },
    {
      path: 'produk-penjualan',
      name: 'Laporan Produk Penjualan',
      component: () => import('../pages/laporan/LaporanProdukPenjualan.vue'),
    },
    {
      path: 'penjualan',
      name: 'Laporan Penjualan',
      component: () => import('../pages/laporan/LaporanPenjualan.vue'),
    },
  ],
}
