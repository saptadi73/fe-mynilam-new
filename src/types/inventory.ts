export interface StockLocationParams {
  kabupaten_id?: number
  associate_type?: 'Agent' | 'Koperasi' | 'Petani' | 'Ugreen'
}

export interface StockLocation {
  id: number
  name: string
  employee_id: [number, string]
  employee_ilo_associate: string
  employee_ilo_associate_code: string
  location_code: string
  warehouse_id: [number, string]
  kabupaten_id: [number, string]
  address: string
  kecamatan: string
  region: string
  kelurahan: string
  city: string
  source_location: boolean
  employee_image_url: string
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
  product_image_url: string
  availability_status: string
}

export interface StockMovesParams {
  kabupaten_id?: number
}

export interface StockMoves {
  id: number
  product_id: [number, string]
  quantity: number
  product_uom_id: [number, string]
  location_id: [number, string]
  location_dest_id: [number, string]
  date: string
  state: string
  movement_type: string
  movement_date: string
}
