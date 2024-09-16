<template>
  <div
    v-if="showModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed inset-0 top-0 right-0 left-0 z-50 flex justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full w-full"
  >
    <div class="relative pl-4 py-4 w-full max-w-lg max-h-screen overflow-y-auto">
      <!-- Modal content -->
      <div class="profile relative bg-[#F6FDFF] rounded-lg shadow">
        <div class="flex justify-center items-center pt-12 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12 text-primary-border hover:text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </div>

        <div class="flex justify-center">
          <div
            class="bg-[#d6e8b0] border-2 border-[#1bae60] hover:bg-[#c3d9b9] p-4 rounded-full relative flex justify-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-20 h-20 text-[#1bae60]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute top-7 w-12 h-12 text-[#F6FDFF]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </div>
        </div>

        <!-- Modal header -->
        <div class="absolute top-0 right-0 flex items-center justify-between p-1 border-b rounded-t">
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
        <!-- Modal body -->
        <div class="p-4 md:p-12">
          <form class="space-y-4">
            <slot></slot>
            <div class="flex justify-center gap-x-4 mx-8">
              <BaseButton class="w-full font-bold">Simpan</BaseButton>
              <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface PropsModal {
  showModal: Boolean
}

defineProps<PropsModal>()
const emit = defineEmits(['setModal'])

const closeModal = () => {
  emit('setModal', false)
}
</script>

<style scoped>
.profile {
  background-image: url('../assets/images/half-circle.svg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
