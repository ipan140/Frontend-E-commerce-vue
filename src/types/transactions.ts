export interface ItransactionsPaymentRequest {
  amount?: number;
  method?: string;
  order_id?: number;
}

export interface ItransactionsTransactionItemReq {
  price?: number;
  product_id?: string;
  quantity?: number;
}

export interface ItransactionsTransactionRequest {
  items?: ItransactionsTransactionItemReq[];
  user_id?: number;
}

