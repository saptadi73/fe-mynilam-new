export interface ApiSuccess<T = {}> {
  status: string
  description: string
  data: T
}

export interface CreateLineData {
  success_ids: SuccessId[]
  failed_transactions: any[]
}

export interface SuccessId {
  jsonrpc: string
  id: number
  result: number
}
