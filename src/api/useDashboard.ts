import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'

const mapDataWithChart = (actual_quantity: number, final_quantity: number) => {
  // const process = Math.max(0, final_quantity - actual_quantity)
  return {
    chartData: {
      labels: ['Hasil Panen Basah','Hasil Produksi', ],
      datasets: [
        {
          label: 'Hasil Tanam vs Produksi',
          data: [actual_quantity,final_quantity, ],
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
    const result = response ? mapDataWithChart(response.actual_quantity, response.dry_quantity).chartData : null
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
    const result = response ? mapDataWithChart(response.actual_final_quantity, response.final_quantity).chartData : null
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
