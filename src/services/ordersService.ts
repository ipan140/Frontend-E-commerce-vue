import api from "@/api/axios";
import type { IResponse } from "@/types";

export const ordersService = {
  async getOrders(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/orders`);
    return response.data?.data ?? response.data ?? response;
  },
  async postOrders(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/orders`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getOrdersId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/orders/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteOrdersId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/orders/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async getOrdersOrderIdStatusHistory(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/orders/${id}/status-history`);
    return response.data?.data ?? response.data ?? response;
  },
};
