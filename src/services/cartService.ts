import api from "@/api/axios";
import type { IResponse } from "@/types";

export const cartService = {
  async getCart(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/cart`);
    return response.data?.data ?? response.data ?? response;
  },
  async postCartAdd(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/cart/add`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteCartId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/cart/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
