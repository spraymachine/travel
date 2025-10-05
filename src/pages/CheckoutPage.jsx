import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { SAMPLE_PACKAGES } from '../data';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // Replace with your publishable key

const elementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#fff',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const CheckoutForm = ({ selectedPackage }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const cardElement = elements.getElement(CardNumberElement);

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: { name },
    });

    if (stripeError) {
      setError(stripeError.message);
      setIsProcessing(false);
      return;
    }

    // In a real app, you'd send the paymentMethod.id to your server
    // to create a payment intent.
    console.log('PaymentMethod created:', paymentMethod);
    
    setTimeout(() => {
      setPaymentStatus('Payment successful! A confirmation has been sent to your email.');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form" autoComplete="off">
      <div className="form-row">
        <label htmlFor="name-on-card">Name on Card</label>
        <input
          id="name-on-card"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="card-number">Credit Card Number</label>
        <CardNumberElement id="card-number" options={elementOptions} onChange={handleChange} />
      </div>
      <div className="form-row-split">
        <div className="form-row">
          <label htmlFor="card-expiry">Expiration</label>
          <CardExpiryElement id="card-expiry" options={elementOptions} onChange={handleChange} />
        </div>
        <div className="form-row">
          <label htmlFor="card-cvc">CVV</label>
          <CardCvcElement id="card-cvc" options={elementOptions} onChange={handleChange} />
        </div>
      </div>
      
      {error && <div className="card-error" role="alert">{error}</div>}
      
      <button type="submit" disabled={!stripe || isProcessing} className="btn primary submit-btn">
        {isProcessing ? 'Processing...' : `Pay €${selectedPackage.price}`}
      </button>
      
      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
    </form>
  );
};

const CheckoutPage = () => {
  const { packageId } = useParams();
  const selectedPackage = SAMPLE_PACKAGES.find(p => p.id === packageId);

  if (!selectedPackage) {
    return <div>Package not found</div>;
  }

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="package-summary">
            <h2>{selectedPackage.title}</h2>
            <p>{selectedPackage.summary}</p>
            <div className="price-tag">€{selectedPackage.price}</div>
          </div>
          <div className="payment-section">
            <div className="payment-header">
              <span className="step-number">4</span>
              <h3>Payment</h3>
            </div>
            <h4>Payment Method</h4>
            <div className="payment-method-selector">
              <div className="method-option selected">
                <input type="radio" id="credit-card" name="payment-method" value="credit-card" defaultChecked />
                <label htmlFor="credit-card">Credit Card</label>
              </div>
            </div>
            <CheckoutForm selectedPackage={selectedPackage} />
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default CheckoutPage;
