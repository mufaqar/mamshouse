import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ', {
  apiVersion: "2020-08-27",
});
const webhookSecret = 'we_1MRBWZBYpJVF6ADtu9Ws7pHs';

const handler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      if (event.type === "checkout.session.completed") {
        const charge = event.data.object;
        console.log("🚀 ~ file: webhook.js:20 ~ handler ~ charge", charge)
        // Handle successful charge
      } else {
        console.warn(`Unhandled event type: ${event.type}`);
      }
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;