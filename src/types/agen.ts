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
  image_1920_url: string | null
  name: string
  street: string
  kelurahan: string
  kecamatan: string
  kabupaten_id: any
  kabupaten: number
  state_id: any
  ilo_associate: string
  email: string
}
