<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Daftar Produk Agen" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 justify-start">
        <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-4 md:gap-x-4 mt-2">
        <div
          class="col-span-12 py-5 self-center text-center text-gray-600"
          v-if="!inventoryQuant.data.value && !inventoryQuant.isLoading.value"
        >
          Tidak ada data untuk ditampilkan
        </div>
        <BaseSkeletonCard
          v-if="inventoryQuant.isLoading.value"
          v-for="n in 4"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <BaseCard
          v-for="data in inventoryQuant.data.value"
          :key="data.id"
          :card-code="data.product_id[1]"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2 h-1/3">
              <img
                v-if="!data.product_image_url"
                src="@/assets/images/profile/petani-default.png"
                class="w-full object-cover rounded-xl"
                :alt="data.product_id + ' Image'"
              />
              <img
                v-else
                :src="data.product_image_url"
                class="w-full object-cover rounded-xl"
                :alt="data.product_id + ' Image'"
              />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Stok Tersedia</h1>
                <p class="font-bold text-sm">{{ data.quantity_available }} Kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Stok Terjual</h1>
                <p class="font-bold text-sm">{{ data.quantity_sold }} Kg</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p class="font-bold text-sm">{{ data.availability_status || '-' }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import { useInventoryQuant } from '@/api/useInventory'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'

const route = useRoute()
const id = route.params.id

const params = ref({ employee_id: Number(id) || null })
const inventoryQuant = useInventoryQuant(params)
</script>
