import api from "@/api/axios";
import type { IResponse } from "@/types";

export const productsService = {
  async getProducts(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products`);
    return response.data?.data ?? response.data ?? response;
  },
  async postProducts(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/products`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getProductsSearch(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products/search`);
    return response.data?.data ?? response.data ?? response;
  },
  async getProductsId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async putProductsId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/products/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteProductsId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/products/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
