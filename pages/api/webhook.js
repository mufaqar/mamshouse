



import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(
  'sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ', {
  apiVersion: "2020-08-27",
});
const webhookSecret = "we_1MR9UXBYpJVF6ADtdQZXA5km";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;


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

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
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