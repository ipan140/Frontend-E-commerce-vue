import api from "@/api/axios";
import type { IResponse } from "@/types";

export const notificationsService = {
  async getNotifications(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/notifications`);
    return response.data?.data ?? response.data ?? response;
  },
};
