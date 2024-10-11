export default {
  path: 'laporan',
  children: [
    {
      path: '',
      name: 'Jenis Laporan',
      component: () => import('../pages/laporan/JenisLaporan.vue'),
    },
  ],
}
