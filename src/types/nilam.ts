import type { ChartData } from 'chart.js'

export interface NilamPlantingType {
  id: number
  production_identifier: string
  farmer_name: string
  coordinates: string
  area: string
  date_planned_start: string
  date_planned_finish: string
  planting_estimates: string
  address: string
  state: string
  completion_percentage: number
  chartData: ChartData
}

export interface NilamProductionType {
  id: number
  production_identifier: string
  farmer_name: string
  coordinates: string
  date_started: string
  date_harvested: string
  production_estimates: string
  address: string
  state: string
  completion_percentage: number
  chartData: ChartData
}
