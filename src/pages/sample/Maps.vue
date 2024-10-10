<template>
  <div id="map" class="h-[500px] w-full z-10"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { geoJSON, map, tileLayer } from 'leaflet'
import shp from 'shpjs'
import 'leaflet/dist/leaflet.css'

const emit = defineEmits()

onMounted(async () => {
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
  }

  const geojson = await shp('/maps/aceh_kab.zip')
  const theMap = map('map', {
    attributionControl: false,
  })
  // Create a Tile Layer and add it to the map
  tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(theMap)
  const geoMap = geoJSON(geojson, {
    onEachFeature: function (_feature, layer) {
      layer.on({
        click: () => {
          emit('showChart')
        },
      })
    },
    style: function () {
      return {
        fillColor: getRandomColor(),
        fillOpacity: 0.6,
      }
    },
  }).addTo(theMap)
  // fit map to center
  theMap.fitBounds(geoMap.getBounds())
})
</script>
