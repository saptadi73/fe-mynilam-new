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

const mapOptions: GeoJSONOptions = {
  onEachFeature: function (feature, layer) {
    layer.on({
      click: () => {
        router.push({ name: props.routerName, params: { daerah: feature.properties['Kab_Kota'] } })
      },
      mouseover: () => {
        layer.bindPopup(feature.properties['Kab_Kota']).openPopup()
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
