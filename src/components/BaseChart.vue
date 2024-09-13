<template>
  <div :style="{ width: chartWidth, height: chartHeight }">
    <canvas v-bind:id="chartId" aria-label="Chart Data" role="img"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart, { type ChartType, type ChartData, type ChartOptions } from 'chart.js/auto'
import type { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils'
import { onMounted } from 'vue'

interface ChartProps {
  chartId: string
  chartType: ChartType
  chartData: ChartData
  chartOptions: _DeepPartialObject<ChartOptions<ChartType>>
  chartWidth?: string
  chartHeight?: string
}

const props = defineProps<ChartProps>()

onMounted(() => {
  renderChart()
})

const renderChart = () => {
  const ctx = document.getElementById(props.chartId) as HTMLCanvasElement

  new Chart(ctx, {
    type: props.chartType,
    data: props.chartData,
    options: props.chartOptions,
  })
}
</script>
