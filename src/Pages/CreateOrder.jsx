import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";

function CreateOrder() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const navigate = useNavigate()

  const [orderDetails, setOrderDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderDetails({ name: "", email: "", phone: "", address: "" });
    alert('Order Placed Successfully ... !!!')
    // Process order submission here (e.g., send details to a backend)
    console.log("Order placed:", orderDetails, cartItems);
    // Optionally clear the cart after submission
    dispatch(clearCart());
    navigate('/order-placed')
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
        Order Summary
      </h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Cart Items Section */}
        <div className="bg-white shadow-lg rounded p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Your Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between py-2 border-b border-gray-200"
                >
                  <span>
                    {item.title} (x{item.quantity})
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between mt-4 border-t pt-4">
            <span className="font-bold text-lg text-yellow-500">Total:</span>
            <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-2 border-yellow-500 rounded p-6 text-black shadow-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Contact Information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={orderDetails.name}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={orderDetails.email}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={orderDetails.phone}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
                pattern="[0-9]*"
                inputMode="numeric"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 mb-1">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-white text-yellow-500 font-semibold rounded hover:bg-gray-100 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;
