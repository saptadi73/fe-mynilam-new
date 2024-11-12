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
      path: 'profile-agen',
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
      path: 'profile-aset',
      children: [
        {
          path: '',
          name: 'Profile Aset',
          component: () => import('../pages/profile/DaftarAset.vue'),
        },
        {
          path: ':id',
          name: 'Detail Aset',
          component: () => import('../pages/profile/DetailAset.vue'),
        },
      ],
    },
    {
      path: 'daftar-aset-petani/:id',
      name: 'Daftar Aset Petani',
      component: () => import('../pages/profile/DaftarAsetPetani.vue'),
    },
  ],
}
