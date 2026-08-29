import api from "@/api/axios";
import type { IResponse } from "@/types";

export const helpdeskService = {
  async getHelpdeskTickets(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/helpdesk/tickets`);
    return response.data?.data ?? response.data ?? response;
  },
  async postHelpdeskTickets(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/helpdesk/tickets`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getHelpdeskTicketsTicketId(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/helpdesk/tickets/${id}`);
    return response.data?.data ?? response.data ?? response;
  },
  async postHelpdeskTicketsTicketIdReply(id: string | number, payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/helpdesk/tickets/${id}/reply`, payload);
    return response.data?.data ?? response.data ?? response;
  },
};
