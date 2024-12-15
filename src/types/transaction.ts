export interface DaftarPenjualanParams {
  destination_actor_name?: string
  kabupaten_id?: number
  id_pembeli?: number
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

export interface ListOfProductParams {
  associate_type?: 'agent' | 'koperasi'
  id_pembeli?: number
  kabupaten_id?: number
  start_date?: string
  end_date?: string
}

export interface ListOfProduct {
  id: number
  destination_actor: [number, string]
  destination_actor_associate_code: string
  product_id: [number, string]
  product_image_url: string
  product_uom_id: [number, string]
  total_requested_quantity: number
  state: string
  kabupaten_id: [number, string]
  qr_code_id: [number, string]
  qr_code_image: string
}

export interface ProductDetailParams {
  id_transaksi?: number
}

export interface ProductDetail {
  id: number
  name: string
  specific_codes: string
  reference_code: string
  production_code: number[]
  general_ownership_code: string
  source_actor_ids: number[]
  source_actor_ids_associate_code: string
  destination_actor: [number, string]
  destination_actor_associate_code: string
  product_id: [number, string]
  product_image_url: string
  product_uom_id: [number, string]
  history: string
  ilo_reference_ids: number[]
  linked_references_count: number
  price: number
  quantity: number
  total_requested_quantity: number
  total_value: number
  total_price: number
  transaction_number: string
  date_order: string
  date_confirm: string
  date_done: string
  date_receive: string
  state: string
  kabupaten_id: [number, string]
  ownership_line_ids: OwnershipLineId[]
  specific_ownership_line_ids: number[]
  ownership_reference_type: string
  general_ownership_code_ids: any[]
  qr_code_id: [number, string]
}

export interface OwnershipLineId {
  id?: number
  specific_code?: string
  source_actor_associate_code?: string
  source_actor?: [number, string]
  source_location_id?: [number, string]
  kabupaten_id?: [number, string]
  reference_code?: number[]
  production_harvesting_id?: [number, string]
  production_code?: string
  destination_actor_associate_code?: string
  destination_actor?: [number, string]
  destination_location_id?: [number, string]
  product_id?: [number, string]
  quantity?: number
  product_uom_id?: [number, string]
  price?: number
  value?: number
  currency_id?: [number, string]
  qr_code_image?: string
}

export interface CreateTransactionParams {
  destination_actor: number
  destination_actor_associate_code: string
  kabupaten_id: number
  date_order: string
  date_receive: string
  total_requested_quantity: number
  product_uom_id: number
  total_price: number
  ownership_line_ids: number[]
}

export interface CreateLineParams {
  source_actor_associate_code: string
  source_actor: number
  source_location_id: number
  kabupaten_id: number
  production_harvesting_id: number
  production_code: number
  destination_actor_associate_code: string
  destination_actor: number
  destination_location_id: number
  product_id: number
  quantity: number
  product_uom_id: number
  price: number
  value: number
  currency_id: number
}
