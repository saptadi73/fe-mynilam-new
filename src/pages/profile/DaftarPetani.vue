<template>
  <div class="bg-image-wave2 px-5 md:px-16 pb-4">
    <BaseHeaderTitle :title="`Petani ${route.params.daerah}`" />
    <div class="bg-[#F6FDFF] p-4 rounded-3xl border border-[#015438]">
      <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-5 justify-start">
        <div class="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2">
          <BaseSearchBar placeholder="Cari nama"></BaseSearchBar>
          <BaseButton>Cari</BaseButton>
        </div>
      </div>
      <hr class="border border-[#015438] mt-3 -ml-4 -mr-4" />
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-4 md:gap-x-4 mt-2">
        <BaseCardAdd @click="showModal" card-title="Petani" class="col-span-12 md:col-span-6 lg:col-span-3" />
        <BaseSkeletonCard
          v-if="petaniList.isLoading.value"
          v-for="n in 3"
          :key="n"
          class="col-span-12 md:col-span-6 lg:col-span-3"
        />
        <template v-else>
          <div class="col-span-9 self-center text-center text-gray-600" v-if="petaniList.data.value === null">
            Tidak ada data untuk ditampilkan
          </div>

          <BaseCard
            v-else
            v-for="(card, cardIndex) in petaniList.data.value"
            :key="cardIndex"
            card-path="profile/profile-petani"
            :card-id="card.id"
            :card-code="card.name"
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
                <img v-else :src="card.image_1920_url" class="w-full object-cover rounded-xl" alt="Petani Image" />
              </div>

              <div class="grid grid-cols-12 gap-x-1 pt-2">
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Kode</h1>
                  <p class="font-bold text-sm">{{ card.ilo_associate_code }}</p>
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
                  <h1 class="text-sm">Anggota Keluarga</h1>
                  <p class="font-bold text-sm">{{ card.family_members }} Orang</p>
                </div>
                <div class="col-span-6 pt-2">
                  <h1 class="text-sm">Surat Kontrak</h1>
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
            <BaseInputFloat label="Nama" name="name" type="text" />
            <BaseInputFloat label="Alamat" name="alamat" type="text" />
            <BaseInputFloat label="Desa/Kelurahan" name="desa" type="text" />
            <BaseInputFloat label="Kecamatan" name="kecamatan" type="text" />
            <BaseInputSelect
              name="kota"
              :options="kabupatenList.data.value"
              label-key="name"
              value-key="id"
              placeholder="Kota/Kabupaten"
              :floating-label="true"
            />
            <BaseInputSelect :options="[]" name="provinsi" placeholder="Provinsi" :floating-label="true" />
            <BaseInputFloat label="Anggota Keluarga" name="anggota" type="text" />
            <BaseInputSelect :options="optionsStatus" name="status" placeholder="Status" :floating-label="true" />
            <BaseInputFloat label="Pendidikan" name="pendidikan" type="text" />
            <BaseInputFile
              name="suratKontrak"
              label="Surat Kontrak"
              file-type=".pdf"
              @file-selected="handleFileSuratKontrak"
            ></BaseInputFile>
            <BaseInputSelect
              :options="optionsJenisMitra"
              name="jenisMitra"
              placeholder="Jenis Mitra"
              :floating-label="true"
            />
            <BaseInputFloat label="Email" name="koperasi" type="email" />

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
import BaseInputFile from '@/components/BaseInputFile.vue'
import ModalProfile from './components/ModalProfile.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useKabupaten } from '@/api/useLocalization'
import { usePetaniList } from '@/api/usePetani'

const route = useRoute()
const { daerah } = route.params

const kabupatenList = useKabupaten()

const params = ref({ kabupaten_id: 0 })

const fetchKabupaten = async () => {
  await kabupatenList.refetch()
  const kabupaten = kabupatenList.data.value?.find((item) => item.name === daerah)

  if (kabupaten) {
    params.value.kabupaten_id = kabupaten?.id
  }
}

const petaniList = usePetaniList(params)

onMounted(async () => {
  await fetchKabupaten()
  if (params.value.kabupaten_id) {
    petaniList.refetch() // Memanggil refetch jika kabupaten_id sudah ada
  }
})

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

const optionsStatus = ref([
  { label: 'Agus Nur Drajat', value: 1 },
  { label: 'Jayadi Idzes', value: 2 },
  { label: 'Martin Paes', value: 3 },
])

const optionsJenisMitra = ref([
  { label: 'Agus Nur Drajat', value: 1 },
  { label: 'Jayadi Idzes', value: 2 },
  { label: 'Martin Paes', value: 3 },
])

function handleFileSuratKontrak(file: File) {
  console.log('Selected file:', file)
}
</script>
