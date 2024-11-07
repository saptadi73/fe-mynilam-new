export interface Petani {
  id: number
  ilo_associate_code: string
  image: string | null
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten: string
  provinsi: string
  family_members: string
}

export interface PetaniProfile {
  id: number
  ilo_associate: string
  image: string
  name: string
  email: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten: string
  provinsi: string
  family_members: number
  totalAset: string
  organization_status: string
  education_level_id: string
}
