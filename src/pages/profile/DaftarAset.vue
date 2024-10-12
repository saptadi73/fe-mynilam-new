<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Aset" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-between">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
          <BaseInputSelect name="kabupaten" :options="options" placeholder="Pilih Kabupaten"></BaseInputSelect>
        </div>
        <BaseButton variant="success" icon-position="left">
          <BaseIcon name="download" />
          Unduh
        </BaseButton>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Aset" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <template v-for="card in cardAset" :key="card.code">
          <BaseCard
            :card-code="card.code"
            class="col-span-12 md:col-span-6 lg:col-span-3"
            @click="$router.push({ name: 'Detail Aset', params: { id: card.code } })"
          >
            <template #card-content>
              <div class="flex justify-center pt-2">
                <img
                  class="w-full rounded-xl border border-primary-border"
                  src="@/assets/images/profile/aset-lahan-1.png"
                  alt="Aset Image"
                />
              </div>

              <div class="grid grid-cols-12 gap-x-1 pt-2">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Nama Pemilik</h1>
                  <p class="font-bold text-sm">{{ card.petaniName }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Luas</h1>
                  <p class="font-bold text-sm">{{ card.luas }} Ha</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Lokasi GPS</h1>
                  <p class="font-bold text-sm">{{ card.lokasiGps }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Status Kepemilikan</h1>
                  <p class="font-bold text-sm">{{ card.statusKepemilikan }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kota/Kabupaten</h1>
                  <p class="font-bold text-sm">{{ card.kota }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Status Tanam</h1>
                  <p class="font-bold text-sm">{{ card.statusTanam }}</p>
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
      </div>

      <BaseModal :show-modal="modal" @set-modal="handleModal">
        <template #modal-content>
          <div class="px-4 md:p-8">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="flex justify-center">
                <div class="flex flex-col">
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="text-primary-border w-32 h-32"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <h1 class="font-cera font-bold text-xl text-primary-border">Tambah File JSON</h1>
                </div>
              </div>

              <hr class="-ml-8 -mr-8 border border-[#015438]" />

              <div class="grid grid-cols-12 gap-x-5">
                <div class="col-span-6 space-y-4">
                  <BaseInputFloat label="Nama Pemilik" name="name" type="text" />
                  <BaseInputFloat label="Lokasi GPS" name="name" type="text" />
                  <BaseInputSelect :options="[]" name="desa" placeholder="Desa/Kelurahan" :floating-label="true" />
                </div>

                <div class="col-span-6 space-y-4">
                  <div class="grid grid-cols-12 gap-x-2">
                    <BaseInputSelect
                      class="col-span-7"
                      :options="[]"
                      name="desa"
                      placeholder="Luas Lahan"
                      :floating-label="true"
                    />
                    <BaseInputSelect
                      class="col-span-5"
                      :options="optionsSatuan"
                      name="desa"
                      placeholder="Satuan"
                      :floating-label="true"
                    />
                  </div>
                  <BaseInputSelect
                    :options="optionsStatusKepemilikan"
                    name="desa"
                    placeholder="Status Kepemilikan"
                    :floating-label="true"
                  />
                  <BaseInputSelect
                    :options="optionsStatusLahan"
                    name="desa"
                    placeholder="Status Lahan"
                    :floating-label="true"
                  />
                </div>
              </div>

              <div class="flex justify-center gap-x-4 mx-8">
                <BaseButton type="submit" class="w-full font-bold">Simpan</BaseButton>
                <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
              </div>
            </form>
          </div>
        </template>
      </BaseModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'

let modal = ref<Boolean>(false)

const showModal = () => {
  modal.value = true
}

const closeModal = () => {
  modal.value = false
}

const handleModal = (value: boolean) => {
  modal.value = value
}

const handleSubmit = () => {
  console.log('test')
}

const optionsSatuan = ref([{ label: 'Ha', value: 1 }])

const optionsStatusKepemilikan = ref([
  { label: 'Milik Pribadi', value: 1 },
  { label: 'Sewa', value: 2 },
  { label: 'Pinjam', value: 2 },
])

const optionsStatusLahan = ref([
  { label: 'Aktif', value: 1 },
  { label: 'Tidak AKtif', value: 2 },
])

const cardAset = reactive([
  {
    code: 'TNM94A2X',
    petaniName: 'Muwad',
    luas: 5,
    lokasiGps: '-5.572342, 95.321456',
    statusKepemilikan: 'Milik Sendiri',
    kota: 'Aceh Besar',
    anggotaKeluarga: '4',
    statusTanam: 'Aktif',
  },
])

const options = ref([
  {
    label: 'Aceh Selatan',
    value: 1,
  },
  {
    label: 'Aceh Utara',
    value: 2,
  },
  {
    label: 'Aceh Tengah',
    value: 3,
  },
])
</script>
