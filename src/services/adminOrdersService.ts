import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminOrdersService = {
  async getAdminOrders(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/orders`);
    return response.data?.data ?? response.data ?? response;
  },
  async getAdminOrdersId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/orders/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteAdminOrdersId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/admin/orders/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async putAdminOrdersIdStatus(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/admin/orders/${id}/status`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
