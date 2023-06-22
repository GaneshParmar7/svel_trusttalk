import { pullData, pushData } from "$lib/cache/fetch_and_cache";
import type { SubscriptionData } from './subscription';
import type { User } from './user';

export const ssr = false;

const dataTypeName = 'subscription_plans';
const userdataTypeName = 'subscription/users'

let subscription_plans: SubscriptionData[] = [];
let users_list : User[] = [];

export async function load() {

  subscription_plans = await pullData<SubscriptionData>(dataTypeName);
  users_list = await pullData<User>(userdataTypeName)
  
  console.log(users_list)
  return { subscriptions: subscription_plans,
            users : users_list
  };
}

