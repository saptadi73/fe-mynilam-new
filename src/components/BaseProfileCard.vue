<template>
  <div class="profile-card bg-primary-light w-auto flex flex-col h-full rounded-xl p-4">
    <h1 class="text-center font-bold text-2xl pt-1 pb-4">{{ profileName }}</h1>
    <img :src="imageSrc" :alt="`${profileImage} Image`" />
    <p class="text-center flex-grow py-4">
      {{ profileDescription }}
    </p>

    <RouterLink :to="`${profilePath}`">
      <BaseButton class="w-full font-bold" variant="success">Lihat</BaseButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BaseButton from './BaseButton.vue'

interface PropsProfileCard {
  profileName: string
  profileImage: string
  profileDescription: string
  profilePath: string
}

const props = defineProps<PropsProfileCard>()

const imageSrc = ref<string | undefined>()

onMounted(async () => {
  try {
    const image = await import(`../assets/images/profile/${props.profileImage}.png`)
    imageSrc.value = image.default
  } catch (error) {
    console.error('Error loading image:', error)
  }
})
</script>

<style>
.profile-card {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.25);
}
</style>
