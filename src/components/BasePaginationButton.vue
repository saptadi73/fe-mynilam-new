<template>
  <div class="flex flex-col items-center">
    <!-- Help text -->
    <span class="text-sm text-gray-700 dark:text-gray-400">
      Menampilkan <span class="font-semibold text-gray-900 dark:text-white">1</span> sampai
      <span class="font-semibold text-gray-900 dark:text-white">{{ props.pageSize }}</span> dari
      <span class="font-semibold text-gray-900 dark:text-white">{{ props.data.length }}</span> Data
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
      <!-- Buttons -->
      <button
        @click="handlePrevPage"
        :disabled="currentPage === 1"
        class="disabled:opacity-20 flex items-center justify-center px-4 h-10 text-base font-medium text-white rounded-s bg-primary"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Sebelumnya
      </button>
      <button
        @click="handleNextPage"
        :disabled="currentPage === totalPages"
        class="disabled:opacity-20 flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-e border-0"
      >
        Selanjutnya
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'

interface Props {
  data: {}[]
  pageSize: number
}

const emit = defineEmits(['change', 'page-change'])
const props = withDefaults(defineProps<Props>(), {
  pageSize: 10,
})

const currentPage = ref(1) //
const currentItems = ref<Props['data']>([])

// calculate total pages
const totalPages = Math.ceil(props.data.length / props.pageSize)

const startIndex = computed(() => {
  return (currentPage.value - 1) * props.pageSize
})

const setCurrentItems = () => {
  currentItems.value = props.data.slice(startIndex.value, startIndex.value + props.pageSize)
}

watch(currentItems, (data) => {
  emit('change', data)
})

watch(() => props.data, (newData) => {
  if (newData && newData.length > 0) {
    currentPage.value = 1 // Reset to first page when data changes
    setCurrentItems()
  }
}, { immediate: true })

watch(currentPage, setCurrentItems)

const handlePrevPage = () => {
  currentPage.value = currentPage.value - 1
  emit('page-change', currentPage.value)
}

const handleNextPage = () => {
  currentPage.value = currentPage.value + 1
  emit('page-change', currentPage.value)
}

onMounted(() => {
  setCurrentItems()
})
</script>
