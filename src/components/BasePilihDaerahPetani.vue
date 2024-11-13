<template>
  <div class="container bg-primary-light pb-14">
    <BaseHeaderTitle title="Pilih Daerah Petani Nilam" />
    <BaseMap shp-file="/maps/aceh_kab.zip" :options="mapOptions" />
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseMap from '@/components/BaseMap.vue'
import type { GeoJSONOptions } from 'leaflet'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Props {
  routerName: string
}

const props = defineProps<Props>()

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const handleDaerahName = (name: string) => {
  // Remove the word "Kota" (case-insensitive) from the string
  const cleanedName = name.replace(/\bKota\b/i, '').trim()
  return cleanedName
}

const mapOptions: GeoJSONOptions = {
  onEachFeature: function (feature, layer) {
    layer.on({
      click: () => {
        router.push({ name: props.routerName, params: { daerah: handleDaerahName(feature.properties['Kab_Kota']) } })
      },
      mouseover: () => {
        layer.bindTooltip(feature.properties['Kab_Kota']).openTooltip()
      },
      mouseout: () => {
        layer.bindTooltip(feature.properties['Kab_Kota']).closeTooltip()
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
