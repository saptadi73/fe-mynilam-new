export interface ApiSuccess<T = {}> {
  status: string
  description: string
  data: T
}

export interface CreateLineData {
  success_details: SuccessDetail[]
  failed_transactions: any[]
}

export interface SuccessDetail {
  jsonrpc: string
  id: number
  result: LineResult[]
}

export interface LineResult {
  id: number
  spesific_code: string
  qr_code_image: string
}
