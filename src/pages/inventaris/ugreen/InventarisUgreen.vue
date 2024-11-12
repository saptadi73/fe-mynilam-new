<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Ugreen" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 justify-start">
        <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div v-if="!stockLocation.isLoading.value && !stockLocation.data.value" class="text-center mt-5">
        Tidak ada data untuk ditampilkan.
      </div>
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-4 md:gap-x-4 mt-2">
        <BaseCard
          v-for="data in stockLocation.data.value"
          :key="data.id"
          card-path="inventaris/ugree/daftar-produk"
          :card-id="data.employee_id[0]"
          :card-code="data.id.toString()"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        >
          <template #card-content>
            <div class="flex justify-center pt-2 h-1/3">
              <img src="https://placehold.co/400" class="w-full object-cover rounded-xl" alt="Petani Image" />
            </div>

            <div class="grid grid-cols-12 gap-x-1 pt-2">
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Stok Tersedia</h1>
                <p class="font-bold text-sm">{{ '-' }}</p>
              </div>
              <div class="col-span-6 pt-2">
                <h1 class="text-sm">Status</h1>
                <p class="font-bold text-sm">{{ '-' }}</p>
              </div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStockLocation } from '@/api/useInventory'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import type { StockLocationParams } from '@/types/inventory'

const params = ref<StockLocationParams>({ associate_type: 'Ugreen' })
const stockLocation = useStockLocation(params)
</script>
