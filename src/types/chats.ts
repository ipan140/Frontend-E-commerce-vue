export interface IchatsCreateChatRoomRequest {
  store_id?: number;
}

export interface IchatsSendMessageRequest {
  message?: string;
  room_id?: number;
  sender_type?: string;
}