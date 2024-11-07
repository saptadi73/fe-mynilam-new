<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-rectangle-bg.png"
        alt="Background Profile"
      />

      <div
        v-if="!isLoading"
        class="absolute w-48 h-48 top-24 left-1/4 md:left-36 bg-white rounded-full p-1.5 mt-20 z-20"
      >
        <img
          v-if="profileAgen.image === null"
          src="@/assets/images/profile/petani-default.png"
          class="w-full object-cover rounded-xl p-4"
          alt="Petani Image"
        />
        <img v-else :src="profileAgen.image" class="w-full h-full rounded-full object-cover" alt="Profile Agen Image" />
      </div>

      <ButtonEditProfile />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">
        <p v-if="!isLoading">{{ profileAgen.name }}</p>
        <BaseSkeletonText v-else class="w-48 h-6" />
      </div>
      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.street }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.kelurahan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.kecamatan }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.kabupaten }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.provinsi ?? '-' }} </span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Anggota Keluarga</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.family_members }} Orang</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Status</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.organization_status }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Koperasi/Agen</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.organization_name }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Pendidikan</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">S-1 Management Lahan</span> <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Jenis Mitra</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.ilo_associate }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold flex items-center">
              : &nbsp; <span v-if="!isLoading">{{ profileAgen.email }}</span>
              <BaseSkeletonText v-else class="w-40 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonEditProfile from './components/ButtonEditProfile.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import { onMounted, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHttp } from '@/api/useHttp'
import type { AgenProfile } from '@/types/agen'

let profileAgen = reactive<AgenProfile>({
  image: '',
  name: '',
  street: '',
  kelurahan: '',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  family_members: 0,
  organization_status: '',
  organization_name: '',
  ilo_associate: '',
  email: '',
})
const isLoading = ref<boolean>(false)

const route = useRoute()

const getProfileAgen = async () => {
  isLoading.value = true
  const response = await useHttp('/partner/agent_koperasi/details', {
    user_id: route.params.id,
  })
  const agenData = await response.data

  profileAgen = agenData.map(
    (petani: { image_1920: string | boolean; kabupaten_id: any[] | boolean; state_id: any[] | boolean }) => ({
      ...petani,
      image: petani.image_1920 !== false ? `data:image/png;base64,${petani.image_1920}` : null,
      kabupaten: petani.kabupaten_id !== false ? petani.kabupaten_id[1] : null,
      provinsi: petani.state_id !== false ? petani.state_id[1] : null,
    })
  )[0]

  isLoading.value = false
}

onMounted(() => {
  getProfileAgen()
})
</script>
