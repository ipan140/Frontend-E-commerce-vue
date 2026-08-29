export interface IordersCreateOrderItemRequest {
  product_id?: string;
  quantity?: number;
}

export interface IordersCreateOrderRequest {
  items?: IordersCreateOrderItemRequest[];
  user_id?: number;
}

export interface IordersOrderResponse {
  created_at?: string;
  id?: number;
  payment_url?: string;
  status?: string;
  total?: number;
  user_id?: number;
}

export interface IordersOrderStatusResponse {
  created_at?: string;
  id?: number;
  note?: string;
  order_id?: number;
  status?: string;
}

export interface IordersUpdateOrderStatusRequest {
  status?: string;
}

