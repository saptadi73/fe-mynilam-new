<template>
  <div
    class="product-card relative bg-[#E9FDF2] rounded-3xl border border-[#B2B4E0] cursor-pointer hover:shadow-xl hover:bg-slate-200 duration-300 ease-in-out px-5 pt-3 pb-8 w-full"
  >
    <div class="text-center font-bold text-lg">{{ cardCode }}</div>

    <button class="absolute top-2 right-2">
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24.5" cy="25" rx="22.5" ry="22" fill="#E6EEEB" />
        <path
          class="hover:fill-[#8ca39b]"
          d="M13.3327 39.5827L10.416 36.666L22.0827 24.9993L10.416 13.3327L13.3327 10.416L24.9993 22.0827L36.666 10.416L39.5827 13.3327L27.916 24.9993L39.5827 36.666L36.666 39.5827L24.9993 27.916L13.3327 39.5827Z"
          fill="#B0CAC1"
        />
      </svg>
    </button>

    <RouterLink :to="`/profile-petani/${cardCode}`">
      <slot name="card-content"></slot>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
interface PropsCard {
  cardCode?: string
}

defineProps<PropsCard>()
</script>

<style>
.product-card {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
