export interface ImodelsCategory {
  created_at?: string;
  id?: number;
  name?: string;
  products?: ImodelsProduct[];
  slug?: string;
  updated_at?: string;
}

export interface ImodelsDiscussionReply {
  created_at?: string;
  discussion?: ImodelsProductDiscussion;
  discussion_id?: number;
  id?: number;
  is_seller?: boolean;
  reply?: string;
  updated_at?: string;
  user?: ImodelsUser;
  user_id?: number;
}

export interface ImodelsOrder {
  created_at?: string;
  id?: number;
  order_items?: ImodelsOrderItem[];
  status?: string;
  store?: ImodelsStore;
  store_id?: number;
  total_amount?: number;
  transaction?: ImodelsTransaction;
  transaction_id?: number;
  updated_at?: string;
  user?: ImodelsUser;
  user_id?: number;
}

export interface ImodelsOrderItem {
  created_at?: string;
  id?: number;
  order?: ImodelsOrder;
  order_id?: number;
  price?: number;
  product?: ImodelsProduct;
  product_id?: string;
  quantity?: number;
}

export interface ImodelsPayment {
  amount?: number;
  created_at?: string;
  id?: number;
  method?: string;
  reference?: string;
  snap_url?: string;
  status?: string;
  transaction?: ImodelsTransaction;
  transaction_id?: number;
  updated_at?: string;
}

export interface ImodelsProduct {
  category?: ImodelsCategory;
  category_id?: number;
  created_at?: string;
  description?: string;
  discussions?: ImodelsProductDiscussion[];
  id?: string;
  images?: ImodelsProductImage[];
  name?: string;
  price?: number;
  stock?: number;
  store?: ImodelsStore;
  store_id?: number;
  updated_at?: string;
  variant_items?: ImodelsProductVariantItem[];
  variant_options?: ImodelsProductVariantOption[];
}

export interface ImodelsProductDiscussion {
  created_at?: string;
  id?: number;
  product?: ImodelsProduct;
  product_id?: string;
  question?: string;
  replies?: ImodelsDiscussionReply[];
  updated_at?: string;
  user?: ImodelsUser;
  user_id?: number;
}

export interface ImodelsProductImage {
  created_at?: string;
  id?: number;
  is_primary?: boolean;
  product?: ImodelsProduct;
  product_id?: string;
  updated_at?: string;
  url?: string;
}

export interface ImodelsProductVariantItem {
  created_at?: string;
  id?: number;
  price?: number;
  product?: ImodelsProduct;
  product_id?: string;
  sku?: string;
  stock?: number;
  title?: string;
  updated_at?: string;
}

export interface ImodelsProductVariantOption {
  created_at?: string;
  id?: number;
  name?: string;
  product?: ImodelsProduct;
  product_id?: string;
}

export interface ImodelsStore {
  address?: string;
  city?: string;
  created_at?: string;
  description?: string;
  id?: number;
  name?: string;
  slug?: string;
  status?: string;
  updated_at?: string;
  user?: ImodelsUser;
  user_id?: number;
}

export interface ImodelsTransaction {
  created_at?: string;
  id?: number;
  orders?: ImodelsOrder[];
  paid_at?: string;
  payment_method?: string;
  snap_url?: string;
  status?: string;
  total_amount?: number;
  updated_at?: string;
  user?: ImodelsUser;
  user_id?: number;
}

export interface ImodelsUser {
  created_at?: string;
  email?: string;
  id?: number;
  is_verified?: boolean;
  name?: string;
  phone?: string;
  profile_image?: string;
  role?: string;
  updated_at?: string;
}

