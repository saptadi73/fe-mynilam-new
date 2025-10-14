<template>
  <div class="bg-image-wave2 px-5 md:px-16">
    <div class="container mx-auto py-4">
      <h1 class="text-center text-dark font-bold text-3xl py-4">Pilih Inventaris</h1>
      <div class="bg-[#F6FDFF] rounded-xl shadow-md px-6 py-4">
        <div class="grid grid-cols-12 gap-y-6 md:gap-x-6">
          <!-- Menampilkan profil tanpa menggunakan reusable card -->
          <div
            v-for="(profile, index) in profileCard"
            :key="index"
            class="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center p-4 bg-white rounded-xl shadow-md"
          >
            <!-- Judul Profil -->
            <h1 class="text-center text-dark font-bold text-2xl pt-1 pb-4">{{ profile.profileName }}</h1>
            
            <!-- Gambar Profil -->
            <img :src="profile.imageSrc" :alt="`${profile.profileName} Image`" class="rounded-md w-full h-48 object-cover mb-4" />
            
            <!-- Deskripsi Profil -->
            <p class="text-center text-dark py-4">
              {{ profile.profileDescription }}
            </p>
            
            <!-- Tombol untuk Navigasi -->
            <RouterLink :to="profile.profilePath">
              <BaseButton class="w-full font-bold" variant="success">Lihat</BaseButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

// Daftar profil
const profileCard = reactive([
  {
    profileName: 'Petani',
    profileImage: 'petani.jpg',  // Nama gambar
    profileDescription:
      'Lihat daftar lengkap petani yang terdaftar dalam sistem, serta buat daftar baru petani untuk memperbarui informasi dan menambahkan petani baru yang bergabung dalam jaringan produksi.',
    profilePath: 'inventaris/petani/pilih-daerah',
    imageSrc: '/images/profile/petani_nilam.jpg',  // Path gambar
  },
  {
    profileName: 'Agen/Koperasi',
    profileImage: 'agen.jpg',  // Nama gambar
    profileDescription:
      'Lihat daftar lengkap agen/koperasi yang terdaftar dan berperan dalam distribusi produk, serta buat daftar agen baru untuk memperluas jaringan penjualan dan mitra distribusi.',
    profilePath: 'inventaris/agen-koperasi/pilih-daerah',
    imageSrc: '/images/profile/koperasi.png',  // Path gambar
  },
  {
    profileName: 'Ugreen',
    profileImage: 'ugreen.jpg',  // Nama gambar
    profileDescription:
      'Lihat daftar entitas UGreen yang berperan dalam rantai distribusi produk, serta tambahkan atau buat profil baru UGreen untuk memperluas dan mengelola jaringan mitra strategis.',
    profilePath: 'inventaris/daftar-produk/ugreen',
    imageSrc: '/images/profile/u_green_foto.png',  // Path gambar
  },
])
</script>

<style scoped>
/* Styling untuk profil card */
.profile-card {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.25);
}

img {
  border-radius: 8px;
  object-fit: cover;
  max-width: 100%;
  height: 450px;  /* Menyesuaikan tinggi gambar */
}
@media (max-width: 768px) {
  img {
    height: auto; /* Biarkan tinggi gambar disesuaikan dengan lebar gambar */
    max-height: 200px; /* Batasi tinggi gambar di layar kecil */
  }
}
</style>
