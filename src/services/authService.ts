import api from "@/api/axios";
import type { IResponse } from "@/types";

export const authService = {
  async postAuthLogin(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/login`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthLoginAdmin(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/login/admin`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthLogout(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/logout`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthRegister(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/register`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthRegisterAdmin(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/register/admin`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthResendOtp(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/resend-otp`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postAuthVerifyOtp(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/auth/verify-otp`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
