
import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import Stripe from 'stripe';

export default async function handler (req, res) {
  // check the request method and ensure you only accept POST requests.
  try {
    const requestBuffer = await buffer(req);
    const signature = req.headers['stripe-signature'] as string;
    const stripe = new Stripe('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ', { apiVersion: null }); // version null sets the most recent API version
    const event =  stripe.webhooks.constructEvent(
      requestBuffer.toString(), // Stringify the request for the Stripe library
      signature,
      'we_1MRBWZBYpJVF6ADtu9Ws7pHs'
    );
    // you can now safely work with the request. The event returned is the parsed request body.
    res.send(200);
    console.log('*********',event)
  } catch (error) {
    res.status(400).send(`Webhook error: ${error.message}`);
  }
}