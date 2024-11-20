export default {
  path: 'penjualan',
  children: [
    {
      path: '',
      name: 'Penjualan',
      component: () => import('../pages/penjualan/PilihJenisLaporan.vue'),
    },
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
    {
      path: 'product-traceability/:id',
      name: 'Product Traceability',
      component: () => import('../pages/penjualan/ProductTraceability.vue'),
    },
    {
      path: 'laporan-penjualan',
      children: [
        {
          path: 'pilih-daerah',
          name: 'Pilih Daerah Penjualan',
          component: () => import('../pages/penjualan/laporan-penjualan/PilihDaerahPenjualan.vue'),
        },
        {
          path: 'pilih-petani-agen/:daerah',
          name: 'Pilih Laporan Penjualan',
          component: () => import('../pages/penjualan/laporan-penjualan/PilihLaporanPenjualan.vue'),
        },
        {
          path: 'daftar-petani/:daerah',
          name: 'Daftar Petani Penjualan',
          component: () => import('../pages/penjualan/laporan-penjualan/DaftarPetaniPenjualan.vue'),
        },
        {
          path: 'daftar-agen-koperasi/:daerah',
          name: 'Daftar Agen Koperasi Penjualan',
          component: () => import('../pages/penjualan/laporan-penjualan/DaftarAgenKoperasiPenjualan.vue'),
        },
        {
          path: 'petani/:name/:id',
          name: 'Laporan Penjualan Petani',
          component: () => import('../pages/penjualan/laporan-penjualan/LaporanPetani.vue'),
        },
        {
          path: 'agen-koperasi/:name/:id',
          name: 'Laporan Penjualan Agen Koperasi',
          component: () => import('../pages/penjualan/laporan-penjualan/LaporanAgenKoperasi.vue'),
        },
      ],
    },
    {
      path: 'traceability-product',
      children: [
        {
          path: '',
          name: 'Pilih Traceability Product',
          component: () => import('../pages/penjualan/traceability-product/PilihTraceabilityProduct.vue'),
        },
        {
          path: 'petani',
          name: 'Traceability Petani',
          component: () => import('../pages/penjualan/traceability-product/TraceabilityPetani.vue'),
        },
        {
          path: 'agen-koperasi',
          name: 'Traceability Agen Koperasi',
          component: () => import('../pages/penjualan/traceability-product/TraceabilityAgenKoperasi.vue'),
        },
      ],
    },
  ],
}
