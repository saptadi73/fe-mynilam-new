export interface DaftarPenjualanParams {
  destination_actor_name?: string
  kabupaten_id?: number
  id_petani?: number
  associate_type?: 'agent' | 'koperasi'
  start_date?: string
  end_date?: string
}

export interface DaftarPenjualan {
  name: string
  id: number
  destination_actor: [number, string]
  destination_actor_associate_code: string
  product_image_url: string
  specific_code: string
  source_actor: [number, string]
  product_id: [number, string]
  product_uom_id: [number, string]
  price: number
  quantity: number
  value: number
  subtotal: number
  batch_code: string
  ownership_code_id: [number, string]
  transaction_number: string
  qr_code_id: [number, string]
  qr_code_image: string
  stock_move_id: [number, string]
  date_order: string
  source_actor_associate_code: string
  kabupaten_id: [number, string]
  state: string
}

export interface ReferenceSummaryParams {
  id_petani?: number
  id_agent_koperasi?: number
  kabupaten_id?: number
  start_date?: string
  end_date?: string
}

export interface ReferenceSummary {
  id: number
  reference_1: string
  date_order_1: string
  reference_2: string
  date_order_2: string
  reference_3: string
  date_order_3: string
  reference_4: string
  date_order_4: string
  reference_5: string
  date_order_5: string
  actor_1: [number, string]
  actor_2: [number, string]
  actor_3: string
  actor_4: string
  actor_5: string
  kabupaten_1: [number, string]
  kabupaten_2: [number, string]
  kabupaten_3: [number, string]
  kabupaten_4: [number, string]
  kabupaten_5: [number, string]
  latest_quantity: number
  product_uom_id: [number, string]
  state: string
  date_created: string
  date_modified: string
}

export interface FarmerReport {
  id: number
  name: string
  date_order: string
  product_image_url: string
  specific_code: string
  source_actor: [number, string]
  reference_code: number[]
  destination_actor: [number, string]
  kabupaten_id: [number, string]
  product_id: [number, string]
  production_code: string
  quantity: number
  price: number
  ownership_code_id: [number, string]
}

export interface TransactionDetailsParams {
  id_petani?: number
  id_destination_actor?: number
  start_date?: string
  end_date?: string
}

export interface TransactionDetails {
  id: number
  product_image_url: string
  specific_code: string
  source_actor: number
  destination_actor: [number, string]
  product_id: [number, string]
  product_uom_id: [number, string]
  price: number
  quantity: number
  value: number
  subtotal: number
  batch_code: string
  ownership_code_id: [number, string]
  transaction_number: string
  qr_code_id: [number, string]
  qr_code_image: string
  stock_move_id: [number, string]
  date_order: string
}
