<template>
  <div
    class="product-card relative bg-primary-light rounded-3xl border border-[#B2B4E0] cursor-pointer hover:shadow-xl hover:bg-slate-300 duration-300 ease-in-out px-5 pt-3 pb-8 w-full"
  >
    <div class="text-center font-bold text-lg">{{ cardCode }}</div>

    <!-- <button
      class="absolute top-2 right-2 w-9 h-9 rounded-full text-[#8ca39b] hover:bg-[#E6EEEB] hover:text-primary inline-flex justify-center items-center transition-all duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="size-9"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button> -->

    <template v-if="cardPath">
      <RouterLink :to="`/${cardPath}/${cardId}`">
        <slot name="card-content"></slot>
      </RouterLink>
    </template>

    <template v-else>
      <div>
        <slot name="card-content"></slot>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
interface PropsCard {
  cardId?: number | string
  cardPath?: string
  cardCode?: string
}

defineProps<PropsCard>()
</script>

<style>
.product-card {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
