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
