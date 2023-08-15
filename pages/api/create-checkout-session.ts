import type { NextApiRequest, NextApiResponse } from 'next'
import { exit } from 'process'
const stripe = require('stripe')('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  console.log("🚀 ~ file: create-checkout-session.ts:10 ~ d", req.body)
  const orderdata  = JSON.parse(req.body)
  //console.log("🚀🚀🚀🚀🚀 ~~ file: create-checkout-session.ts:11 ~ orderdata", orderdata)

  

  const objString = new URLSearchParams(orderdata.orderdata).toString();
  //console.log(orderdata.title);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: "Mamshouse",
       //   images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: 2400,
      },
      quantity: 1,
    },],
    mode: 'payment',
    success_url: `https://mamshouse.com/success?session_id={CHECKOUT_SESSION_ID}&${objString}`,
    cancel_url: 'https://mamshouse.com/cancel',
  });
  console.log(session);

  if(session){
    console.log('session exist')
  }else{
    console.log('not exist')
  }
  res.status(200).json({ session })



}