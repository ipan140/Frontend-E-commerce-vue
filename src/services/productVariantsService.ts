import api from "@/api/axios";
import type { IResponse } from "@/types";

export const productVariantsService = {
  async getProductsProductIdVariants(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/products/${id}/variants`);
    return response.data?.data ?? response.data ?? response;
  },
  async postSellerProductsProductIdVariantItems(id: string | number, payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/seller/products/${id}/variant-items`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postSellerProductsProductIdVariantOptions(id: string | number, payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/seller/products/${id}/variant-options`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
