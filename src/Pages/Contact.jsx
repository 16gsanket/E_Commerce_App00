import React, { useState } from "react";

function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your backend)
    console.log("Contact Form Submitted", contactInfo);
    setContactInfo({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-100 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-1 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 mb-1 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={contactInfo.message}
              onChange={handleChange}
              className="w-full p-2 rounded border border-gray-300 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
