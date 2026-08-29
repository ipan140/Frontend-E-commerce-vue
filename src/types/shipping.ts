export interface IshippingCreateShippingRateRequest {
  cost_per_kg?: number;
  courier?: string;
  destination_city?: string;
  max_days?: number;
  min_days?: number;
  origin_city?: string;
  service?: string;
}

export interface IshippingShippingRequest {
  courier?: string;
  destination?: string;
  origin?: string;
  weight?: number;
}

export interface IshippingUpdateTrackingRequest {
  courier_name?: string;
  tracking_number?: string;
}

