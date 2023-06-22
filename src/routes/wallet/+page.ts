
import type { WalletEntry } from "./wallet";
import { pullData, pushData } from "$lib/cache/fetch_and_cache";

export const ssr = false;
const dataTypeName = 'wallet';
let walletEntries: WalletEntry[] = [];


export async function load() {
    walletEntries = await pullData<WalletEntry>(dataTypeName);
    console.log(walletEntries);
    return { wallet: walletEntries };
}
  
export async function _pushWalletEntries() {
    pushData(dataTypeName, walletEntries);
}

// export async function load() {
    

//     async function getJsonData(_maxId = 0): Promise<WalletEntry[]> {
//         // const response = await fetch('https://svapi.trusttalk.net/messages?maxId=' + _maxId);
//         // return await response.json();

//         return walletEntries;
//     }

//     // wallet = await fetchDataAndCache<WalletEntry>(dataId, getJsonData);

//     // wallet = wallet.map(entry => ({ ...entry, type_name: EntryType[entry.type] }));

//     return { wallet: wallet };
// }
