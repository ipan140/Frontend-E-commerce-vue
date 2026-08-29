import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminVouchersService = {
  async getAdminVouchers(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/vouchers`);
    return response.data?.data ?? response.data ?? response;
  },
  async postAdminVouchers(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/admin/vouchers`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async putAdminVouchersId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/admin/vouchers/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteAdminVouchersId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/admin/vouchers/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
