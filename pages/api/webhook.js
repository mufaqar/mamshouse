

import { buffer } from "micro";
const Stripe = require('stripe');

const stripe = new Stripe("sk_test_51KZccKBYpJVF6ADtJIF54auA6RHJEEiEBasxyMMN8hvwOC2czH4rSBdt0tRCwCMw9gYUxynchdG5yjxCjYp44JyF00tvx0T4gJ", {
    apiVersion: '2020-08-27'
});
const webhookSecret = "we_1MRBWZBYpJVF6ADtu9Ws7pHs";

export const config = {
    api: {
        bodyParser: false,
    },
};


const handler = async (req, res) => {
    if (req.method === "POST") {
        const buf = await buffer(req);
        const sig = req.headers["stripe-signature"];

        let stripeEvent;

        try {
            stripeEvent = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
            console.log( 'stripeEvent', stripeEvent );
        } catch (err) {
            res.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }

        if ( 'checkout.session.completed' === stripeEvent.type ) {
            const session = stripeEvent.data.object;
            console.log( 'payment success', session );
// Do something here on payment success, like update order etc.        }

        res.json({ received: true });
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
};
}
export default handler