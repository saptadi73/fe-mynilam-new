<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <BaseHeaderTitle />
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div class="flex flex-row gap-x-8">
        <div class="absolute w-52 h-52 top-40 left-1/4 md:left-36 bg-white rounded-full mt-20 z-20">
          <img
            v-if="!isLoading"
            :src="profileUgreen?.[0].image_1920_url"
            alt="Profile"
            class="w-full object-cover rounded-xl p-4"
          />
        </div>

        <div v-if="!isLoading" class="text-3xl font-bold px-5 lg:px-20 ml-64 mt-3">
          {{ profileUgreen?.[0].name }}
        </div>
      </div>

      <!-- <ButtonEditProfile /> -->

      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20 mt-16">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].street }}</span>
            </div>
            <div class="col-span-4 font-bold">Kota</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].city }}</span>
            </div>
            <div class="col-span-4 font-bold">Kode Pos</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].zip }}</span>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Phone</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].phone }}</span>
            </div>
            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].email }}</span>
            </div>
            <div class="col-span-4 font-bold">Web Site</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span>{{ profileUgreen?.[0].website }}</span>
            </div>
          </div>
        </div>
        <!-- <div class="col-span-12">
          <div>Alamat</div>
          <div v-if="!isLoading" v-html="profileUgreen?.[0].street"></div>
          <template v-else>
            <BaseSkeletonText v-for="n in 6" :key="n" class="w-full h-4 mt-2" />
          </template>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
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
