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
  production_capacity: number
  total_oil_quantity: number
  total_planting_quantity: number
  in_progress_oil_percentage_quantity: number
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
  ilo_associate: string
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
}

export interface DaftarAsetParams {
  name?: string
  kabupaten_id?: number | null
}

export interface Aset {
  id: number
  code: string
  employee_id: any
  area_ha: string
  coordinates: string
  ownership_status: string
  planting_status: string
  kabupaten_id: any
}
