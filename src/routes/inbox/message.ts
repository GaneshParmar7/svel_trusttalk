import { Cacheable } from "$lib/cache/cacheable";

export class Conversation {
  message_text: string;
  is_read: boolean;
  date_time: string;
  from: string;
  to: string;
  attachements: string[];

  constructor(message_text: string, from: string, to: string) {
    this.message_text = message_text;
    this.from = from;
    this.to = to;
    this.is_read = false;
    this.date_time = new Date().toISOString();
  }
}

export class Message extends Cacheable {
  last_name: string;
  first_name: string;
  photo: string;
  email: string;
  handle: string;
  message_text: string;
  linkedin_id_from: string;
  to: string;
  date_time: string;
  is_read: boolean;
  conversation: Conversation[];
}