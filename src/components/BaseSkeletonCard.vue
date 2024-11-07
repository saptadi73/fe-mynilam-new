<template>
  <div class="product-card bg-primary-light rounded-3xl border border-[#B2B4E0] px-5 pt-3 pb-8 w-full">
    <div class="flex justify-center">
      <BaseSkeletonText class="w-24 h-4" />
    </div>

    <div class="flex justify-center pt-2 h-2/5">
      <div class="flex items-center justify-center w-full h-full bg-gray-300 rounded-xl sm:w-96">
        <svg
          class="w-10 h-10 text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
          />
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-12 gap-x-1 gap-y-4 pt-8">
      <div v-for="n in 4" :key="n" class="col-span-6">
        <BaseSkeletonText class="w-20 h-4" />
        <BaseSkeletonText class="w-28 h-4 mt-1" />
      </div>

      <div v-for="n in 4" :key="n" class="col-span-6">
        <BaseSkeletonText class="w-20 h-4" />
        <BaseSkeletonText class="w-28 h-4 mt-1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSkeletonText from './BaseSkeletonText.vue'
</script>

<style>
.product-card {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
