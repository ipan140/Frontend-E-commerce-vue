export interface IvouchersCreateVoucherRequest {
  code?: string;
  discount?: number;
  expired_at?: string;
  max_usage?: number;
  min_order?: number;
  store_id?: number;
}

export interface IvouchersUpdateVoucherRequest {
  code?: string;
  discount?: number;
  expired_at?: string;
  is_active?: boolean;
  max_usage?: number;
  min_order?: number;
  store_id?: number;
}

export interface IvouchersUseVoucherRequest {
  code?: string;
  order_id?: number;
  user_id?: number;
}

