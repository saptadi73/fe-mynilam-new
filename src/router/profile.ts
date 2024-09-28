export default {
  path: 'profile',
  children: [
    {
      path: '',
      name: 'Profile',
      component: () => import('../pages/profile/Profile.vue'),
    },
    {
      path: 'profile-petani',
      name: 'Profile Card Petani',
      component: () => import('../pages/profile/CardPetani.vue'),
    },
    {
      path: 'profile-petani/:id',
      name: 'Profile Petani',
      component: () => import('../pages/profile/ProfilePetani.vue'),
    },
    {
      path: 'profile-agen',
      name: 'Profile Card Agen',
      component: () => import('../pages/profile/CardAgen.vue'),
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
      name: 'Profile Aset',
      component: () => import('../pages/profile/CardAset.vue'),
    },
  ],
}
