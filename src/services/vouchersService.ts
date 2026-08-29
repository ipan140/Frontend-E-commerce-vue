import api from "@/api/axios";
import type { IResponse } from "@/types";

export const vouchersService = {
  async getAdminVouchersId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/vouchers/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async getVouchers(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/vouchers`);
    return response.data?.data ?? response.data ?? response;
  },
  async postVouchersUse(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/vouchers/use`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getVouchersId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/vouchers/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
