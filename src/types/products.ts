export interface IproductsProductRequest {
  category_id?: number;
  description?: string;
  images?: string[];
  name?: string;
  price?: number;
  stock?: number;
  store_id?: number;
}

export interface IproductsProductResponse {
  category_id?: number;
  description?: string;
  id?: string;
  images?: string[];
  name?: string;
  price?: number;
  stock?: number;
}

