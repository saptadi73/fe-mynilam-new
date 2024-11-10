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
