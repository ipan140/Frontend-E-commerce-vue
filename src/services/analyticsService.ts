import api from "@/api/axios";
import type { IResponse } from "@/types";

export const analyticsService = {
  async getSellerAnalyticsStoreId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/analytics/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
