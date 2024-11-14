<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal" class="max-w-3xl">
    <template #modal-content>
      <div class="p-4 h-72 flex flex-col justify-between">
        <div v-for="data in data" :key="data.id" class="bg-white shadow-sm rounded-xl p-4 mt-auto">
          <div class="flex flex-row items-center gap-2">
            <h1 class="font-semibold text-primary">{{ data.author_id[1] }}</h1>
            <span class="text-sm font-semibold text-primary-3">{{ formatDate(data.date, true) }}</span>
          </div>
          <p class="text-sm text-primary" v-html="data.body"></p>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import { Note } from '@/types/production'
import { formatDate } from '@/utils/useFormatDate'

interface PropsModal {
  modal: Boolean
  data: Note[]
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
