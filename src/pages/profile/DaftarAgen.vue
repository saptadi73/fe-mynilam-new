<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle title="Agen/Koperasi" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-5 justify-start">
        <div class="flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 lg:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
        <BaseInputSelect
          name="kabupaten"
          label-key="name"
          value-key="id"
          :options="kabupaten.data.value"
          placeholder="Pilih kabupaten"
          @change="setDaftarAgenParams"
        ></BaseInputSelect>
        <BaseInputSelect
          name="jenis"
          :options="options2"
          placeholder="Pilih jenis mitra"
          @change="setDaftarAgenParams"
        ></BaseInputSelect>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Agen" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseSkeletonCard
          v-if="agenList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="agenList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in agenList.data.value"
            :key="cardIndex"
            card-path="profile/profile-agen"
            :card-id="card.id"
            :card-code="card.ilo_associate_code"
            class="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <template #card-content>
              <div class="flex justify-center pt-2 h-1/3">
                <img
                  v-if="!card.image_1920_url"
                  src="@/assets/images/profile/petani-default.png"
                  class="w-full object-cover rounded-xl"
                  alt="Petani Image"
                />
                <img v-else :src="card.image_1920_url" class="w-full object-cover rounded-xl" alt="Agen Image" />
              </div>

              <div class="grid grid-cols-12 gap-x-1 pt-2">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Nama</h1>
                  <p class="font-bold text-sm">{{ card.name }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Alamat</h1>
                  <p class="font-bold text-sm">{{ card.street }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Desa/Kelurahan</h1>
                  <p class="font-bold text-sm">{{ card.kelurahan ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kecamatan</h1>
                  <p class="font-bold text-sm">{{ card.kecamatan ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kota/Kabupaten</h1>
                  <p class="font-bold text-sm">{{ card.kabupaten_id[1] ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Provinsi</h1>
                  <p class="font-bold text-sm">{{ card.state_id[1] ?? '-' }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Jenis</h1>
                  <p class="font-bold text-sm capitalize">{{ card.ilo_associate }}</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">No Telepon</h1>
                  <p class="font-bold text-sm">-</p>
                </div>
              </div>
            </template>
          </BaseCard>
        </template>
      </div>
    </div>

    <ModalProfile :modal="modal" @set-modal="handleModal">
      <template #body-form>
        <div class="p-4 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <BaseInputFloat label="Nama Agen/Koperasi" name="name" type="text" />
            <BaseInputFloat label="Alamat" name="alamat" type="text" />
            <BaseInputFloat label="Desa/Kelurahan" name="desa" type="text" />
            <BaseInputFloat label="Kecamatan" name="kecamatan" type="text" />
            <BaseInputSelect
              name="kabupaten"
              :options="kabupaten.data.value"
              label-key="name"
              value-key="id"
              placeholder="Kota/Kabupaten"
              :floating-label="true"
            />
            <BaseInputSelect :options="[]" name="provinsi" placeholder="Provinsi" :floating-label="true" />
            <BaseInputSelect
              :options="optionsJenisMitra"
              name="jenisMitra"
              placeholder="Jenis Mitra"
              :floating-label="true"
            />
            <BaseInputFloat label="Email" name="email" type="email" />

            <div class="flex justify-center gap-x-4 mx-8">
              <BaseButton type="submit" class="w-full font-bold">Simpan</BaseButton>
              <BaseButton @click="closeModal" variant="success" class="w-full font-bold">Kembali</BaseButton>
            </div>
          </form>
        </div>
      </template>
    </ModalProfile>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import BaseInputSelect from '@/components/BaseInputSelect.vue'
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseCardAdd from '@/components/BaseCardAdd.vue'
import BaseSkeletonCard from '@/components/BaseSkeletonCard.vue'
import BaseInputFloat from '@/components/BaseInputFloat.vue'
import ModalProfile from './components/ModalProfile.vue'
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { useKabupaten } from '@/api/useLocalization'
import { useAgenList } from '@/api/useAgen'
import type { DaftarAgenParams } from '@/types/partner'

const kabupaten = useKabupaten()

interface Form {
  kabupaten: DaftarAgenParams['kabupaten_id']
  jenis: DaftarAgenParams['associate_type']
}

const { values } = useForm<Form>()

const daftarAgenParams = ref<DaftarAgenParams>({})
const agenList = useAgenList(daftarAgenParams)

const setDaftarAgenParams = () => {
  daftarAgenParams.value = {
    kabupaten_id: values.kabupaten,
    associate_type: values.jenis,
  }
}

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

const optionsJenisMitra = ref([
  { label: 'Koperasi', value: 1 },
  { label: 'Agen', value: 2 },
])

const options2 = ref([
  {
    label: 'Agen',
    value: 'agent',
  },
  {
    label: 'Koperasi',
    value: 'koperasi',
  },
])
</script>
