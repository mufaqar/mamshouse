import Stripe from 'stripe';
import { buffer } from 'micro';
import sanityClient from "@sanity/client";

const stripe = new Stripe('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ');

const STRIPE_WEBHOOK_SECRET = "we_1MR9UXBYpJVF6ADtdQZXA5km"

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let event;

    try {
      // 1. Retrieve the event by verifying the signature using the raw body and secret
      const rawBody = await buffer(req);
      const signature = req.headers['stripe-signature'];

      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Successfully constructed event
    console.log('✅ Success:', event.id);

    // 2. Handle event type (add business logic here)
    if (event.type === 'checkout.session.completed') {

    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
      const config = {
        projectId: "5x5wnf9u",
        dataset: "production",
        useCdn: false,
        token:
          "skrDAeBk3tz1Dr4Yo3DIZlARomfTD13JEjnkN23A1XPejoWGFYbnj2PHBvkCTZRFocFevdHmIEYMOEDOpIFkHFqsDPRcujOIm2y4SitswFsYx6hQYCq5LlD3dB2lgs4rP1RDIrHeejWr1m7yOcJnEEdKcpWRwh2ag1i93VgKIcQoB4rryeey",
      };
      const client = sanityClient(config);
      try {
        await client.create({
          _type: "booking",
          title: "weebhook",
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Couldn't submit comment`, err });
      }
    }

    // 3. Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}




