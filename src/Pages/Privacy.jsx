import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4 text-center">
          Privacy Policy
        </h1>
        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            We value your privacy and are committed to protecting your personal
            information. This policy outlines how we collect, use, and safeguard
            your data when you use our services.
          </p>
          <p className="mb-4">
            <strong>Information Collection:</strong> We collect information
            that you provide to us directly, such as your name, email, and phone
            number, as well as data gathered automatically through your use of
            our website.
          </p>
          <p className="mb-4">
            <strong>Use of Information:</strong> The information collected is
            used to improve our services, process transactions, and send
            periodic emails regarding updates or promotions. We will not share
            your information with third parties without your consent.
          </p>
          <p className="mb-4">
            <strong>Security:</strong> We implement a variety of security
            measures to maintain the safety of your personal information. Your
            data is stored in secure environments and is only accessible by
            authorized personnel.
          </p>
          <p>
            By using our services, you agree to the terms outlined in this
            Privacy Policy. If you have any questions or concerns, please contact
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
