import React from "react";

const About = () => {
  return (
    <section id="about" className="py-30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text Section */}
        <div>
          {/* Badge */}
          <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
            About Us
          </span>

          {/* Title */}
          <h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">
            We Are Your Trusted Online Store  
            <span className="text-indigo-600"> MeowShop</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4">
            At MeowShop, we provide high-quality gadgets, accessories, 
            and daily-use products at the best prices.  
            Our goal is simple — fast delivery, trusted service, and premium products.
          </p>

          {/* Mission Points */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Fast & Reliable Service</li>
            <li>✔ Best Quality Products</li>
            <li>✔ Affordable Prices</li>
            <li>✔ Customer Satisfaction First</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/about.png"
            alt="About MeowShop"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
