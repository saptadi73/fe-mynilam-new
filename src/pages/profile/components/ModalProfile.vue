<template>
  <BaseModal :show-modal="modal" @set-modal="closeModal">
    <template #modal-content>
      <div class="profile">
        <div class="flex justify-center pt-24">
          <div class="relative relative-container flex justify-center items-center" v-if="userPhoto">
            <img :src="userPhoto" class="profile-image w-32 h-32 object-cover rounded-full" alt="Profile Image" />

            <svg
              @click="handleDeleteUserPhoto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon-delete hidden absolute w-8 h-8 cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>

          <div
            v-else
            @click="triggerUserPhotoInput"
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

        <!-- Hidden user profile image input -->
        <input type="file" ref="userPhotoInput" accept=".jpg, .jpeg, .png" @change="handleFileChange" class="hidden" />

        <!-- Modal body -->
        <slot name="body-form"> </slot>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'

import { ref } from 'vue'

interface PropsModal {
  modal: Boolean
  profilePhoto?: string
}

const props = defineProps<PropsModal>()
const emit = defineEmits({
  setModal: (status) => typeof status === 'boolean',
  'file-uploaded': (file) => file instanceof File,
})

const closeModal = () => {
  emit('setModal', false)
}

const userPhoto = ref<string | undefined>(props.profilePhoto)
const userPhotoInput = ref<HTMLInputElement | null>(null)

const triggerUserPhotoInput = () => {
  userPhotoInput.value?.click()
}

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const fileURL = URL.createObjectURL(file)
    userPhoto.value = fileURL
    emit('file-uploaded', file)
  }
}

const handleDeleteUserPhoto = () => {
  userPhoto.value = null
}
</script>

<style>
.profile {
  background-image: url('@/assets/images/profile/profile-bg.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

.profile-image {
  transition: opacity 0.3s ease;
}

.relative-container:hover .profile-image {
  opacity: 0.6;
}

.relative-container:hover .icon-delete {
  color: white;
  display: block;
}
</style>
