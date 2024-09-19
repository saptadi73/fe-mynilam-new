export default {
  path: 'profile',
  children: [
    {
      path: '',
      name: 'Profile',
      component: () => import('../pages/profile/ProfilePage.vue'),
    },
    {
      path: 'profile-petani',
      name: 'Profile Card Petani',
      component: () => import('../pages/profile/CardPetaniPage.vue'),
    },
    {
      path: 'profile-petani/:id',
      name: 'Profile Petani',
      component: () => import('../pages/profile/ProfilePetaniPage.vue'),
    },
    {
      path: 'profile-agen',
      name: 'Profile Card Agen',
      component: () => import('../pages/profile/CardAgenPage.vue'),
    },
    {
      path: 'profile-agen/:id',
      name: 'Profile Agen',
      component: () => import('../pages/profile/ProfileAgenPage.vue'),
    },
    {
      path: 'profile-ugreen',
      name: 'Profile Ugreen',
      component: () => import('../pages/profile/ProfileUgreenPage.vue'),
    },
    {
      path: 'profile-aset',
      name: 'Profile Aset',
      component: () => import('../pages/profile/CardAsetPage.vue'),
    },
  ],
}
