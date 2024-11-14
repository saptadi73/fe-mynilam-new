export function formatDate(dateString: string | number | Date, showTime?: boolean) {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  if (showTime) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.hour12 = false
  }

  return new Intl.DateTimeFormat('id-ID', options).format(date)
}
