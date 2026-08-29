import api from "@/api/axios";
import type { IResponse } from "@/types";

export const favoriteService = {
  async getFavorites(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/favorites`);
    return response.data?.data ?? response.data ?? response;
  },
  async postFavorites(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/favorites`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteFavoritesId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/favorites/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async getFavoritesIdCheck(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/favorites/${id}/check`);
    return response.data?.data ?? response.data ?? response;
  },
};
