import api from "@/api/axios";
import type { IResponse } from "@/types";

export const paymentsService = {
  async postPayments(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/payments`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postPaymentsCallback(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/payments/callback`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
