import { useQuery } from '@tanstack/vue-query'
import { apiGet } from './apiClient'
import { Ref } from 'vue'
import type {
  NilamPlantingType,
  NilamProductionType,
  DaftarTanamParams,
  DaftarProduksiParams,
  Note,
  NoteParams,
} from '@/types/production'

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
  })
}

export function useNote(params?: Ref<NoteParams>) {
  const path = '/note'
  const getNoteList = (): Promise<Note[]> => apiGet(path, params?.value)

  return useQuery({
    queryKey: ['noteList', params],
    queryFn: getNoteList,
    enabled: () => !!params?.value.id, // only fetch if has kabupaten_id
  })
}
