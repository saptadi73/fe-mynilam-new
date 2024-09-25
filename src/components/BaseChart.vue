<template>
  <div :style="{ width: chartWidth, height: chartHeight }">
    <slot name="chartTitle"></slot>
    <canvas v-bind:id="chartId" aria-label="Chart Data" role="img"></canvas>
  </div>
</template>

<script setup lang="ts">
import Chart, { type ChartData, type ChartType, type Plugin } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { onMounted } from 'vue'

interface ChartProps {
  chartId: string
  chartType: ChartType
  chartData: ChartData
  chartOptions: any
  chartWidth?: string
  chartHeight?: string
  chartDataLabel?: Boolean
  chartInnerLabel?: any
}

const props = defineProps<ChartProps>()

onMounted(() => {
  renderChart()
})

const innerLabel: Plugin = {
  id: 'innerLabel',
  beforeDatasetDraw(chart: Chart, args: { meta: { data: { x: number; y: number }[] } }) {
    const { ctx } = chart
    const meta = args.meta
    const xCoor = meta.data[0].x
    const yCoor = meta.data[0].y
    ctx.save()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = 'bold 18px Cera Pro'
    ctx.fillText(props.chartInnerLabel || '', xCoor, yCoor)
    ctx.restore()
  },
}

const renderChart = () => {
  const ctx = document.getElementById(props.chartId) as HTMLCanvasElement

  let plugins: Plugin[] = []

  if (props.chartDataLabel) {
    plugins.push(ChartDataLabels)
  }

  if (props.chartInnerLabel) {
    plugins.push(innerLabel)
  }

  new Chart(ctx, {
    type: props.chartType,
    data: props.chartData,
    options: props.chartOptions,
    plugins: plugins,
  })
}
</script>
