import api from "@/api/axios";
import type { IResponse } from "@/types";

export const categoriesService = {
  async getCategories(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/categories`);
    return response.data?.data ?? response.data ?? response;
  },
  async postCategories(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/categories`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getCategoriesId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/categories/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async putCategoriesId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/categories/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteCategoriesId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/categories/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
