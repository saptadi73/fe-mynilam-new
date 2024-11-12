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
      path: 'pilih-laporan-produksi',
      name: 'Pilih Laporan Produksi',
      component: () => import('../pages/laporan/PilihLaporanProduksi.vue'),
    },
    {
      path: 'produksi-tanam',
      name: 'Laporan Produksi Tanam',
      component: () => import('../pages/laporan/LaporanProduksiTanam.vue'),
    },
    {
      path: 'produksi-minyak-nilam',
      name: 'Laporan Produksi Minyak',
      component: () => import('../pages/laporan/LaporanProduksiMinyak.vue'),
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
