import type { ChartData } from 'chart.js'
export interface Harvesting {
  id: number
  name: string
  kabupaten_id: boolean
  employee_id: [number, string]
  asset_id: [number, string]
  coordinates: any
  production_identifier: string
  produce_product: [number, string]
  final_product: [number, string]
  final_quantity: number
  uom: [number, string]
  date_started: string
  date_harvested: any
  state: string
  product_quality: string
  percentage_final_quantity: number
  completion_percentage: number
  address: any
}

export interface NilamPlantingType {
  id: number
  production_identifier: string
  employee_id: any
  coordinates: string
  kabupaten_id: any
  area: string
  date_planned_start: string
  date_planned_finish: string
  produce_product: any
  address: string
  state: string
  completion_percentage: number
  chartData: ChartData
}

export interface NilamProductionType {
  id: number
  production_identifier: string
  employee_id: any
  coordinates: string
  date_started: string
  date_harvested: string
  produce_product: any
  address: string
  state: string
  completion_percentage: number
  chartData: ChartData
}

export interface DaftarTanamParams {
  kabupaten_id?: number
}

export interface DaftarProduksiParams {
  kabupaten_id?: number
}

export interface NoteParams {
  id?: number
}

export interface Note {
  id: number
  author_id: any
  date: string
  body: string
}
