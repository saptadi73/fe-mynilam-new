import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'

const mapDataWithChart = (actual_quantity: number, final_quantity: number) => {
  const process = final_quantity - actual_quantity
  return {
    chartData: {
      labels: ['Proses', 'Selesai'],
      datasets: [
        {
          label: 'Total Data',
          data: [process, actual_quantity],
          backgroundColor: ['#015438', '#20D173'],
          hoverOffset: 4,
        },
      ],
    },
  }
}

export function useProcessPlanting() {
  const path = '/dashboard/process-planting'
  const getProcessPlanting = async () => {
    const response = await apiGet(path)
    return response ? mapDataWithChart(response.actual_quantity, response.dry_quantity).chartData : null
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
    return response ? mapDataWithChart(response.actual_final_quantity, response.final_quantity).chartData : null
  }

  return useQuery({
    queryKey: ['processHarvesting'],
    queryFn: getProcessHarvesting,
  })
}
