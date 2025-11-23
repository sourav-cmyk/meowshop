import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";

const DiscountCTA = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Countdown Logic
  function calculateTimeLeft() {
    const targetTime = new Date().setHours(24, 0, 0, 0); // Offer ends today at 12am
    const now = new Date().getTime();
    const difference = targetTime - now;

    if (difference <= 0) return { hours: "00", minutes: "00", seconds: "00" };

    const hours = String(Math.floor((difference / (1000 * 60 * 60)))).padStart(2, "0");
    const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

    return { hours, minutes, seconds };
  }

  // Update timer every sec
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div
        className="max-w-6xl mx-auto px-6 
        bg-white/40 backdrop-blur-xl 
        border border-white/60 shadow-xl 
        rounded-3xl p-10 text-center 
        animate-fade-slide"
      >
        {/* Gradient Discount Badge */}
        <div className="inline-block mb-6 px-5 py-2 text-white font-bold rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
          20% OFF Today Only!
        </div>

        {/* Icon + Title */}
        <div className="flex justify-center items-center gap-3">
          <FaShoppingBag className="text-indigo-600 text-4xl" />
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            Exclusive Deal Just for You!
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Shop your favorite products at a huge discount. Hurry — the offer ends soon!
        </p>

        {/* Countdown Timer */}
        <div className="mt-8 flex justify-center gap-6 text-center">
          <div className="bg-white shadow-md rounded-xl px-6 py-4">
            <h3 className="text-3xl font-bold text-indigo-600">{timeLeft.hours}</h3>
            <p className="text-gray-600 text-sm">Hours</p>
          </div>
          <div className="bg-white shadow-md rounded-xl px-6 py-4">
            <h3 className="text-3xl font-bold text-indigo-600">{timeLeft.minutes}</h3>
            <p className="text-gray-600 text-sm">Minutes</p>
          </div>
          <div className="bg-white shadow-md rounded-xl px-6 py-4">
            <h3 className="text-3xl font-bold text-indigo-600">{timeLeft.seconds}</h3>
            <p className="text-gray-600 text-sm">Seconds</p>
          </div>
        </div>

        {/* Button */}
        <a
          href="#products"
          className="mt-10 inline-block bg-indigo-600 text-white font-semibold px-10 py-3 rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default DiscountCTA;
