import React, { useContext, useReducer, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { getError } from '../util';
import { toast } from 'react-toastify';
import { Store } from '../store';

function reducer(state, action) {
  switch (action.type) {
    case 'PAY_REQUEST':
      return { ...state, loadingPay: true };
    case 'PAY_SUCCESS':
      return { ...state, loadingPay: false, successPay: true };
    case 'PAY_FAIL':
      return { ...state, loadingPay: false };
    case 'PAY_RESET':
      return { ...state, loadingPay: false, successPay: false };
    default:
      return state; //current state
  }
}

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ order }, dispatch] = useReducer(reducer, {
    order: {},
  });

  const stripe = useStripe();
  const elements = useElements();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: 'PAY_REQUEST' });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            headers: { authorization: `Bearer ${userInfo.token}` },
          }
        );
        dispatch({ type: 'PAY_SUCCESS', payload: data });
        toast.success('Order is paid');
      } catch (err) {
        dispatch({ type: 'PAY_FAIL', payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/create-payment-intent', { method: 'POST' });
    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      console.log('Payment successful!');
    }
  };

  return <div>PaymentFrom</div>;
}
