<template>
  <div class="bg-image-wave2 px-5 md:px-16">
    <div class="container mx-auto py-4">
      <h1 class="text-center text-primary font-bold text-3xl py-4">Profil Petani, Agen/Koperasi, UGreen dan Aset</h1>
      <div class="bg-[#F6FDFF] rounded-xl shadow-md px-6 py-4">
        <div class="grid grid-cols-12 gap-y-6 md:gap-x-6">
          <BaseProfileCard
            v-for="(profile, index) in profileCard"
            :key="index"
            class="col-span-12 md:col-span-6 lg:col-span-3"
            :profile-name="profile.profileName"
            :profile-image="profile.profileImage"
            :profile-description="profile.profileDescription"
            :profile-path="profile.profilePath"
          ></BaseProfileCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseProfileCard from '@/components/BaseProfileCard.vue'

const profileCard = reactive([
  {
    profileName: 'Petani',
    profileImage: 'petani',
    profileDescription:
      'Lihat daftar lengkap petani yang terdaftar dalam sistem, serta buat daftar baru petani untuk memperbarui informasi dan menambahkan petani baru yang bergabung dalam jaringan produksi.',
    profilePath: 'profile-petani',
  },
  {
    profileName: 'Agen/Koperasi',
    profileImage: 'agen',
    profileDescription:
      'Lihat daftar lengkap agen/koperasi yang terdaftar dan berperan dalam distribusi produk, serta buat daftar agen baru untuk memperluas jaringan penjualan dan mitra distribusi.',
    profilePath: 'profile-agen',
  },
  {
    profileName: 'Ugreen',
    profileImage: 'ugreen',
    profileDescription:
      'Lihat daftar entitas UGreen yang berperan dalam rantai distribusi produk, serta tambahkan atau buat profil baru UGreen untuk memperluas dan mengelola jaringan mitra strategis.',
    profilePath: 'profile-ugreen',
  },
  {
    profileName: 'Aset',
    profileImage: 'aset',
    profileDescription:
      'Daftar aset petani mencakup nama pemilik, luas dan lokasi lahan, status kepemilikan, serta status tanam. Pantau perkembangan lahan secara efisien',
    profilePath: 'profile-aset',
  },
])
</script>
