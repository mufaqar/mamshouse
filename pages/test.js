import { createCheckoutSession } from 'next-stripe/client'
import { loadStripe } from "@stripe/stripe-js";


export default function Test() {

    const handleCheckout = async () => {
        const priceOne = 18;
        const session = await createCheckoutSession({
            success_url: window.location.origin + '/thank-you?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: window.location.href,
            line_items: [
                {
                    quantity: 1,
                    name : 'Beanie with Logo',
                    images: ['https://via.placeholder.com/150'],
                    amount: Math.round(priceOne * 100),
                    currency: 'usd',
                },
            ],
            payment_method_types: ['card'],
            mode: 'payment'
        })

        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
            if (stripe) {
                stripe.redirectToCheckout({ sessionId: session.id });
            }
        } catch (error) {
            console.log( error );
        }
    }

    return <div className='mt-20'>
        <button onClick={handleCheckout}>Checkout</button>
    </div>
}