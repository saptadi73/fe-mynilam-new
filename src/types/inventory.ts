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
