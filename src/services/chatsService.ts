import api from "@/api/axios";
import type { IResponse } from "@/types";

export const chatsService = {
  async postChatsMessages(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/chats/messages`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async postChatsRooms(payload: any): Promise<any> {
    const response = await api.post<IResponse<any>>(`/chats/rooms`, payload);
    return response.data?.data ?? response.data ?? response;
  },
  async getChatsRoomsRoomIdMessages(id: string | number): Promise<any> {
    const response = await api.get<IResponse<any>>(`/chats/rooms/${id}/messages`);
    return response.data?.data ?? response.data ?? response;
  },
  async getChatsSellerRooms(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/chats/seller/rooms`);
    return response.data?.data ?? response.data ?? response;
  },
  async getChatsUserRooms(): Promise<any> {
    const response = await api.get<IResponse<any>>(`/chats/user/rooms`);
    return response.data?.data ?? response.data ?? response;
  },
};
