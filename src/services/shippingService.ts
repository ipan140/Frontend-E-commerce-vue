import api from "@/api/axios";
import type { IResponse } from "@/types";

export const shippingService = {
  async putSellerShippingOrderIdTracking(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/seller/shipping/${id}/tracking`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postShippingCalculate(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/shipping/calculate`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getShippingOrdersOrderId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/shipping/orders/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async getShippingRates(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/shipping/rates`);
    return response.data?.data ?? response.data ?? response;
  },
};
