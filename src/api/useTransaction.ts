import { useMutation, useQuery } from '@tanstack/vue-query'
import { apiGet, apiPost } from './apiClient'
import type {
  CreateLineParams,
  CreateTransactionParams,
  DaftarPenjualan,
  DaftarPenjualanParams,
  FarmerReport,
  ListOfProduct,
  ListOfProductParams,
  ProductDetail,
  ProductDetailParams,
  ReferenceSummary,
  ReferenceSummaryParams,
  TransactionDetails,
  TransactionDetailsParams,
} from '@/types/transaction'
import type { Ref } from 'vue'
import { ApiSuccess, CreateLineData } from '@/types/common'

// https://tanstack.com/query/v5/docs/framework/vue/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key
export function useDaftarPenjualan(params?: Ref<DaftarPenjualanParams>) {
  const path = '/transaction/transaction/list'
  const getDaftarPenjualan = (): Promise<DaftarPenjualan[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['daftarPenjualan', params],
    queryFn: getDaftarPenjualan,
  })
}

export function useReferenceSummary(params?: Ref<ReferenceSummaryParams>) {
  const path = '/transaction/reference/summary'
  const getReferenceSummary = (): Promise<ReferenceSummary[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['referenceSummary', params],
    queryFn: getReferenceSummary,
  })
}

export function useFarmerReport() {
  const path = '/transaction/transaction/farmer-report'
  const getFarmerReport = (): Promise<FarmerReport[]> => apiGet(path)
  return useQuery({
    queryKey: ['farmerReport'],
    queryFn: getFarmerReport,
  })
}

export function useTransactionDetails(params?: Ref<TransactionDetailsParams>) {
  const path = '/transaction/transaction/details'
  const getTransactionDetails = (): Promise<TransactionDetails[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['transactionDetails', params],
    queryFn: getTransactionDetails,
  })
}

export function useListOfProduct(params?: Ref<ListOfProductParams>) {
  const path = '/transaction/transaction/list-of-product'
  const getListOfProduct = (): Promise<ListOfProduct[]> => apiGet(path, params?.value)
  return useQuery({
    queryKey: ['listOfProduct', params],
    queryFn: getListOfProduct,
  })
}

export function useProductDetail(params: Ref<ProductDetailParams>) {
  const path = '/transaction/transaction/list-of-product/detail'
  const getProductDetail = (): Promise<ProductDetail[]> => apiGet(path, params.value)
  return useQuery({
    queryKey: ['productDetail', params],
    queryFn: getProductDetail,
    enabled: () => !!params.value.id_transaksi,
  })
}

export function useCreateTransaction() {
  const path = '/transaction/transaction/create'
  const createTransactionFn = (params: CreateTransactionParams): Promise<ApiSuccess> => apiPost(path, params)
  return useMutation({
    mutationFn: createTransactionFn,
  })
}

export function useCreateLine() {
  const path = '/transaction/transaction/line_create'
  const createLineFn = (params: CreateLineParams[]): Promise<ApiSuccess<CreateLineData>> => apiPost(path, params)
  return useMutation({
    mutationFn: createLineFn,
  })
}
