const stripe = require('stripe')('STRIPE_SECRET_KEY');

app.post('/charge', async (req, res) => {
  try {
    const { token, amount } = req.body;
    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: 'usd',
      description: 'Example charge',
      source: token,
    });
    res.json({ id: charge.id });
  } catch (err) {
    res.status(500).end();
  }
});
