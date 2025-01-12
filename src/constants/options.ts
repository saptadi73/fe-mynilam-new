import { ref } from 'vue'

export const optionsStatus = ref([
  { label: 'Member', value: 'member' },
  { label: 'Not Member', value: 'not_member' },
])

export const optionsJenisMitra = ref([{ label: 'Petani', value: 'farmers' }])

export const optionsPendidikan = ref([
  { label: 'SMA', value: 1 },
  { label: 'SMP', value: 2 },
  { label: 'SD', value: 3 },
])

export const optionsStatusKepemilikan = ref([
  { label: 'Milik Pribadi', value: 'self_owned' },
  { label: 'Sewa', value: 'rent' },
])

export const optionsStatusLahan = ref([
  { label: 'Proses', value: 'proses' },
  { label: 'Belum Aktif', value: 'belum aktif' },
])

export const satuanOptions = [
  { value: 6, label: 'mm' },
  { value: 13, label: 'g' },
  { value: 8, label: 'cm' },
  { value: 16, label: 'oz' },
  { value: 15, label: 'lb' },
  { value: 5, label: 'm' },
  { value: 9, label: 'm²' },
  { value: 12, label: 'kg' },
  { value: 7, label: 'km' },
]
