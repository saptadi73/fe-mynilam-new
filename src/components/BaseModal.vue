<template>
  <div
    v-if="showModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed inset-0 top-0 right-0 left-0 z-50 flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full w-full"
  >
    <div class="relative pl-4 py-4 w-full max-w-lg max-h-screen overflow-y-auto">
      <!-- Modal header -->
      <div class="absolute z-10 top-4 right-0 flex items-center justify-between p-1 border-b rounded-t">
        <button
          @click="closeModal"
          type="button"
          class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="authentication-modal"
        >
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>

      <div class="relative bg-[#F6FDFF] rounded-lg shadow">
        <!-- Modal content -->
        <slot name="modal-content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PropsModal {
  showModal: Boolean
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>
