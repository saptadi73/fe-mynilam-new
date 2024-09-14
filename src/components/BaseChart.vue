<template>
  <div :style="{ width: chartWidth, height: chartHeight }">
    <h1 class="flex justify-center font-bold text-xl mb-2">{{ chartTitle }}</h1>
    <canvas v-bind:id="chartId" aria-label="Chart Data" role="img"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart, { type ChartType, type ChartData, type ChartOptions, type Plugin } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { _DeepPartialObject } from 'node_modules/chart.js/dist/types/utils'
import { onMounted } from 'vue'

interface ChartProps {
  chartId: string
  chartTitle?: string
  chartType: ChartType
  chartData: ChartData
  chartOptions: _DeepPartialObject<ChartOptions<ChartType>>
  chartWidth?: string
  chartHeight?: string
  chartDataLabel?: Boolean
}

const props = defineProps<ChartProps>()

onMounted(() => {
  renderChart()
})

const renderChart = () => {
  const ctx = document.getElementById(props.chartId) as HTMLCanvasElement

  let plugins: Plugin[] = []

  if (props.chartDataLabel) {
    plugins.push(ChartDataLabels)
  }

  new Chart(ctx, {
    type: props.chartType,
    data: props.chartData,
    options: props.chartOptions,
    plugins: plugins,
  })
}
</script>
