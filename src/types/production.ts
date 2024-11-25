import type { ChartData } from 'chart.js'

export interface HarvestingParams {
  name?: string
  kabupaten_id?: number
  associate_code?: 'agent' | 'koperasi'
  start_date?: string
  end_date?: string
}

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
  date_created: string
  date_modified: string
  area_ha: number
  area_uom: [number, string]
}

export interface NilamPlantingType {
  id: number
  production_identifier: string
  production_planting_image_url: string
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

export interface NilamDetailType {
  id: number
  asset_id: any
  production_identifier: string
  production_planting_image_url: string
  employee_id: any
  coordinates: string
  weather_conditions: string
  kabupaten_id: any
  area: string
  date_planned_start: string
  date_planned_finish: string
  date_missed: string
  produce_product: any
  actual_quantity: number
  quantity_loss: number
  address: string
  state: string
  completion_percentage: number
}

export interface NilamProductionType {
  id: number
  production_identifier: string
  employee_id: any
  coordinates: string
  date_started: string
  date_harvested: string
  final_product: any
  produce_product: any
  address: string
  state: string
  completion_percentage: number
  chartData: ChartData
}

export interface NilamProductionDetailType {
  id: number
  asset_id: any
  production_identifier: string
  production_harvesting_image_url: string
  employee_id: any
  coordinates: string
  weather_conditions: string
  kabupaten_id: any
  area_ha: number
  date_started: string
  date_harvested: string
  date_actual: string
  extraction_method: string
  produce_product: any
  final_product: any
  final_quantity: string
  product_quality: string
  address: string
  state: string
  completion_percentage: number
  percentage_final_quantity: number
  planting_produce_quantity: number
}

export interface DaftarTanamParams {
  name?: string
  kabupaten_id?: number
}

export interface TanamDetailParams {
  id_employee?: number
}

export interface DaftarProduksiParams {
  name?: string
  kabupaten_id?: number
}

export interface ProduksiDetailParams {
  id_harvesting?: number
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
