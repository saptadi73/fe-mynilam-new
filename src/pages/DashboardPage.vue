<template>
  <div class="p-2">
    <div>
      <BaseChart chartId="chart1" chartType="line" :chartData="lineChartData" :chartOptions="lineChartOptions" />
    </div>

    <div>
      <BaseChart
        chartId="chart2"
        chartType="pie"
        :chartData="data"
        :chartOptions="chartOptions"
        chartWidth="400px"
        chartHeight="auto"
      />
    </div>

    <div>
      <BaseChart chartId="chart3" chartType="bar" :chartData="barChartData" :chartOptions="barChartOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseChart from '@/components/BaseChart.vue'
import { ChartData, ChartOptions } from 'chart.js/auto'

const lineChartData: ChartData = {
  labels: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  datasets: [
    {
      label: 'Total Data',
      data: [500, 280, 350, 480, 140, 200, 140, 420, 270, 150, 140, 130],
      backgroundColor: ['#015438', '#20D173'],
      hoverOffset: 4,
    },
  ],
}

const lineChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
    subtitle: {
      display: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Bulan',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Hektar',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
}

const data: ChartData = {
  labels: ['Proses', 'Selesai'],
  datasets: [
    {
      label: 'Total Data',
      data: [50, 50],
      backgroundColor: ['#015438', '#20D173'],
      hoverOffset: 4,
    },
  ],
}

const chartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
    },
    subtitle: {
      display: true,
    },
  },
}

const barChartData: ChartData = {
  labels: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  datasets: [
    {
      label: 'Total Data',
      data: [500, 280, 350, 480, 140, 200, 140, 420, 270, 150, 140, 130],
      backgroundColor: ['#015438', '#20D173'],
      hoverOffset: 4,
    },
  ],
}

const barChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
    },
    subtitle: {
      display: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Bulan',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Juta',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
}
</script>

<style></style>
