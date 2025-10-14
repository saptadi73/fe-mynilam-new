<template>
  <span v-if="type === 'material'" class="material-symbols-outlined">{{ name }}</span>
  <Icon v-else />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

interface Props {
  name: string
  type?: 'svg' | 'material'
}

const props = withDefaults(defineProps<Props>(), { type: 'svg' })

const Icon = defineAsyncComponent(() => import(`../assets/icons/${props.name}.svg`))
</script>
