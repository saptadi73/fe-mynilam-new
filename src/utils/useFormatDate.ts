export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  // Format menggunakan Intl.DateTimeFormat
  return new Intl.DateTimeFormat('id-ID', options).format(date)
}
