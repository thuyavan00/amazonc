import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(
  'pk_test_51Nkr3zGcSSEaiJhRDuULtYRaH6sTB85TnUKFzhgAn4LCUCb4qRR7sEuzVunpH4kjesZkv7e4uOG0DiwEizHhsZbY00g0AqGi78'
);

export default function StripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}
