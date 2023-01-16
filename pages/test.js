import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe('STRIPE_PUBLISHABLE_KEY');

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [amount, setAmount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement);
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      setToken(token);
    }
  };
  
  const handleCharge = async () => {
    try {
      const res = await axios.post('/api/charge', {
        amount: amount,
        token: token.id,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="number"
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <CardElement />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        {token && <button onClick={handleCharge}>Charge</button>}
      </form>
    </Elements>
  );
}
