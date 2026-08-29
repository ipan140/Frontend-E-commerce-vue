import api from "@/api/axios";
import type { IResponse } from "@/types";

export const reviewsService = {
  async getProductsProductIdReviews(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products/${id}/reviews`);
    return response.data?.data ?? response.data ?? response;
  },
  async postReviews(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/reviews`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async putReviewsId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/reviews/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteReviewsId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/reviews/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
