<template>
  <div id="map" class="h-[500px] w-full z-10"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { geoJSON, GeoJSONOptions, map, tileLayer } from 'leaflet'
import shp from 'shpjs'
import 'leaflet/dist/leaflet.css'

interface Props {
  shpFile?: string
  geoJson?: object
  options: GeoJSONOptions
}

const emit = defineEmits()
const props = defineProps<Props>()

onMounted(async () => {
  const geojson = props.geoJson ? props.geoJson : props.shpFile ? await shp(props.shpFile) : undefined
  const theMap = map('map', {
    attributionControl: false,
  })
  // Create a Tile Layer and add it to the map
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(theMap)
  const geoMap = geoJSON(geojson, props.options).addTo(theMap)
  // fit map to center
  theMap.fitBounds(geoMap.getBounds())
})
</script>
