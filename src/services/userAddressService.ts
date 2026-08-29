import api from "@/api/axios";
import type { IResponse } from "@/types";

export const userAddressService = {
  async getUserAddress(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/user/address`);
    return response.data?.data ?? response.data ?? response;
  },
  async postUserAddress(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/user/address`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async putUserAddressId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/user/address/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteUserAddressId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/user/address/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
