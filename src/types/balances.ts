export interface IbalancesCreateWithdrawalRequest {
  account_holder?: string;
  account_number?: string;
  amount?: number;
  bank_name?: string;
}

export interface IbalancesProcessWithdrawalRequest {
  admin_note?: string;
  status?: string;
}

