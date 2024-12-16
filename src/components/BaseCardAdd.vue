<template>
  <div
    class="product-card relative bg-primary-light rounded-3xl border border-[#B2B4E0] cursor-pointer hover:shadow-xl hover:bg-slate-200 duration-300 ease-in-out px-5 pt-3 pb-8 w-full h-full"
  >
    <div class="flex justify-center py-24">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-primary-border w-48 h-48"
          >
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <h1 class="font-cera font-bold text-xl text-primary-border text-center">Tambah Daftar {{ cardTitle }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsCard {
  cardTitle?: string
}

defineProps<PropsCard>()
</script>

<style>
.product-card {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
}
</style>
