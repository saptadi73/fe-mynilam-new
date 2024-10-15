<template>
  <div class="container bg-primary-light pb-14">
    <BaseHeaderTitle title="Pilih Daerah Penghasil Nilam" />
    <BaseMap shp-file="/maps/aceh_kab.zip" :options="mapOptions" />
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseMap from '@/components/BaseMap.vue'
import type { GeoJSONOptions } from 'leaflet'
import { useRouter } from 'vue-router'

const router = useRouter()

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const mapOptions: GeoJSONOptions = {
  onEachFeature: function (_feature, layer) {
    layer.on({
      click: () => {
        router.push({ name: 'Daftar Petani' })
      },
    })
  },
  style: function () {
    return {
      fillColor: getRandomColor(),
      fillOpacity: 0.6,
    }
  },
}
</script>
