import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Sucess = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState('');
  const [paymentIntent, setPaymentIntent] = useState('');

  useEffect(() => {
    // Extract query parameters
    const status = searchParams.get('redirect_status');
    const intent = searchParams.get('payment_intent');

    setPaymentStatus(status);
    setPaymentIntent(intent);
  }, [searchParams]);

  return (
    <div className="flex justify-center items-center min-h-screen dark:text-white dark:bg-black bg-gray-50">
      <div className="dark:bg-gray-800 bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        {/* Success Icon */}
        <div className="text-center mb-6">
          {paymentStatus === 'succeeded' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-red-500 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>

        <h2 className="text-3xl font-semibold text-center dark:text-white text-gray-800 mb-4">
          {paymentStatus === 'succeeded' ? 'Payment Successful!' : 'Payment Failed'}
        </h2>
        <p className="text-lg dark:text-white text-gray-600 text-center mb-6">
          {paymentStatus === 'succeeded'
            ? `Thank you for your purchase! Your payment intent ID is ${paymentIntent}.`
            : 'Unfortunately, your payment could not be processed. Please try again.'}
        </p>

        <div className="flex justify-center">
          <a
            href="/"
            className=" dark:bg-black text-white bg-gradient-to-r from-black to-purple-500 hover:scale-110  px-6 py-3 rounded-full text-lg font-medium transition duration-300"
          >
            navigate to home 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sucess;