export default {
  path: 'inventaris',
  children: [
    {
      path: '',
      name: 'Inventaris',
      component: () => import('../pages/inventaris/PilihInventaris.vue'),
    },
    {
      path: 'daftar-produk',
      name: 'Daftar Produk Minyak Nilam',
      component: () => import('../pages/inventaris/DaftarProduk.vue'),
    },
    {
      path: 'daftar-gudang',
      children: [
        {
          path: '',
          name: 'Daftar Gudang',
          component: () => import('../pages/inventaris/DaftarGudang.vue'),
        },
        {
          path: 'agen',
          name: 'Agen',
          component: () => import('../pages/inventaris/gudang/Agen.vue'),
        },
        {
          path: 'koperasi',
          name: 'Koperasi',
          component: () => import('../pages/inventaris/gudang/Koperasi.vue'),
        },
        {
          path: 'ugreen',
          name: 'Ugreen',
          component: () => import('../pages/inventaris/gudang/UGreen.vue'),
        },
      ],
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
    {
      path: 'petani',
      children: [
        {
          path: 'pilih-daerah',
          name: 'Pilih Daerah Petani',
          component: () => import('../pages/inventaris/petani/PilihDaerahPetani.vue'),
        },
        {
          path: ':daerah',
          name: 'Inventaris Petani',
          component: () => import('../pages/inventaris/petani/InventarisPetani.vue'),
        },
        {
          path: 'daftar-produk/:id',
          name: 'Daftar Produk Petani',
          component: () => import('../pages/inventaris/petani/DaftarProdukPetani.vue'),
        },
      ],
    },
    {
      path: 'agen-koperasi',
      children: [
        {
          path: 'pilih-daerah',
          name: 'Pilih Daerah Agen Koperasi',
          component: () => import('../pages/inventaris/agen-koperasi/PilihDaerahAgenKoperasi.vue'),
        },
      ],
    },
    {
      path: 'pilih-agen-koperasi/:daerah',
      name: 'Pilih Agen Koperasi',
      component: () => import('../pages/inventaris/agen-koperasi/PilihAgenKoperasi.vue'),
    },
    {
      path: 'agen',
      children: [
        {
          path: ':daerah',
          name: 'Inventaris Agen',
          component: () => import('../pages/inventaris/agen-koperasi/agen/InventarisAgen.vue'),
        },
        {
          path: 'daftar-produk/:agenId',
          name: 'Daftar Produk Agen',
          component: () => import('../pages/inventaris/agen-koperasi/agen/DaftarProdukAgen.vue'),
        },
      ],
    },
    {
      path: 'koperasi',
      children: [
        {
          path: ':daerah',
          name: 'Inventaris Koperasi',
          component: () => import('../pages/inventaris/agen-koperasi/koperasi/InventarisKoperasi.vue'),
        },
        {
          path: 'daftar-produk/:koperasiId',
          name: 'Daftar Produk Koperasi',
          component: () => import('../pages/inventaris/agen-koperasi/koperasi/DaftarProdukKoperasi.vue'),
        },
      ],
    },
    {
      path: 'ugreen',
      name: 'Inventaris Ugreen',
      component: () => import('../pages/inventaris/ugreen/InventarisUgreen.vue'),
    },
  ],
}
