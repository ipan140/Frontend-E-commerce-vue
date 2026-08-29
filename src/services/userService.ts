import api from "@/api/axios";
import type { IResponse } from "@/types";

export const userService = {
  async getUsersProfile(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/users/profile`);
    return response.data?.data ?? response.data ?? response;
  },
  async putUsersProfile(payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/users/profile`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
