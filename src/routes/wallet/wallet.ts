import { Cacheable } from "$lib/cache/cacheable";

export class Wallet {
    id: number;
    isModified: boolean;
    amount: number;
    description: string;
    wallet_amount: number;
    date_time: string;

    constructor(amount: number, description: string, wallet_amount: number, id: number) {
      this.id = id;
      this.amount = amount;
      this.description = description;
      this.wallet_amount = wallet_amount;
      this.isModified = false;
      
      this.date_time = new Date().toISOString();
    }
}
  

export enum EntryType {
    Credit = 0,
    Debit = 1
}

export class WalletEntry extends Cacheable {
    amount: number;
    date_time: string;
    description: string;
    wallet_amount: number; // Total amount remaining in the wallet
    
}

