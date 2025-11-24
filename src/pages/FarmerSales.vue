<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light">
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-3xl font-bold text-dark mb-6 text-center">Data Penjualan per Petani</h1>

        <div v-if="farmerSales.isLoading.value" class="text-center py-8">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p class="mt-2 text-gray-600">Loading...</p>
        </div>

        <div v-else-if="farmerSales.data && farmerSales.data" class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr class="bg-primary text-white">
                <th class="px-4 py-3 text-left border border-gray-300">No</th>
                <th class="px-4 py-3 text-left border border-gray-300">Nama Petani</th>
                <th class="px-4 py-3 text-right border border-gray-300">Total Penjualan (Rp)</th>
                <th class="px-4 py-3 text-right border border-gray-300">Total Kuantitas (Kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(farmer, index) in farmerSales.data"
                :key="farmer.id"
                :class="index % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
              >
                <td class="px-4 py-3 border border-gray-300">{{ index + 1 }}</td>
                <td class="px-4 py-3 border border-gray-300">{{ farmer.farmer_name }}</td>
                <td class="px-4 py-3 border border-gray-300 text-right font-semibold">
                  Rp {{ farmer.total_sales_amount.toLocaleString('id-ID') }}
                </td>
                <td class="px-4 py-3 border border-gray-300 text-right">
                  {{ farmer.total_quantity.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-else class="text-center py-8">
          <p class="text-gray-600">No data available</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataSalesPetani } from '@/api/useDashboard'

const farmerSales = useDataSalesPetani()
</script>

<style scoped>
/* Additional styling if needed */
</style>
