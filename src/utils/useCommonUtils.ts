export function downloadImageBase64(base64Data: string, fileName: string) {
  const byteCharacters = atob(base64Data)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray], { type: 'image/png' })

  // Membuat URL untuk Blob
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName + '.png'

  // Mengklik link untuk memicu unduhan
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(link.href) // Bersihkan URL setelah digunakan
}

export function toFormData(obj: Record<string, any>): FormData {
  const formData = new FormData()

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      formData.append(key, value)
    }
  }

  return formData
}
