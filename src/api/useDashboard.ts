import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'

const mapDataWithChart = (actual_quantity: number, quantity: number) => {
  // const process = Math.max(0, final_quantity - actual_quantity)
  return {
    chartData: {
      labels: ['Tanam Basah','Produksi Kering', ],
      datasets: [
        {
          label: 'Hasil Tanam vs Produksi',
          data: [quantity,actual_quantity ],
          backgroundColor: ['#015438', '#20D173'],
          hoverOffset: 4,
        },
      ],
    },
  }
}

const mapDataWithChart2 = (actual_final_quantity: number, quantity: number) => {
  // const process = Math.max(0, final_quantity - actual_quantity)
  return {
    chartData: {
      labels: ['Selesai','Proses', ],
      datasets: [
        {
          label: 'Pemantauan Produksi',
          data: [quantity,actual_final_quantity ],
          backgroundColor: ['#015438', '#20D173'],
          hoverOffset: 4,
        },
      ],
    },
  }
}

const mapDataWithProductivityChart = (data: any) => {
  if (!data) return null

  // API already returns Indonesian labels and proper colors, just return as is
  return {
    labels: data.labels,
    datasets: data.datasets.map((dataset: any) => ({
      ...dataset,
      backgroundColor: dataset.backgroundColor || ['#015438'],
      borderColor: dataset.borderColor || ['#1BAE60'],
      pointRadius: dataset.pointRadius || 6,
    }))
  }
}

const mapDataWithSalesChart = (data: any) => {
  if (!data) return null

  // Transform the monthly sales data into chart format
  const labels = data.map((item: any) => item.month)
  const values = data.map((item: any) => item.total_sales_amount)

  return {
    labels: labels,
    datasets: [
      {
        label: 'Total Penjualan',
        data: values,
        backgroundColor: '#015438',
        borderColor: '#1BAE60',
        pointRadius: 6,
      }
    ]
  }
}

const mapDataWithProductivityKabupatenBarChart = (data: any) => {
  if (!data) return null

  // Transform the object data into chart format
  const labels = Object.keys(data)
  const values = Object.values(data) as number[]

  return {
    labels: labels,
    datasets: [
      {
        label: 'Produktivitas Minyak (Kg)',
        data: values,
        backgroundColor: '#20D173',
        borderColor: '#015438',
        borderWidth: 1,
      }
    ]
  }
}

export function useProcessPlanting() {
  const path = '/dashboard/process-planting'
  const getProcessPlanting = async () => {
    const response = await apiGet(path)
    console.log('useProcessPlanting response:', response)
    const result = response ? mapDataWithChart(response.actual_quantity, response.quantity).chartData : null
    console.log('useProcessPlanting result:', result)
    return result
  }

  return useQuery({
    queryKey: ['processPlanting'],
    queryFn: getProcessPlanting,
  })
}

export function useProcessHarvesting() {
  const path = '/dashboard/process-harvesting'
  const getProcessHarvesting = async () => {
    const response = await apiGet(path)
    console.log('useProcessHarvesting response:', response)
    const result = response ? mapDataWithChart2(response.actual_final_quantity, response.final_quantity).chartData : null
    console.log('useProcessHarvesting result:', result)
    return result
  }

  return useQuery({
    queryKey: ['processHarvesting'],
    queryFn: getProcessHarvesting,
  })
}

export function useProcessProductivity() {
  const path = '/dashboard/dashboard/planting-productivity'
  const getProcessProductivity = async () => {
    const response = await apiGet(path)
    console.log('useProcessProductivity response:', response)
    const result = response ? mapDataWithProductivityChart(response) : null
    console.log('useProcessProductivity result:', result)
    return result
  }

  return useQuery({
    queryKey: ['processProductivity'],
    queryFn: getProcessProductivity,
  })
}

export function useSales() {
  const path = '/dashboard/petani/total-penjualan-bulan-ke-bulan'
  const getSales = async () => {
    const response = await apiGet(path)
    console.log('useSales response:', response)
    console.log('useSales response.data:', response?.data)
    console.log('useSales response status:', response?.status)

    // Try different response structures
    let data = null
    if (response?.data && Array.isArray(response.data)) {
      data = response.data
    } else if (response && Array.isArray(response)) {
      data = response
    } else if (response?.data?.data && Array.isArray(response.data.data)) {
      data = response.data.data
    }

    console.log('useSales extracted data:', data)
    const result = data ? mapDataWithSalesChart(data) : null
    console.log('useSales result:', result)
    return result
  }

  return useQuery({
    queryKey: ['sales'],
    queryFn: getSales,
  })
}

export function useProductivityBasedKabupaten() {
  const path = '/dashboard/dboard/pminyak'
  const getProductivityBasedKabupaten = async () => {
    const response = await apiGet(path)
    console.log('useProductivityBasedKabupaten response:', response)
    const result = response ? mapDataWithProductivityKabupatenBarChart(response) : null
    console.log('useProductivityBaseKabupaten result:', result)
    return result
  }

  return useQuery({
    queryKey: ['ProductivityBasedKabupaten'],
    queryFn: getProductivityBasedKabupaten,
  })
}

export function useTanamSummary() {
  const path = '/dashboard/petani/tanam-summary'
  const getTanamSummary = async () => {
    const response = await apiGet(path)
    console.log('useTanamSummary response:', response)
    const result = response ? response : null
    return result
  }

  return useQuery({
    queryKey: ['tanamSummary'],
    queryFn: getTanamSummary,
  })
}

export function useLahanSummary() {
  const path = '/dashboard/petani/lahan-summary'
  const getLahanSummary = async () => {
    const response = await apiGet(path)
    console.log('useLahanSummary response:', response)
    const result = response ? response : null
    return result
  }
  return useQuery({
    queryKey: ['lahanSummary'],
    queryFn: getLahanSummary,
  })
}

export function useDataSalesPetani() {
  const path = '/dashboard/petani/total-penjualan-per-petani'
  const getDataSalesPetani = async () => {
    const response = await apiGet(path)
    console.log('useDataSalesPetani response:', response) 
    const result = response ? response : null
    return result
  }

  return useQuery({
    queryKey: ['dataSalesPetani'],
    queryFn: getDataSalesPetani,
  })
}