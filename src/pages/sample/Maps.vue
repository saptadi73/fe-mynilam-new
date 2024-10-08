<template>
  <div id="map" class="h-[500px]"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { geoJSON, map, tileLayer } from 'leaflet'
import shp from 'shpjs'
import 'leaflet/dist/leaflet.css'
// import bekasiJson from '@/assets/maps/AGRISAWAH_AR_25K.json'
// import bekasiShp from '@/assets/maps/AGRIKEBUN_AR_25K.shp'
onMounted(async () => {
  const geojson = await shp('/maps/NONAGRIHUTANKERING_AR_50K.zip')
  const theMap = map('map', {
    attributionControl: false,
  })
  // Create a Tile Layer and add it to the map
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(theMap)
  const geoMap = geoJSON(geojson).addTo(theMap)
  // fit map to center
  theMap.fitBounds(geoMap.getBounds())
})
</script>
