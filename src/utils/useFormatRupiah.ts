export function formatRupiah(amount: number | bigint): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // Ensure no decimals
  }).format(amount)
}
