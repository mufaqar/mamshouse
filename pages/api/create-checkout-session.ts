import type { NextApiRequest, NextApiResponse } from 'next'
const stripe = require('stripe')('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Stubborn Attachments',
          images: ['https://i.imgur.com/EHyR2nP.png'],
        },
        unit_amount: 100,
      },
      quantity: 1,
    },],
    mode: 'payment',
    success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/cancel',
  });
  console.log(session)
  if(session){
    console.log('session exist')
  }else{
    console.log('not exist')
  }
  res.status(200).json({ session })
}