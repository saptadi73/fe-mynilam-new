export default {
  path: 'profile',
  children: [
    {
      path: '',
      name: 'Profile',
      component: () => import('../pages/profile/Profile.vue'),
    },
    {
      path: 'pilih-daerah-petani',
      name: 'PilihDaerahPetani',
      component: () => import('../pages/profile/PilihDaerahPetani.vue'),
    },
    {
      path: 'daftar-petani/:daerah',
      name: 'Daftar Petani',
      component: () => import('../pages/profile/DaftarPetani.vue'),
    },
    {
      path: 'profile-petani/:id',
      name: 'Profile Petani',
      component: () => import('../pages/profile/ProfilePetani.vue'),
    },
    {
      path: 'daftar-agen',
      name: 'Daftar Agen',
      component: () => import('../pages/profile/DaftarAgen.vue'),
    },
    {
      path: 'profile-agen/:id',
      name: 'Profile Agen',
      component: () => import('../pages/profile/ProfileAgen.vue'),
    },
    {
      path: 'profile-ugreen',
      name: 'Profile Ugreen',
      component: () => import('../pages/profile/ProfileUgreen.vue'),
    },
    {
      path: 'pilih-daerah-lahan',
      name: 'Pilih Daerah Lahan',
      component: () => import('../pages/profile/PilihDaerahLahan.vue'),
    },
    {
      path: 'daftar-lahan/:daerah',
      children: [
        {
          path: '',
          name: 'Daftar Lahan',
          component: () => import('../pages/profile/DaftarLahan.vue'),
        },
        {
          path: ':id',
          name: 'Detail Lahan Map',
          component: () => import('../pages/profile/DetailLahanMap.vue'),
        },
      ],
    },
    {
      path: '/detail-lahan/:id',
      name: 'Detail Lahan',
      component: () => import('../pages/profile/DetailLahan.vue'),
    },
    {
      path: 'daftar-lahan-petani/:name',
      name: 'Daftar Lahan Petani',
      component: () => import('../pages/profile/DaftarLahanPetani.vue'),
    },
  ],
}
