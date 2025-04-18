export type TransactionType = 'debit' | 'credit';

export type Transaction = {
  id: string;
  card_id: string;
  type: TransactionType;
  amount: number;
  place: string;
}

export type Card = {
  id: string;
  name: string;
  card_number: string;
  date_of_expiry: string;
  cvv: number;
  isFrozen: boolean;
  available_balance: number;
  transactions: Transaction[] | null;
}
