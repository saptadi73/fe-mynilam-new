<template>
  <div class="container mb-14">
    <BaseHeaderTitle title="Detail Aset" />
    <BaseMap shp-file="/maps/shp_aset_lahan.zip" />
  </div>
</template>

<script setup lang="ts">
import BaseHeaderTitle from '@/components/BaseHeaderTitle.vue'
import BaseMap from '@/components/BaseMap.vue'
</script>
