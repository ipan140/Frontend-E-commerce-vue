import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminWithdrawalsService = {
  async getAdminWithdrawals(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/withdrawals`);
    return response.data?.data ?? response.data ?? response;
  },
  async putAdminWithdrawalsId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/admin/withdrawals/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
