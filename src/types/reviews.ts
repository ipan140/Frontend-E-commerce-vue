export interface IreviewsCreateReviewRequest {
  comment?: string;
  product_id?: string;
  rating?: number;
  user_id?: number;
}

export interface IreviewsReviewResponse {
  comment?: string;
  created_at?: string;
  id?: number;
  product_id?: string;
  rating?: number;
  user_id?: number;
  user_name?: string;
}

export interface IreviewsReviewSummaryResponse {
  average_rating?: number;
  reviews?: IreviewsReviewResponse[];
  total_reviews?: number;
}

export interface IreviewsUpdateReviewRequest {
  comment?: string;
  rating?: number;
}

