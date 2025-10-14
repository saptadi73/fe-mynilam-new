<template>
  <div class="profile-card bg-primary-light w-auto flex flex-col h-full rounded-xl p-4">
    <!-- Judul Profil -->
    <h1 class="text-center text-dark font-bold text-2xl pt-1 pb-4">{{ profileName }}</h1>
    
    <!-- Gambar Profil -->
    <img :src="imageSrc" :alt="`${profileName} Image`" class="rounded-md w-full h-48 object-cover mb-4" />
    
    <!-- Deskripsi Profil -->
    <p class="text-center text-dark flex-grow py-4">
      {{ profileDescription }}
    </p>
    
    <!-- Tombol untuk Navigasi -->
    <RouterLink :to="profilePath">
      <BaseButton class="w-full font-bold" variant="success">Lihat</BaseButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface PropsProfileCard {
  profileName: string
  profileImage: string
  profileDescription: string
  profilePath: string
}

// Tidak perlu import defineProps, karena sudah otomatis tersedia dalam <script setup>
const props = defineProps<PropsProfileCard>()

// Membuat URL gambar yang ada di folder public
const imageSrc = `/images/profile/${props.profileImage}`
</script>

<style scoped>
.profile-card {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.25);
}

img {
  border-radius: 8px;
  object-fit: cover;
  max-width: 100%;
  height: 200px; /* Menyesuaikan tinggi gambar */
}
</style>
