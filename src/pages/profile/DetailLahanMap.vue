<template>
  <div class="container mb-14">
    <BaseHeaderTitle title="Peta Lahan" :back-button="false" />
    <BaseMap :geo-json="geoJson" :options="mapOptions" />
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseMap from '@/components/BaseMap.vue'
import type { GeoJSONOptions } from 'leaflet'

interface Props {
  geoJson: object
}

defineProps<Props>()

const mapOptions: GeoJSONOptions = {
  onEachFeature: function (_feature, layer) {
    layer.on({
      click: () => {},
    })
  },
  style: function () {
    return {
      fillColor: 'blue',
      fillOpacity: 0.6,
    }
  },
}
</script>
