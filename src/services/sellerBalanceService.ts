import api from "@/api/axios";
import type { IResponse } from "@/types";

export const sellerBalanceService = {
  async getSellerBalance(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/balance`);
    return response.data?.data ?? response.data ?? response;
  },
  async getSellerBalanceMutations(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/balance/mutations`);
    return response.data?.data ?? response.data ?? response;
  },
  async getSellerWithdrawals(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/withdrawals`);
    return response.data?.data ?? response.data ?? response;
  },
  async postSellerWithdrawals(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/seller/withdrawals`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
