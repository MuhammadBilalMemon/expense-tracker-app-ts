export enum TransactionType {
  Imcone = "income",
  Expense = "expense",
}

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  transactionType: TransactionType;
}
