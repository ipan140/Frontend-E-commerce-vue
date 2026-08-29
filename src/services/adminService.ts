import api from "@/api/axios";
import type { IResponse } from "@/types";

export const adminService = {
  async getAdminActivityLogs(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/activity-logs`);
    return response.data?.data ?? response.data ?? response;
  },
  async getAdminDashboard(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/admin/dashboard`);
    return response.data?.data ?? response.data ?? response;
  },
};
