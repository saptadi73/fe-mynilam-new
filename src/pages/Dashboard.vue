<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-light via-white to-primary-light">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${bannerImage})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80"></div>
      <div class="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 class="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
          Dashboard Pengawasan
          <span class="block text-primary-light">Produktivitas & Produksi</span>
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-4xl mx-auto animate-fade-in animation-delay-300">
          Pantau produktivitas petani nilam dari lahan garapan hingga panen, lacak penjualan hasil nilam dari produk jadi
          hingga distribusi ke pasar, dan prediksi hasil produksi dengan data aktual untuk perencanaan yang akurat.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <BaseButton class="transform hover:scale-105 transition-all duration-300 shadow-lg">
            Mulai Monitoring
            <BaseIcon name="chevron-right" class="w-5 h-5 ml-2" />
          </BaseButton>
          <BaseButton class="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
            Lihat Laporan
          </BaseButton>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BaseIcon name="chevron-down" class="w-8 h-8 text-white" />
      </div>
    </section>

    <section class="md:px-12 xl:h-screen">
      <h1 class="font-bold text-dark text-center text-2xl 2xl:text-3xl pt-12 pb-4">Analisis Produktivitas Petani</h1>
      <div class="bg-white border border-primary p-4 rounded-xl flex justify-center">
        <div v-if="processProductivity.isLoading.value">Loading...</div>
        <BaseChart
          v-else-if="processProductivityChartData"
          class="w-full h-[280px] md:h-[480px] 2xl:h-[700px]"
          chartId="chart1"
          chartType="line"
          :chartData="processProductivityChartData"
          :chartOptions="lineChartOptions"
        />
        <div v-else>No data available</div>
      </div>
    </section>

    <section class="xl:h-screen grid items-center">
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-0 gap-x-8 md:px-12 py-8">
        <div class="col-span-12 md:col-span-6">
          <div v-if="processPlanting.isLoading.value"></div>
          <div v-else-if="processPlanting.data" class="bg-white shadow-chart rounded-xl px-20 pb-8">
            <BaseChart
              chartId="chart2"
              chartType="bar"
              :chartData="processPlantingChartData"
              :chartOptions="chartOptions"
              :chartDataLabel="true"
            />
          </div>
        </div>

        <div class="col-span-12 md:col-span-6">
          <h1 class="font-bold text-dark text-2xl 2xl:text-3xl">Pemantauan Proses Tanam</h1>
          <p class="text-dark md:text-xl 2xl:text-2xl text-justify mt-2">
            Pantau setiap tahap pertumbuhan nilam dari penanaman benih hingga panen untuk memastikan praktik terbaik
            diimplementasikan. Monitor perkembangan tanaman secara berkala untuk memastikan hasil panen yang optimal dan
            kualitas yang terjaga.
          </p>
        </div>
      </div>
    </section>

    <section class="xl:h-screen grid items-center">
      <div class="grid grid-cols-12 gap-y-4 md:gap-y-0 gap-x-8 md:px-12 py-8">
        <div class="col-span-12 md:col-span-6 order-2 md:order-1">
          <h1 class="font-bold text-dark text-2xl 2xl:text-3xl">Pemantauan Proses Produksi</h1>
          <p class="text-dark text-xl 2xl:text-2xl text-justify mt-2">
            Pantau secara cermat setiap tahapan dari proses panen hingga ekstraksi minyak nilam/atsiri. Pastikan setiap
            langkah dijalankan dengan optimal, mulai dari pemilihan waktu panen yang tepat, pengolahan bahan baku,
            hingga proses distilasi yang menghasilkan minyak dengan kualitas terbaik. Jamin efisiensi dan kualitas dalam
            seluruh rantai produksi untuk memaksimalkan hasil dan mendukung kesejahteraan petani.
          </p>
        </div>

        <div class="col-span-12 md:col-span-6 order-1 md:order-2">
          <div class="bg-white shadow-chart rounded-xl px-20 pb-8">
            <div v-if="processHarvesting.isLoading.value"></div>
            <BaseChart
              v-else-if="processHarvesting.data"
              chartId="chart3"
              chartType="pie"
              :chartData="processHarvestingChartData"
              :chartOptions="prosesProduksidataChartOptions"
              :chartDataLabel="true"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="md:px-12 xl:h-screen">
      <h1 class="font-bold text-dark text-center text-2xl 2xl:text-3xl pt-12 pb-4">Data Penjualan</h1>
      <div class="bg-white border border-primary p-4 rounded-xl flex justify-center">
        <div v-if="sales.isLoading.value">Loading...</div>
        <BaseChart
          v-else-if="salesChartData"
          class="w-full h-[280px] md:h-[480px] 2xl:h-[700px]"
          chartId="chart4"
          chartType="line"
          :chartData="salesChartData"
          :chartOptions="salesLineChartOptions"
        />
        <div v-else>No data available</div>
      </div>
    </section>

    <!-- <section class="md:px-12 xl:h-screen">
      <h1 class="font-bold text-dark text-2xl 2xl:text-3xl text-center py-8">Pemantauan Pendapatan Petani</h1>
      <div class="bg-white shadow-chart rounded-xl px-10 flex justify-center">
        <BaseChart
          class="h-[320px] md:h-[480px] 2xl:h-[700px] w-full md:w-10/12"
          chartId="chart4"
          chartType="bar"
          :chartData="barChartData"
          :chartOptions="barChartOptions"
        />
      </div>
    </section>

    <section class="md:px-12 xl:h-screen">
      <h1 class="font-bold text-dark text-2xl 2xl:text-3xl text-center py-8">Catatan Penjualan</h1>
      <div class="bg-white shadow-chart rounded-xl px-10 flex justify-center">
        <BaseChart
          class="h-[320px] md:h-[480px] 2xl:h-[700px] w-full md:w-10/12"
          chartId="chart5"
          chartType="bar"
          :chartData="barChartDataPenjualan"
          :chartOptions="barChartOptionsPenjualan"
        />
      </div>
    </section> -->

    <section class="md:px-12 xl:h-screen mb-20">
      <h1 class="font-bold text-dark text-2xl 2xl:text-3xl text-center py-8">Produktivitas Minyak per Kabupaten</h1>
      <div class="bg-white border border-primary p-4 rounded-xl flex justify-center">
        <div v-if="productivityBasedKabupaten.isLoading.value">Loading...</div>
        <BaseChart
          v-else-if="productivityBasedKabupatenChartData"
          class="w-full h-[280px] md:h-[480px] 2xl:h-[700px]"
          chartId="chart6"
          chartType="bar"
          :chartData="productivityBasedKabupatenChartData"
          :chartOptions="kabupatenBarChartOptions"
        />
        <div v-else>No data available</div>
      </div>
    </section>
    <!-- Section for TableDataSalesPetani -->
    <section class="sales-table-section">
      <h2>Sales Data Petani</h2>
      <div class="mb-4">
        <BaseSearchBar v-model="searchTerm" placeholder="Cari nama petani..." />
      </div>
      <table class="sales-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID</th>
            <th>Farmer Name</th>
            <th>Total Sales Amount</th>
            <th>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the paginated data -->
          <tr v-for="(farmer, index) in paginatedTableData" :key="farmer.id">
            <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
            <td>{{ farmer.id }}</td>
            <td>
              <button
                @click="navigateToFarmerProfile(farmer.id)"
                class="text-primary hover:text-primary-dark underline cursor-pointer"
              >
                {{ farmer.farmer_name }}
              </button>
            </td>
            <td>{{ formatRupiah(farmer.total_sales_amount) }}</td>
            <td>{{ Number(farmer.total_quantity).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
      <BasePaginationButton
        :data="TableDataSalesPetani || []"
        :pageSize="pageSize"
        @change="handlePaginationChange"
        @page-change="handlePageChange"
      />
    </section>

    <!-- Section for Lahan Summary -->
    <section class="sales-table-section">
      <h2>Lahan Summary</h2>
      <div class="mb-4">
        <BaseSearchBar v-model="searchTermLahan" placeholder="Cari nama kabupaten..." />
      </div>
      <table class="sales-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Kabupaten ID</th>
            <th>Kabupaten Name</th>
            <th>Farmer Count</th>
            <th>Total Area (m<sup>2</sup>)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the paginated lahan data -->
          <tr v-for="(kabupaten, index) in paginatedLahanData" :key="kabupaten.kabupaten_id">
            <td>{{ (currentPageLahan - 1) * pageSizeLahan + index + 1 }}</td>
            <td>{{ kabupaten.kabupaten_id }}</td>
            <td>{{ kabupaten.kabupaten_name }}</td>
            <td>{{ kabupaten.farmer_count }}</td>
            <td>{{ Number(kabupaten.total_area_ha || 0).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
      <BasePaginationButton
        :data="lahanSummaryData || []"
        :pageSize="pageSizeLahan"
        @change="handlePaginationChangeLahan"
        @page-change="handlePageChangeLahan"
      />
    </section>

    <!-- Section for Tanah Summary -->
    <section class="sales-table-section">
      <h2>Tanah Summary</h2>
      <div class="mb-4">
        <BaseSearchBar v-model="searchTermTanah" placeholder="Cari nama kabupaten..." />
      </div>
      <table class="sales-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Kabupaten ID</th>
            <th>Kabupaten Name</th>
            <th>Batang Tanam</th>
            <th>Hasil (kg)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Loop through the paginated tanah data -->
          <tr v-for="(kabupaten, index) in paginatedTanahData" :key="kabupaten.kabupaten_id">
            <td>{{ (currentPageTanah - 1) * pageSizeTanah + index + 1 }}</td>
            <td>{{ kabupaten.kabupaten_id }}</td>
            <td>{{ kabupaten.kabupaten_name }}</td>
            <td>{{ kabupaten.batang_tanam }}</td>
            <td>{{ kabupaten.hasil_kg }}</td>
          </tr>
        </tbody>
      </table>
      <BasePaginationButton
        :data="tanahSummaryData || []"
        :pageSize="pageSizeTanah"
        @change="handlePaginationChangeTanah"
        @page-change="handlePageChangeTanah"
      />
    </section>

    <!-- <section class="md:px-12">
      <h1 class="font-bold text-dark text-2xl 2xl:text-3xl text-center py-8">Pemantauan Estimasi Produksi</h1>
      <div class="bg-white rounded-xl py-6 px-4">
        <Maps v-if="!showChart" @show-chart="showChart = true" />
        <template v-else>
          <BaseButton class="mx-6 mb-5" @click="showChart = false">Kembali</BaseButton>
          <div class="grid grid-cols-12 gap-4">
            <div
              v-for="(chart, index) in getRandomPetani()"
              :key="index"
              class="col-span-12 md:col-span-3 flex justify-center"
            >
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
        </template>
      </div>
    </section>

    <section class="md:px-12 mt-14">
      <div class="flex justify-center">
        <div class="bg-white pb-2 rounded-lg shadow-md border border-primary w-full">
          <h1 class="font-bold text-dark text-2xl 2xl:text-3xl text-center pt-8 pb-3">Kalender Produksi Terpadu</h1>
          <ul class="flex justify-start gap-4 px-8 list-none font-cera">
            <li class="flex items-center text-md font-semibold">
              <span class="w-4 h-4 rounded-full mr-1 bg-[#34C759]"></span> Tanam
            </li>
            <li class="flex items-center text-md font-semibold">
              <span class="w-4 h-4 rounded-full mr-1 bg-[#FFCC00]"></span> Panen
            </li>
            <li class="flex items-center text-md font-semibold">
              <span class="w-4 h-4 rounded-full mr-1 bg-[#32ADE6]"></span> Mulai Produksi
            </li>
            <li class="flex items-center text-md font-semibold">
              <span class="w-4 h-4 rounded-full mr-1 bg-[#800000]"></span> Selesai Produksi
            </li>
          </ul>
          <Calendar :attributes="attributes" :columns="columns" :rows="2" locale="id" class="p-4" expanded borderless />
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import BaseChart from '@/components/BaseChart.vue'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { type ChartOptions, type ChartType } from 'chart.js/auto'
// import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'
// import { useScreens } from 'vue-screen-utils'
// import Maps from '@/pages/sample/Maps.vue'
import BaseButton from '@/components/BaseButton.vue'
import BasePaginationButton from '@/components/BasePaginationButton.vue'
import BaseSearchBar from '@/components/BaseSearchBar.vue'
import { useProcessHarvesting, useProcessPlanting, useProcessProductivity, useProductivityBasedKabupaten, useDataSalesPetani, useLahanSummary, useTanamSummary, useSales } from '@/api/useDashboard'
import { formatRupiah } from '@/utils/useFormatRupiah'
import bannerImage from '@/assets/images/beranda/parralax.jpg';


// const { mapCurrent } = useScreens({ xs: '0px', sm: '640px', md: '728px', lg: '1024px' })
// const columns = mapCurrent({ lg: 4 }, 1)
// const showChart = ref(false)

const router = useRouter()

const processPlanting = useProcessPlanting()
const processHarvesting = useProcessHarvesting()
const processProductivity = useProcessProductivity()
const productivityBasedKabupaten = useProductivityBasedKabupaten()
const dataSalesPetani = useDataSalesPetani()
const lahanSummary = useLahanSummary()
const tanamSummary = useTanamSummary()
const sales = useSales()

const salesChartData = computed(() => sales.data.value || null)
const lahanSummaryData = computed(() => lahanSummary.data.value || null)
const tanahSummaryData = computed(() => tanamSummary.data.value || null)
const processPlantingChartData = computed(() => processPlanting.data.value || null)
const processHarvestingChartData = computed(() => {
  if (!processHarvesting.data.value) return null
  return {
    ...processHarvesting.data.value,
    labels: ['Proses', 'Selesai']
  }
})
const processProductivityChartData = computed(() => processProductivity.data.value || null)
const productivityBasedKabupatenChartData = computed(() => productivityBasedKabupaten.data.value || null)
const TableDataSalesPetani = computed(() => dataSalesPetani.data.value || null)

const paginatedTableData = ref<any[]>([])
const currentPage = ref(1)
const pageSize = 10
const searchTerm = ref('')

const filteredData = computed(() => {
  if (!TableDataSalesPetani.value) return []
  if (!searchTerm.value) return TableDataSalesPetani.value
  return TableDataSalesPetani.value.filter((farmer: any) =>
    farmer.farmer_name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})

// Reset to first page when search term changes
watch(searchTerm, () => {
  currentPage.value = 1
})

const handlePaginationChange = (data: any[]) => {
  paginatedTableData.value = data
}

const handlePageChange = (page: number) => {
  currentPage.value = page
}

// Lahan Summary table variables
const paginatedLahanData = ref<any[]>([])
const currentPageLahan = ref(1)
const pageSizeLahan = 10
const searchTermLahan = ref('')

const filteredLahanData = computed(() => {
  if (!lahanSummaryData.value) return []
  if (!searchTermLahan.value) return lahanSummaryData.value
  return lahanSummaryData.value.filter((kabupaten: any) =>
    kabupaten.kabupaten_name?.toLowerCase().includes(searchTermLahan.value.toLowerCase())
  )
})

// Reset to first page when search term changes
watch(searchTermLahan, () => {
  currentPageLahan.value = 1
})

const handlePaginationChangeLahan = (data: any[]) => {
  paginatedLahanData.value = data
}

const handlePageChangeLahan = (page: number) => {
  currentPageLahan.value = page
}

// Tanah Summary table variables
const paginatedTanahData = ref<any[]>([])
const currentPageTanah = ref(1)
const pageSizeTanah = 10
const searchTermTanah = ref('')

const filteredTanahData = computed(() => {
  if (!tanahSummaryData.value) return []
  if (!searchTermTanah.value) return tanahSummaryData.value
  return tanahSummaryData.value.filter((kabupaten: any) =>
    kabupaten.kabupaten_name?.toLowerCase().includes(searchTermTanah.value.toLowerCase())
  )
})

// Reset to first page when search term changes
watch(searchTermTanah, () => {
  currentPageTanah.value = 1
})

const handlePaginationChangeTanah = (data: any[]) => {
  paginatedTanahData.value = data
}

const handlePageChangeTanah = (page: number) => {
  currentPageTanah.value = page
}

const navigateToFarmerProfile = (farmerId: number) => {
  router.push(`/profile/profile-petani/${farmerId}`)
}


// const todos = ref([
//   {
//     description: 'Pemantauan Estimasi Produksi.',
//     dates: { repeat: { weekdays: 5 } }, // Every Friday
//     color: 'red',
//   },
// ])

// const attributes = computed<any>(() => [
//   // Attributes for todos
//   ...todos.value.map((todo) => ({
//     dates: todo.dates,
//     dot: {
//       color: todo.color,
//     },
//     popover: {
//       label: todo.description,
//     },
//   })),
// ])

// const lineChartData: ChartData<'line'> = {
//   labels: [
//     'Januari',
//     'Februari',
//     'Maret',
//     'April',
//     'Mei',
//     'Juni',
//     'Juli',
//     'Agustus',
//     'September',
//     'Oktober',
//     'November',
//     'Desember',
//   ],
//   datasets: [
//     {
//       label: 'Total Data',
//       data: [500, 280, 350, 480, 140, 200, 140, 420, 270, 150, 140, 130],
//       backgroundColor: ['#015438'],
//       borderColor: ['#1BAE60'], // line color
//       pointRadius: 6, // point size
//     },
//   ],
// }

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
        text: 'Jumlah Batang Tanam',
        color: '#000000',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
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
        size: 20,
      },
      padding: 6,
      formatter: (value, context: any) => {
        if (context.chart.config.type === 'pie') {
          const total = context.chart._metasets[0].total
          const percentage = ((value / total) * 100).toFixed(0)
          return percentage + '%'
        } else {
          return Number(value).toLocaleString('id-ID')
        }
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

// const barChartData: ChartData = {
//   labels: [
//     'Januari',
//     'Februari',
//     'Maret',
//     'April',
//     'Mei',
//     'Juni',
//     'Juli',
//     'Agustus',
//     'September',
//     'Oktober',
//     'November',
//     'Desember',
//   ],
//   datasets: [
//     {
//       label: 'Total Data',
//       data: [500, 280, 350, 480, 140, 200, 140, 420, 270, 150, 140, 130],
//       backgroundColor: ['#20D173'],
//       hoverOffset: 4,
//     },
//   ],
// }

// const barChartDataPenjualan: ChartData = {
//   labels: [
//     'Januari',
//     'Februari',
//     'Maret',
//     'April',
//     'Mei',
//     'Juni',
//     'Juli',
//     'Agustus',
//     'September',
//     'Oktober',
//     'November',
//     'Desember',
//   ],
//   datasets: [
//     {
//       label: 'Agen',
//       data: [320, 130, 250, 200, 510, 160, 250, 320, 380, 380, 140, 130],
//       backgroundColor: ['#24E880'],
//       hoverOffset: 4,
//     },
//     {
//       label: 'Koperasi',
//       data: [500, 290, 90, 400, 460, 410, 250, 220, 100, 350, 140, 130],
//       backgroundColor: ['#7BB401'],
//       hoverOffset: 4,
//     },
//     {
//       label: 'Ugreen',
//       data: [220, 180, 100, 360, 370, 190, 250, 220, 190, 100, 140, 130],
//       backgroundColor: ['#015438'],
//       hoverOffset: 4,
//     },
//   ],
// }

// const barChartOptions: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       display: true,
//       labels: {
//         boxWidth: 18,
//         boxHeight: 18,
//       },
//     },
//   },
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Bulan',
//         color: '#015438',
//         font: {
//           size: 20,
//           weight: 'bold',
//         },
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Juta',
//         color: '#015438',
//         font: {
//           size: 20,
//           weight: 'bold',
//         },
//       },
//     },
//   },
// }

// const barChartOptionsPenjualan: ChartOptions<'bar'> = {
//   responsive: true,
//   maintainAspectRatio: false,
//   plugins: {
//     legend: {
//       display: true,
//       labels: {
//         boxWidth: 18,
//         boxHeight: 18,
//       },
//     },
//   },
//   scales: {
//     x: {
//       title: {
//         display: true,
//         text: 'Bulan',
//         color: '#015438',
//         font: {
//           size: 20,
//           weight: 'bold',
//         },
//       },
//     },
//     y: {
//       title: {
//         display: true,
//         text: 'Kilogram',
//         color: '#015438',
//         font: {
//           size: 20,
//           weight: 'bold',
//         },
//       },
//     },
//   },
// }

const salesLineChartOptions: ChartOptions<'line'> = {
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
        text: 'Total Penjualan (Rp)',
        color: '#000000',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
      ticks: {
        callback: function(value) {
          return 'Rp ' + Number(value).toLocaleString('id-ID')
        }
      }
    },
  },
}

const kabupatenBarChartOptions = ref<ChartOptions<'bar'>>({
  responsive: true,
  maintainAspectRatio: false,
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
        text: 'Kabupaten',
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
        text: 'kg',
        color: '#015438',
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  },
})

// const chartDataEstimasiProduksi = [
//   {
//     title: 'Ahmad Fajar',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [20, 80],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Agus Saputra',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [65, 35],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Budi Santoso',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [35, 65],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Andi Pratama',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [10, 90],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Joko Susanto',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [20, 80],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Bambang Waluyo',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [65, 35],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Hendri Wijaya',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [35, 65],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Dedi Kurniawan',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [10, 90],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
//   {
//     title: 'Iwan Setiawan',
//     data: {
//       labels: ['Selesai', 'Proses'],
//       datasets: [
//         {
//           label: 'Total Data',
//           data: [40, 60],
//           backgroundColor: ['#20D173', '#015438'],
//           hoverOffset: 4,
//         },
//       ],
//     },
//   },
// ]

// const getRandomPetani = () => {
//   // Shuffle the array
//   const shuffledArray = chartDataEstimasiProduksi.sort(() => Math.random() - 0.5)
//   // Pick only the first 8 items from the shuffled array
//   return shuffledArray.slice(0, 8)
// }

// const estimastiProduksiChartOptions: ChartOptions<'pie'> = {
//   responsive: true,
//   maintainAspectRatio: true,
//   plugins: {
//     legend: {
//       display: true,
//       labels: {
//         boxWidth: 16,
//         boxHeight: 16,
//       },
//     },
//     datalabels: {
//       color: 'white',
//       display: function (context) {
//         let dataset = context.dataset
//         let count = dataset.data.length
//         let value = dataset.data[context.dataIndex]
//         return Number(value) > count * 1.5
//       },
//       font: {
//         weight: 'bold',
//         size: 14,
//       },
//       padding: 6,
//       formatter: (value, context: any) => {
//         const total = context.chart._metasets[0].total
//         const percentage = ((value / total) * 100).toFixed(0)
//         return percentage + '%'
//       },
//     },
//   },
// }
</script>

<style scoped>
.banner-image,
.shadow-chart {
  box-shadow: 10px 10px 4px 0 rgba(0, 0, 0, 0.25);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

/* Custom gradient backgrounds for sections */
.bg-gradient-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

/* Enhanced card shadows */
.shadow-chart {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Hover effects for interactive elements */
.chart-container:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}

/* Responsive typography */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

/* Custom scrollbar for calendar */
.calendar-container ::-webkit-scrollbar {
  width: 6px;
}

.calendar-container ::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.calendar-container ::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.calendar-container ::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}


.sales-table-section {
  margin: 20px;
}

.sales-table {
  width: 100%;
  border-collapse: collapse;
}

.sales-table th, .sales-table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.sales-table th {
  background-color: #f2f2f2;
}
</style>

