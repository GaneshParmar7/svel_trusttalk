import type { Message } from './message';
import { pullData, pushData } from "$lib/cache/fetch_and_cache";

export const ssr = false;
const dataTypeName = 'Messages';
let messages: Message[] = [];

export async function load() {
  messages = await pullData<Message>(dataTypeName);
  return { inbox: messages };
}

export async function _pushMessages() {
  pushData(dataTypeName, messages);
}