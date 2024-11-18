export default {
  path: 'produksi',
  children: [
    {
      path: '',
      name: 'Produksi',
      component: () => import('../pages/produksi/Produksi.vue'),
    },
    {
      path: 'daftar-produksi-petani',
      children: [
        {
          path: '',
          name: 'Daftar Produksi Petani',
          component: () => import('../pages/produksi/DaftarProduksiPetani.vue'),
        },
        {
          path: 'pilih-daerah-tanam',
          name: 'Pilih Daerah Tanam',
          component: () => import('../pages/produksi/PilihDaerahTanam.vue'),
        },
        {
          path: 'daftar-tanam-nilam/:daerah',
          name: 'Daftar Tanam Nilam',
          component: () => import('../pages/produksi/DaftarTanamNilam.vue'),
        },
        {
          path: 'daftar-tanam-nilam-petani/:name',
          name: 'Daftar Tanam Nilam Petani',
          component: () => import('../pages/produksi/DaftarTanamNilamPetani.vue'),
        },
        {
          path: 'daftar-tanam-nilam-progress/:name',
          name: 'Daftar Tanam Nilam Petani Progress',
          component: () => import('../pages/produksi/DaftarTanamNilamProgress.vue'),
        },

        {
          path: 'pilih-daerah-produksi',
          name: 'Pilih Daerah Produksi',
          component: () => import('../pages/produksi/PilihDaerahProduksi.vue'),
        },
        {
          path: 'daftar-produksi-nilam/:daerah',
          name: 'Daftar Produksi Nilam',
          component: () => import('../pages/produksi/DaftarProduksiNilam.vue'),
        },
        {
          path: 'daftar-produksi-nilam-petani/:name',
          name: 'Daftar Produksi Nilam Petani',
          component: () => import('../pages/produksi/DaftarProduksiNilamPetani.vue'),
        },
      ],
    },
    {
      path: 'laporan-produksi',
      children: [
        {
          path: '',
          name: 'Laporan Produksi',
          component: () => import('../pages/produksi/LaporanProduksi.vue'),
        },
        {
          path: 'laporan-lengkap-produksi',
          name: 'Laporan Lengkap Produksi',
          component: () => import('../pages/produksi/LaporanLengkapProduksi.vue'),
        },
        {
          path: 'laporan-lengkap-tanam',
          name: 'Laporan Lengkap Tanam',
          component: () => import('../pages/produksi/LaporanLengkapTanam.vue'),
        },
      ],
    },
    {
      path: 'buat-daftar-produksi-petani',
      name: 'Buat Daftar Produksi Petani',
      component: () => import('../pages/produksi/BuatDaftarProduksiPetani.vue'),
    },
  ],
}
