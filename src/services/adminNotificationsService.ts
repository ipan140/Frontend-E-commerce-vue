import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminNotificationsService = {
  async getAdminNotifications(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/notifications`);
    return response.data?.data ?? response.data ?? response;
  },
  async postAdminNotifications(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/admin/notifications`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async putAdminNotificationsId(id: string | number, payload: any): Promise<any> {
    const response = await api.put<IResponse<any>>(`/admin/notifications/${id}`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async deleteAdminNotificationsId(id: string | number): Promise<any> {
    const response = await api.delete<IResponse<any>>(`/admin/notifications/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
};
