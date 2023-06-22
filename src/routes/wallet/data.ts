import { EntryType, type WalletEntry } from "./wallet"
import walletEntries from './+page.svelte';


// const walletEntries: WalletEntry[] = [
//     {
//         id: 1,
//         type_name: EntryType.Credit,
//         isModified: false,
//         amount: 50,
//         date: "2023-01-01",
//         description: "Added using Visa card",
//         wallet_amount: 50
//     },
//     {
//         id: 2,
//         type_name: EntryType.Debit,
//         isModified: true,
//         amount: 10,
//         date: "2023-01-04",
//         description: "Message to John",
//         wallet_amount: 40
//     }
// ]

export { walletEntries }