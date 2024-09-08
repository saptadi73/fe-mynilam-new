<template>
  <Icon />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const Icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
</script>
