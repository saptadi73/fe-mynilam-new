<template>
  <div class="bg-image-wave px-16 pb-10">
    <BaseHeaderTitle :title="'Buat Daftar Produksi - ' + $route.params.daerah" />
    <section class="rounded-3xl bg-[#f5fdfe] border-2 border-primary py-5 px-8 md:flex">
      <FormMinyakNilam :lov-petani="lovPetani" />
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import FormMinyakNilam from '../components/FormMinyakNilam.vue'
import { useLovPetani } from '@/api/useLov'
import { useKabupaten } from '@/api/useLocalization'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { PetaniListParams } from '@/types/partner'

const route = useRoute()
const { daerah } = route.params
// query
const lovPetaniParams = ref<PetaniListParams>({})
const lovPetani = useLovPetani(lovPetaniParams)
const kabupaten = useKabupaten()

const handleParamValue = () => {
  const selectedKabupaten = kabupaten.data.value?.find((data) => data.name == daerah)
  if (selectedKabupaten) lovPetaniParams.value = { kabupaten_id: selectedKabupaten.id }
}

watch(kabupaten.data, handleParamValue)

onMounted(() => {
  handleParamValue()
})
</script>
