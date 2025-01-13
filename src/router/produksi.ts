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
          path: 'daftar-tanam-nilam-petani/:id',
          name: 'Daftar Tanam Nilam Petani',
          component: () => import('../pages/produksi/DaftarTanamNilamPetani.vue'),
        },
        {
          path: 'daftar-tanam-nilam-progress/:id',
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
          path: 'daftar-produksi-nilam-petani/:id',
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
          component: () => import('../pages/laporan/LaporanProduksiTanam.vue'),
        },
      ],
    },
    {
      path: 'buat-produksi',
      children: [
        {
          path: 'tanam/:daerah',
          name: 'Buat Produksi Tanam',
          component: () => import('../pages/produksi/buat-produksi/BuatProduksiTanam.vue'),
        },
        {
          path: 'minyak/:daerah',
          name: 'Buat Produksi Minyak',
          component: () => import('../pages/produksi/buat-produksi/BuatProduksiMinyak.vue'),
        },
        {
          path: 'pilih-jenis-produksi',
          name: 'Buat - Pilih Jenis Produksi',
          component: () => import('../pages/produksi/buat-produksi/PilihJenisProduksi.vue'),
        },
        {
          path: 'pilih-daerah-tanam',
          name: 'Buat - Pilih Daerah Tanam',
          component: () => import('../pages/produksi/buat-produksi/PilihDaerahTanam.vue'),
        },
        {
          path: 'pilih-daerah-minyak',
          name: 'Buat - Pilih Daerah Minyak',
          component: () => import('../pages/produksi/buat-produksi/PilihDaerahMinyakNilam.vue'),
        },
      ],
    },
  ],
}
