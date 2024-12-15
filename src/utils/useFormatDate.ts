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

// yyyy-mm-dd
export function formatDateRequest(date: string) {
  // Replace slashes with dashes for consistency
  const standardizedDate = date.replace(/\//g, '-')

  // Split the date string into parts (day, month, year)
  const [day, month, year] = standardizedDate.split('-')

  // Rearrange to the desired format: YYYY-MM-DD
  return `${year}-${month}-${day}`
}
