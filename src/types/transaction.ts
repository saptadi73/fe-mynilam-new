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
  destination_actor_associate_code: string
  kabupaten_id: [number, string]
  quantity: number
  product_uom_id: [number, string]
  reference_code: string
  state: string
  ownership_line_ids: number[]
  product_image: string
}
