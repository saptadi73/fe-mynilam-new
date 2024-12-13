export interface Petani {
  id: number
  name: string
  ilo_associate_code: string
  street: string
  kelurahan: any
  kecamatan: any
  kabupaten_id: any
  state_id: any
  country_id: any
  family_members: number
  image_1920_url: string
  contract_file_name: string
  employment_contract: any
}

export interface PetaniListParams {
  name?: string
  kabupaten_id?: number | null
}

export interface PetaniProfileParams {
  user_id?: number | null
}

export interface PetaniForm {
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten_id: number
  state_id: number
  country_id: number
  family_members: number
  ilo_associate: string
  organization_statue: string
  education_level_id: number
  email: string
}

export interface PetaniProfile {
  id: number
  ilo_associate: string
  image_1920_url: string
  name: string
  email: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten_id: any
  state_id: any
  family_members: number
  total_area_ha: number
  organization_status: string
  education_level_id: string
  assets: any
  total_transaction_value: number | bigint
  total_planting_quantity: number
  total_oil_quantity: number
  in_progress_oil_percentage_quantity: number
  in_progress_planting_quantity: number
  in_progress_percentage_quantity: number
}

export interface DaftarAgenParams {
  name?: string
  kabupaten_id?: number | null
  associate_type?: 'Agent' | 'Koperasi'
}

export interface AgenProfileParams {
  user_id?: number | null
}

export interface Agen {
  id: number
  name: string
  ilo_associate: 'agent' | 'koperasi'
  ilo_associate_code: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten_id: [number, string]
  state_id: [number, string]
  country_id: boolean
  family_members: number
  image_1920_url: string
  phone: string
  state: string
}

export interface AgenForm {
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten_id: number
  state_id: number
  country_id: number
  education_level_id: number
  ilo_associate: string
  email: string
}

export interface DaftarAsetParams {
  name?: string | undefined
  kabupaten_id?: number | null
}

export interface Aset {
  id: number
  code: string
  asset_image_url: string
  employee_id: any
  area_ha: string
  coordinates: string
  ownership_status: string
  planting_status: string
  kabupaten_id: any
}

export interface LahanForm {
  employee_id: number
  coordinates: string
  ownership_status: string
  area_uom: number
  kabupaten_id: number
  planting_status: string
  harvesting_status: string
  product_id: number
  uom_id: number
}

export interface LahanDetail {
  id: number
  farm_id: string
  product_id: any
  employee_id: any
  asset_image_url: string
  production_capacity: number
  employee_ilo_associate: string
  employee_ilo_associate_code: string
  coordinates: string
  area_ha: string
  ownership_status: string
  planting_status: string
  harvesting_status: string
  address: string
  state_id: any
  kabupaten_id: any
  shp_filename: string
}

export interface LahanDetailParams {
  asset_id?: number
}
