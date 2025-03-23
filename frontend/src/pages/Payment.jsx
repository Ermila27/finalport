import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';
import { IoIosWarning } from "react-icons/io";
import { HashLoader } from 'react-spinners';

const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);

const Payment = () => {
  const [amount, setAmount] = useState(''); // Initial state with default value
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false); // Loading state for UI feedback
  const [error, setError] = useState(''); // Error state for UI feedback
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state
console.log(amount)
  // Handle amount change
  const handleAmountChange = (values) => {
    const value = parseFloat(values.value);
    setAmount(value);

    // Enable or disable the button based on the amount
    if (value >= 1) {
      setIsButtonDisabled(false); // Enable button
    } else {
      setIsButtonDisabled(true); // Disable button
    }
  };

  // Fetch clientSecret when user clicks "Proceed to Payment"
  const loadClientSecret = async () => {
    setLoading(true); // Show loading indicator
    try {
      const { data } = await axios.post('http://localhost:1000/payment', {
        amountofmoney: parseFloat(amount), // Ensure amount is sent as a number
      });
      if (!data.clientSecret) {
        throw new Error('Client secret not returned from backend');
      }
      setClientSecret(data.clientSecret);
      console.log('Client Secret:', data.clientSecret); // Debugging
    } catch (error) {
      console.error('Error creating payment intent:', error.message || error);
      setError('Failed to create payment intent. Please try again.');
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  // Memoized PaymentForm to prevent unnecessary re-renders
  const PaymentForm = React.memo(() => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      if (!stripe || !elements) {
        setError('Stripe is not loaded.');
        return;
      }
  
      setLoading(true); // Show loading indicator
      try {
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            return_url: 'http://localhost:5173/s', // URL to redirect after success
          },
        });
  
        if (error) {
          console.error('Payment error:', error.message || error);
          setError('Payment failed. Please try again.');
        } else {
          alert('Payment successful!');
        }
      } catch (error) {
        console.error('Error confirming payment:', error.message || error);
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="p-8">
        <h2 className="text-xl font-bold mb-4">Enter your payment details</h2>
        <div className="border p-4 rounded-lg">
          <PaymentElement
            options={{
              layout: 'tabs', // Display payment methods in tabs
            }}
            onReady={() => console.log('PaymentElement loaded')}
            onError={(err) => console.error('PaymentElement error:', err)}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          type="submit"
          className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? <HashLoader /> : 'Pay Now'}
        </button>
      </form>
    );
  });

  return (
    <div>
      {!clientSecret ? (
        <div className="sm:flex w-full justify-evenly p-8">
          <div>
            <h1 className="text-2xl bg-gradient-to-r from-purple-600 via-black to-blue-400 text-transparent bg-clip-text p-8 font-dance capitalize">
              Simplify your work with secure payments
            </h1>
            <div className="flex items-center">
              <IoIosWarning />
              <h2 className="p-4 text">Please make sure you specified the correct amount</h2>
            </div>

            <div className="">
              <div className="relative">
              <NumericFormat
  id="amount"
  value={amount}
  thousandSeparator={true}
  decimalSeparator="."
  decimalScale={2}
  fixedDecimalScale={true}
  onValueChange={(values) => handleAmountChange(values)}
  className="w-96 pl-8 pr-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Enter amount"
/>
              </div>

              <div className={`mt-4 ${isButtonDisabled ? 'bg-gray-200 text-black':'bg-[url("/blur1.avif")] ' } w-64 p-6 rounded-lg text-white text-center text-white/70 hover:text-white hover:scale-105 transition-all duration-300 py-2` }>
                <button
                  onClick={loadClientSecret}
                  className={`backdrop-blur-xl bg-white/10 ${isButtonDisabled ? 'opacity-40 text-red-600 cursor-not-allowed' : 'opacity-100 '}`}
                  disabled={isButtonDisabled || loading} // Disable button if invalid amount or loading
                >
                  {loading ? <HashLoader size={20} color="green" /> : 'Proceed to Payment'}
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
          <div className="mt-4">
            <img src={'/card.avif'} className="w-96 hover:scale-105 transition-all duration-200 rounded-md" alt="Payment Card" />
          </div>
        </div>
      ) : (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;