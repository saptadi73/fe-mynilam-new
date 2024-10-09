<template>
  <div class="p-4 bg-primary-light">
    <div class="h-screen">
      <h1 class="font-bold text-center text-3xl 2xl:text-4xl py-8">
        Dashboard Pengawasan Produktivitas, Penjualan, dan Produksi Petani
      </h1>

      <div class="px-12 flex justify-center">
        <img
          class="banner-image rounded-3xl border-4 border-[#B2B4E0]"
          src="../assets/images/banner-dashboard.jpg"
          alt="Banner Dashboard Image"
        />
      </div>

      <p class="text-center 2xl:text-xl px-40 py-8">
        Pantau produktivitas petani nilam dari lahan garapan hingga panen, lacak penjualan hasil nilam dari produk jadi
        hingga distribusi ke pasar, dan prediksi hasil produksi dengan data aktual untuk perencanaan yang akurat. Atur
        jadwal produksi dengan kalender terintegrasi, analisis pendapatan petani secara real-time, dan monitor seluruh
        proses produksi serta tahapan proses tanam untuk memastikan hasil yang optimal.
      </p>
    </div>

    <div class="px-12 h-screen">
      <h1 class="font-bold text-center text-2xl 2xl:text-3xl pt-12 pb-4">Analisis Produktivitas Petani</h1>
      <div class="bg-white p-4 rounded-xl flex justify-center">
        <BaseChart
          class="w-full h-[480px] 2xl:h-[700px]"
          chartId="chart1"
          chartType="line"
          :chartData="lineChartData"
          :chartOptions="lineChartOptions"
        />
      </div>
    </div>

    <div class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 px-12">
        <div class="col-span-6">
          <div class="bg-white rounded-xl px-20 pb-8">
            <BaseChart
              chartId="chart2"
              chartType="pie"
              :chartData="data"
              :chartOptions="chartOptions"
              :chartDataLabel="true"
            />
          </div>
        </div>

        <div class="col-span-6">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Pemantauan Proses Tanam</h1>
          <p class="text-xl 2xl:text-2xl text-justify mt-2">
            Pantau setiap tahap pertumbuhan nilam dari penanaman benih hingga panen untuk memastikan praktik terbaik
            diimplementasikan. Monitor perkembangan tanaman secara berkala untuk memastikan hasil panen yang optimal dan
            kualitas yang terjaga.
          </p>
        </div>
      </div>
    </div>

    <div class="h-screen grid items-center">
      <div class="grid grid-cols-12 gap-x-8 px-12 py-8">
        <div class="col-span-6">
          <h1 class="font-bold text-2xl 2xl:text-3xl">Pemantauan Proses Produksi</h1>
          <p class="text-xl 2xl:text-2xl text-justify mt-2">
            Pantau secara cermat setiap tahapan dari proses panen hingga ekstraksi minyak nilam/atsiri. Pastikan setiap
            langkah dijalankan dengan optimal, mulai dari pemilihan waktu panen yang tepat, pengolahan bahan baku,
            hingga proses distilasi yang menghasilkan minyak dengan kualitas terbaik. Jamin efisiensi dan kualitas dalam
            seluruh rantai produksi untuk memaksimalkan hasil dan mendukung kesejahteraan petani.
          </p>
        </div>

        <div class="col-span-6">
          <div class="bg-white rounded-xl px-20 pb-8">
            <BaseChart
              chartId="chart3"
              chartType="pie"
              :chartData="prosesProduksidata"
              :chartOptions="prosesProduksidataChartOptions"
              :chartDataLabel="true"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="px-12 h-screen">
      <h1 class="font-bold text-2xl 2xl:text-3xl text-center py-8">Pemantauan Pendapatan Petani</h1>
      <div class="bg-white rounded-xl px-10 flex justify-center">
        <BaseChart
          class="h-[480px] 2xl:h-[700px] w-10/12"
          chartId="chart4"
          chartType="bar"
          :chartData="barChartData"
          :chartOptions="barChartOptions"
        />
      </div>
    </div>

    <div class="px-12 h-screen">
      <h1 class="font-bold text-2xl 2xl:text-3xl text-center py-8">Catatan Penjualan</h1>
      <div class="bg-white rounded-xl px-10 flex justify-center">
        <BaseChart
          class="h-[480px] 2xl:h-[700px] w-10/12"
          chartId="chart5"
          chartType="bar"
          :chartData="barChartDataPenjualan"
          :chartOptions="barChartOptionsPenjualan"
        />
      </div>
    </div>

    <div class="px-12 h-screen">
      <h1 class="font-bold text-2xl 2xl:text-3xl text-center py-8">Pemantauan Estimasi Produksi</h1>
      <div class="bg-white rounded-xl py-6 px-4 grid grid-cols-12 gap-4">
        <div v-for="(chart, index) in chartDataEstimasiProduksi" :key="index" class="col-span-3 flex justify-center">
          <BaseChart
            class="bg-primary-light rounded-2xl border border-primary py-4 px-8 xl:w-10/12"
            :chartId="`Chart ${index}`"
            chartType="pie"
            :chartData="chart.data"
            :chartOptions="estimastiProduksiChartOptions"
            :chartDataLabel="true"
          >
            <template #chartTitle>
              <h1 class="flex justify-center font-bold text-xl mb-2">{{ chart.title }}</h1>
            </template>
          </BaseChart>
        </div>
      </div>
    </div>

    <div class="px-12">
      <h1 class="font-bold text-2xl 2xl:text-3xl text-center py-8">Kalender Produksi Terpadu</h1>
      <div class="flex justify-center">
        <Calendar :attributes="attributes" :columns="columns" :rows="2" locale="id" expanded />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseChart from '@/components/BaseChart.vue'
