import React from "react";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-500 to-white p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md w-full transform transition-all duration-500 hover:scale-105">
        {/* Animated Checkmark */}
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-green-500 mx-auto animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        {/* Order Placed Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Order Placed!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been successfully
          placed and is being processed.
        </p>
        {/* Continue Shopping Button */}
        <button
          onClick={() => navigate("/home")}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default OrderPlaced;
