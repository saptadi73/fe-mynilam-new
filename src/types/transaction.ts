export interface DaftarPenjualanParams {
  name?: string
  kabupaten_id?: number
  associate_type?: 'agent' | 'koperasi'
}

export interface DaftarPenjualan {
  id: number
  date_order: string
  name: string
  specific_codes: string
  destination_actor: [number, string]
  kabupaten_id: [number, string]
  quantity: number
  state: string
  price: number
  ownership_line_ids: number[]
  qr_code_id: [number, string]
}
