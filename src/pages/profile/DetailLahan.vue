<template>
  <div class="bg-image-wave relative px-5 lg:px-16 pb-4">
    <BaseHeaderTitle />
    <div class="bg-white opacity-90 shadow-md rounded-lg font-cera">
      <img class="bg-cover object-cover rounded-t-lg h-40 w-full" :src="data?.[0].asset_image_url" alt="Foto Lahan" />

      <div class="text-xl text-primary font-semibold flex justify-center py-3">
        <h1 v-if="!isLoading" class="text-2xl">{{ data?.[0].employee_id[1] }}</h1>
        <BaseSkeletonText v-else class="w-40 h-4" />
      </div>

      <div class="flex justify-end px-4">
        <BaseButton>Ubah</BaseButton>
      </div>

      <div class="grid grid-cols-12 gap-x-4 p-5">
        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Lahan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].farm_id }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Jenis</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].product_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Sumber Lahan</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].employee_ilo_associate }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Kepemilikan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].ownership_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kode Petani</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].employee_ilo_associate_code }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Koordinat</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].coordinates }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Luas Lahan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].area_ha }} m2</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Rata-rata Hasil (kg/m2)</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; 2</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Perkiraan Produksi</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].production_capacity }} kg</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>
        </div>

        <div class="col-span-6 space-y-1">
          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Alamat</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].address }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Provinsi</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].state_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Kabupaten/Kota</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].kabupaten_id[1] }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Penanaman</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].planting_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Status Panen</div>
            <div class="col-span-6 capitalize flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].harvesting_status }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-x-1.5">
            <div class="col-span-6 font-semibold text-primary">Peta Lahan</div>
            <div class="col-span-6 flex items-center">
              <p v-if="!isLoading">:&nbsp; {{ data?.[0].shp_filename }}</p>
              <template v-else>
                :&nbsp;
                <BaseSkeletonText class="w-full h-4" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLahanDetail } from '@/api/useAset'
import BaseButton from '@/components/BaseButton.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseSkeletonText from '@/components/BaseSkeletonText.vue'
import { LahanDetailParams } from '@/types/partner'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route)

const idDetail = ref<LahanDetailParams>({ asset_id: Number(route.params.id) })
const { isLoading, data } = useLahanDetail(idDetail)
</script>
