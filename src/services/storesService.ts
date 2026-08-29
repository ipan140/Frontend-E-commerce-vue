import api from "@/api/axios";
import type { IResponse } from "@/types";

export const storesService = {
  async postSellerStores(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/seller/stores`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getSellerStoresDashboard(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/stores/dashboard`);
    return response.data?.data ?? response.data ?? response;
  },
  async getSellerStoresMyStores(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/seller/stores/my-stores`);
    return response.data?.data ?? response.data ?? response;
  },
  async putSellerStoresId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/seller/stores/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getStoresSlug(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/stores/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
