import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type { NilamPlantingType, NilamProductionType } from '@/types/production'
import type { DaftarTanamParams, DaftarProduksiParams } from '@/types/production'

const mapDataWithChart = (response: any) => {
  return response.map((item: { completion_percentage: number }) => {
    const completed = Math.floor(item.completion_percentage)
    const remaining = 100 - completed

    return {
      ...item,
      chartData: {
        labels: ['', 'Proses'],
        datasets: [
          {
            label: 'Total Data',
            data: [completed, remaining],
            backgroundColor: ['#015438', '#20D173'],
            hoverOffset: 4,
          },
        ],
      },
    }
  })
}

export function useDaftarTanam(params?: Ref<DaftarTanamParams>) {
  const path = '/production/planting/list'

  const getDaftarTanam = async (): Promise<NilamPlantingType[]> => {
    const response = await apiGet(path, params?.value)
    return response ? mapDataWithChart(response) : response
  }

  return useQuery({
    queryKey: ['tanamNilamList', params],
    queryFn: getDaftarTanam,
    enabled: () => !!params?.value.kabupaten_id, // only fetch if has kabupaten_id
  })
}

export function useDaftarProduksi(params?: Ref<DaftarProduksiParams>) {
  const path = '/production/harvesting/list'

  const getDaftarProduksi = async (): Promise<NilamProductionType[]> => {
    const response = await apiGet(path, params?.value)
    return response ? mapDataWithChart(response) : response
  }

  return useQuery({
    queryKey: ['produksiNilamList', params],
    queryFn: getDaftarProduksi,
    enabled: () => !!params?.value.kabupaten_id, // only fetch if has kabupaten_id
  })
}
