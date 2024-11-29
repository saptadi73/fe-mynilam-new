<template>
  <BaseHeaderTitle :title="cardTitle" />
  <div class="bg-[#F6FDFF] rounded-3xl shadow-lg px-8 py-4 grid grid-cols-12 gap-x-8">
    <div v-for="(card, index) in cardContent" :key="index" class="col-span-6">
      <h1 class="font-bold text-dark text-2xl text-center mb-4">{{ card.title }}</h1>
      <img v-if="index % 2 === 0" src="@/assets/images/produksi/laporan-petani.png" alt="Laporan Petani Image" />
      <img v-else src="@/assets/images/produksi/laporan-agen.png" alt="Laporan Petani Image" />
      <p class="font-cera text-dark text-center mt-2">
        {{ card.content }}
      </p>
      <RouterLink :to="{ name: card.pathName }">
        <BaseButton variant="dark" class="w-full mt-4">Tampilkan</BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'

interface PropsCardContent {
  title: string
  content: string
  pathName: string
}

interface PropsChoiceCard {
  cardTitle: string
  cardContent: PropsCardContent[]
}

defineProps<PropsChoiceCard>()
</script>
