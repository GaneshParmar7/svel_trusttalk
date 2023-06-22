import { Cacheable } from "$lib/cache/cacheable";


export class SubscriptionData extends Cacheable{

    user_id: number
    start_date : string
    end_date : string
    status : string
    auto_recharge : boolean
    subscription_plan_id : number
    subscription_plan_name : string
    subscriber_text : string
    subscriber_logo_url : string
    max_users_allowed : number
    users_consumed : number
    payment_id : number
    renewal_date : string
    renewal_reminder_date : string
    amount : number
    tax : number
    total : number

}