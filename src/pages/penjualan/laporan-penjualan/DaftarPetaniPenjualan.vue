<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Petani" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 justify-start">
        <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-4 md:gap-x-4 mt-2">
        <BaseCardAdd card-title="Petani" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <div
          class="col-span-9 self-center text-center text-gray-600"
          v-if="!stockLocation.data.value && !stockLocation.isLoading.value"
        >
          Tidak ada data untuk ditampilkan
        </div>
        <BaseSkeletonCard
          v-if="stockLocation.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <BaseCard
          v-for="data in stockLocation.data.value"
          :key="data.id"
          card-path="inventaris/petani/daftar-produk"
          :card-id="data.employee_id[0]"
          :card-code="data.employee_id[1]"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2 h-1/3">
              <img
                v-if="!data.employee_image_url"
                src="@/assets/images/profile/petani-default.png"
                class="w-full object-cover rounded-xl"
                :alt="data.employee_id[1] + ' Image'"
              />
              <img
                v-else
                :src="data.employee_image_url"
                class="w-full object-cover rounded-xl"
                :alt="data.employee_id[1] + ' Image'"
              />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kode</h1>
                <p class="font-bold text-sm">{{ data.employee_ilo_associate_code || '-' }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Alamat</h1>
                <p class="font-bold text-sm">{{ data.address }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Desa/Kelurahan</h1>
                <p class="font-bold text-sm">{{ data.kelurahan }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kecamatan</h1>
                <p class="font-bold text-sm">{{ data.kecamatan }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Kota/Kabupaten</h1>
                <p class="font-bold text-sm">{{ data.kabupaten_id[1] || '-' }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Provinsi</h1>
                <p class="font-bold text-sm">{{ data.city }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStockLocation } from '@/api/useInventory'
import { useKabupaten } from '@/api/useLocalization'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import type { StockLocationParams } from '@/types/inventory'

const route = useRoute()
const { daerah } = route.params

const params = ref<StockLocationParams>({})
const stockLocation = useStockLocation(params)

const kabupaten = useKabupaten()

const handleParamValue = () => {
  const selectedKabupaten = kabupaten.data.value?.find((data) => data.name == daerah)
  if (selectedKabupaten) params.value = { associate_type: 'Petani', kabupaten_id: selectedKabupaten.id }
}

watch(kabupaten.data, handleParamValue)

onMounted(() => {
  handleParamValue()
})
</script>
