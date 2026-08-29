import api from "@/api/axios";
import type { IResponse } from "@/types";

export const transactionsService = {
  async postTransactions(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/transactions`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postTransactionsPay(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/transactions/pay`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postTransactionsIdCancel(id: string | number, payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/transactions/${id}/cancel`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
