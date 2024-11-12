<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div class="flex flex-row gap-x-8">
        <div class="absolute top-24 left-1/4 md:left-36 bg-white rounded-full p-1.5 mt-20 z-20">
          <img src="@/assets/images/profile/profile-ugreen.png" alt="Profile" />
        </div>

        <div class="text-3xl font-bold px-5 lg:px-20 ml-56 mt-3">PT Ugreen Aromatis International</div>
      </div>

      <!-- <ButtonEditProfile /> -->

      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20 mt-16">
        <div class="col-span-12">
          <div v-if="!isLoading" v-html="profileUgreen"></div>
          <template v-else>
            <BaseSkeletonText v-for="n in 6" :key="n" class="w-full h-4 mt-2" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
// import ButtonEditProfile from './components/ButtonEditProfile.vue'
import { onMounted, ref } from 'vue'
import { useHttp } from '@/api/useHttp'

let profileUgreen = ref()
const isLoading = ref(false)

const getProfileUgreen = async () => {
  isLoading.value = true
  const response = await useHttp('/partner/ugreen/description')
  const data = await response.data

  profileUgreen.value = data

  isLoading.value = false
}

onMounted(() => {
  getProfileUgreen()
})
</script>
