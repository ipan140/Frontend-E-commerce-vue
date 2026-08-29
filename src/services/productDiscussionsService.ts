import api from "@/api/axios";
import type { IResponse } from "@/types";

export const productDiscussionsService = {
  async postDiscussions(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/discussions`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postDiscussionsIdReplies(id: string | number, payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/discussions/${id}/replies`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getProductsProductIdDiscussions(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products/${id}/discussions`);
    return response.data?.data ?? response.data ?? response;
  },
};
