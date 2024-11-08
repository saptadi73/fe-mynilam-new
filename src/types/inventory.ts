export interface StockLocationParams {
  kabupaten_id: number
}

export interface StockLocation {
  id: number
  name: string
  address: string
  kecamatan: string
  region: string
  kelurahan: string
  city: string
  kabupaten_id: [number, string]
  employee_id: [number, string]
}

export interface InventoryQuantParams {
  employee_id: number | null
}

export interface InventoryQuant {
  id: number
  product_id: [number, string]
  quantity_available: number
  quantity_sold: number
  employee_id: [number, string]
  availability_status: string
}
