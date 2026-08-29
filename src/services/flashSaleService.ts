import api from "@/api/axios";
import type { IResponse } from "@/types";

export const flashSaleService = {
  async postFlashSaleCheckout(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/flash-sale/checkout`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getFlashsaleAll(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/flashsale/all`);
    return response.data?.data ?? response.data ?? response;
  },
  async getFlashsaleId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/flashsale/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
