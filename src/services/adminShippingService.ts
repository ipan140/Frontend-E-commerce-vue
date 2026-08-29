import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminShippingService = {
  async postAdminShippingRates(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/admin/shipping/rates`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
