export interface IusersAddressRequest {
  address_line?: string;
  city?: string;
  is_default?: boolean;
  phone?: string;
  postal_code?: string;
  province?: string;
  receiver?: string;
}

export interface IusersLoginAdminRequest {
  email?: string;
  password?: string;
}

export interface IusersLoginRequest {
  email?: string;
  password?: string;
}

export interface IusersRegisterAdminRequest {
  email?: string;
  name?: string;
  password?: string;
  phone?: string;
}

export interface IusersRegisterRequest {
  email?: string;
  name?: string;
  password?: string;
  phone?: string;
}

export interface IusersResendOTPRequest {
  email?: string;
}

export interface IusersUpdateUserRequest {
  email?: string;
  name?: string;
  phone?: string;
}

export interface IusersVerifyOTPRequest {
  email?: string;
  otp?: string;
}