import { computed, reactive, ref } from 'vue'
import { ChartData, type ChartOptions } from 'chart.js/auto'
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'
import { useScreens } from 'vue-screen-utils'

const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '768px', lg: '1024px' })
const columns = mapCurrent({ lg: 4 }, 1)

const todos = ref([
  {
    description: 'Pemantauan Estimasi Produksi.',
    dates: { repeat: { weekdays: 5 } }, // Every Friday
    color: 'red',
  },
])

const attributes = computed<any>(() => [
  // Attributes for todos
  ...todos.value.map((todo) => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
    },
    popover: {
      label: todo.description,
    },
  })),
])

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
      backgroundColor: ['#015438'],
      borderColor: ['#1BAE60'], // line color
      hoverOffset: 4,
      pointRadius: 6, // point size
    },
  ],
}

const lineChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Bulan',
        color: '#000000',
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
        color: '#000000',
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

const prosesProduksidata: ChartData = {
  labels: ['Proses', 'Selesai'],
  datasets: [
    {
      label: 'Total Data',
      data: [75, 25],
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
      labels: {
        boxWidth: 18,
        boxHeight: 18,
      },
    },
    datalabels: {
      color: 'white',
      display: function (context) {
        let dataset = context.dataset
        let count = dataset.data.length
        let value = dataset.data[context.dataIndex]
        return Number(value) > count * 1.5
      },
      font: {
        weight: 'bold',
        size: 32,
      },
      padding: 6,
      formatter: (value, context: any) => {
        const total = context.chart._metasets[0].total
        const percentage = ((value / total) * 100).toFixed(0)
        return percentage + '%'
      },
    },
  },
}

const prosesProduksidataChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 18,
        boxHeight: 18,
      },
    },
    datalabels: {
      color: 'white',
      display: function (context) {
        let dataset = context.dataset
        let count = dataset.data.length
        let value = dataset.data[context.dataIndex]
        return Number(value) > count * 1.5
      },
      font: {
        weight: 'bold',
        size: 32,
      },
      padding: 6,
      formatter: (value, context: any) => {
        const total = context.chart._metasets[0].total
        const percentage = ((value / total) * 100).toFixed(0)
        return percentage + '%'
      },
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
      backgroundColor: ['#20D173'],
      hoverOffset: 4,
    },
  ],
}

const barChartDataPenjualan: ChartData = {
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
      label: 'Agen',
      data: [320, 130, 250, 200, 510, 160, 250, 320, 380, 380, 140, 130],
      backgroundColor: ['#24E880'],
      hoverOffset: 4,
    },
    {
      label: 'Koperasi',
      data: [500, 290, 90, 400, 460, 410, 250, 220, 100, 350, 140, 130],
      backgroundColor: ['#7BB401'],
      hoverOffset: 4,
    },
    {
      label: 'Ugreen',
      data: [220, 180, 100, 360, 370, 190, 250, 220, 190, 100, 140, 130],
      backgroundColor: ['#015438'],
      hoverOffset: 4,
    },
  ],
}

const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 18,
        boxHeight: 18,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Bulan',
        color: '#015438',
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
        color: '#015438',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
}

const barChartOptionsPenjualan: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 18,
        boxHeight: 18,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Bulan',
        color: '#015438',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Kilogram',
        color: '#015438',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
}

const chartDataEstimasiProduksi = reactive([
  {
    title: 'Tapaktuan',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [20, 80],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Kluet Utara',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [65, 35],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Kluet Selatan',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [35, 65],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Sawang',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [10, 90],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Labuhan Haji',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [20, 80],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Meukek',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [65, 35],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Sawang',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [35, 65],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
  {
    title: 'Blang Pidie',
    data: {
      labels: ['Selesai', 'Proses'],
      datasets: [
        {
          label: 'Total Data',
          data: [10, 90],
          backgroundColor: ['#20D173', '#015438'],
          hoverOffset: 4,
        },
      ],
    },
  },
])

const estimastiProduksiChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 16,
        boxHeight: 16,
      },
    },
    datalabels: {
      color: 'white',
      display: function (context) {
        let dataset = context.dataset
        let count = dataset.data.length
        let value = dataset.data[context.dataIndex]
        return Number(value) > count * 1.5
      },
      font: {
        weight: 'bold',
        size: 14,
      },
      padding: 6,
      formatter: (value, context: any) => {
        const total = context.chart._metasets[0].total
        const percentage = ((value / total) * 100).toFixed(0)
        return percentage + '%'
      },
    },
  },
}
</script>

<style scoped>
.banner-image {
  box-shadow: 8px 8px rgba(0, 0, 0, 0.25);
}
</style>
