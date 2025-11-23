// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">ABC Ltd.</h2>
          <p className="text-gray-400 mb-4">
            Quality Electronics Supplier. Delivering the best products at unbeatable prices.
          </p>
          <p className="text-gray-400">123 Main Street, Dhaka, Bangladesh</p>
          <p className="text-gray-400">Email: souravmondol135@gmail.com</p>
          <p className="text-gray-400">Phone: +88 01778157278</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/returns" className="hover:text-white">Return Policy</a></li>
            <li><a href="/cookies" className="hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Get the latest offers and updates.</p>
          <form className="flex mb-4">
            <input 
              type="email" 
              placeholder="Your email text-black" 
              className="w-full px-3 py-2 rounded-l bg-white text-black focus:outline-none"
            />
            <button className="px-4 bg-blue-600 rounded-r hover:bg-blue-700">Subscribe</button>
          </form>

          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} ABC Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
