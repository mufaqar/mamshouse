import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ');

export default async function handler(req, res) {
  const id = req.query.id;

  try {
    if (!id.startsWith('cs_')) {
      throw Error('Incorrect CheckoutSession ID.');
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(id);

    res.status(200).json(checkout_session);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}