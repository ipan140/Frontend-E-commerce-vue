export interface IResponse<T = any> {
  message?: string;
  data?: T;
  meta?: any;
}

export * from './admin';
export * from './balances';
export * from './carts';
export * from './category';
export * from './chats';
export * from './discussions';
export * from './favorite';
export * from './flashsale';
export * from './helpdesk';
export * from './models';
export * from './notifications';
export * from './orders';
export * from './payments';
export * from './products';
export * from './reviews';
export * from './shipping';
export * from './stores';
export * from './transactions';
export * from './users';
export * from './variants';
export * from './vouchers';
