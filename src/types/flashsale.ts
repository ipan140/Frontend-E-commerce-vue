export interface IflashsaleCheckoutFlashSaleRequest {
  product_id?: number;
}

export interface IflashsaleCheckoutFlashSaleResponse {
  message?: string;
  product_id?: number;
  status?: string;
}

export interface IflashsaleFlashSaleResponse {
  discount_percentage?: number;
  end_at?: string;
  id?: number;
  is_active?: boolean;
  product_id?: number;
  start_at?: string;
}

