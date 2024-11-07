export interface Agen {
  id: number
  ilo_associate_code: string
  image: string | null
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten: string
  provinsi: string
  ilo_associate: string
}

export interface AgenProfile {
  image: string | null
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten: string
  provinsi: string
  family_members: number
  organization_status: string
  organization_name: string
  ilo_associate: string
  email: string
}
