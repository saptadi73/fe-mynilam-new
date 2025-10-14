<template>
  <div class="bg-image-wave2 px-5 md:px-16">
    <div class="container mx-auto py-4">
      <h1 class="text-center text-dark font-bold text-3xl py-4">Profil Petani, Agen/Koperasi, UGreen dan Lahan</h1>
      <div class="bg-[#F6FDFF] rounded-xl shadow-md px-6 py-4">
        <div class="grid grid-cols-12 gap-y-6 md:gap-x-6">
          <!-- Menampilkan profil tanpa menggunakan reusable card -->
          <div
            v-for="(profile, index) in profileCard"
            :key="index"
            class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-center p-4 bg-white rounded-xl shadow-md"
          >
            <!-- Judul Profil -->
            <h1 class="text-center text-dark font-bold text-2xl pt-1 pb-4">{{ profile.profileName }}</h1>
            
            <!-- Gambar Profil -->
            <img :src="profile.imageSrc" :alt="`${profile.profileName} Image`" class="rounded-md w-full mb-4" :style="{ height: '300px' }" />
            
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

const profileCard = reactive([
  {
    profileName: 'Petani',
    profileImage: 'petani_nilam.jpg',
    profileDescription:
      'Lihat daftar lengkap petani yang terdaftar dalam sistem, serta buat daftar baru petani untuk memperbarui informasi dan menambahkan petani baru yang bergabung dalam jaringan produksi.',
    profilePath: 'profile/pilih-daerah-petani',
    imageSrc: '/images/profile/petani_nilam.jpg',
  },
  {
    profileName: 'Agen/Koperasi',
    profileImage: 'foto_koperasi.png',
    profileDescription:
      'Lihat daftar lengkap agen/koperasi yang terdaftar dan berperan dalam distribusi produk, serta buat daftar agen baru untuk memperluas jaringan penjualan dan mitra distribusi.',
    profilePath: 'profile/daftar-agen',
    imageSrc: '/images/profile/foto_koperasi.png',
  },
  {
    profileName: 'Ugreen',
    profileImage: 'u_green_foto.png',
    profileDescription:
      'Lihat daftar entitas UGreen yang berperan dalam rantai distribusi produk, serta tambahkan atau buat profil baru UGreen untuk memperluas dan mengelola jaringan mitra strategis.',
    profilePath: 'profile/profile-ugreen',
    imageSrc: '/images/profile/u_green_foto.png',
  },
  {
    profileName: 'Lahan',
    profileImage: 'kebun_nilam1.jpg',
    profileDescription:
      'Daftar lahan petani mencakup nama pemilik, luas dan lokasi lahan, status kepemilikan, serta status tanam. Pantau perkembangan lahan secara efisien.',
    profilePath: 'profile/pilih-daerah-lahan',
    imageSrc: '/images/profile/kebun_nilam1.jpg',
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
  height: 300px;
}
@media (max-width: 768px) {
  img {
    height: auto; /* Biarkan tinggi gambar disesuaikan dengan lebar gambar */
    max-height: 200px; /* Batasi tinggi gambar di layar kecil */
  }
}

/* Gaya untuk tombol */
button {
  @apply bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:scale-105 transition-all duration-300;
}

button:hover {
  @apply bg-gradient-to-r from-blue-600 to-green-600;
}

button:focus {
  @apply outline-none ring-2 ring-blue-400;
}
</style>
