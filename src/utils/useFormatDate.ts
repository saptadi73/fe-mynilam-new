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

// dd-mm-yyyy
export function formatDateInput(date: string) {
  const dateObject = new Date(date)

  // Extract the day, month, and year components
  const day = dateObject.getDate()
  const month = dateObject.getMonth() + 1 // Months are 0-indexed
  const year = dateObject.getFullYear()

  // Format the date as "DD-MM-YYYY"
  return `${day}-${month}-${year}`
}
