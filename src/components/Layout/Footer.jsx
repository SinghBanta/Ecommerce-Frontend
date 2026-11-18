import React from "react";

const Footer = () => {
  const quickLinks = [
    "Home",
    "Shop",
    "Categories",
    "New Arrivals",
    "About Us",
    "Contact Us",
  ];

  const customerLinks = [
    "Help Center",
    "Shipping Information",
    "Returns & Refunds",
    "FAQs",
    "Track Order",
  ];

  return (
   <footer className="bg-[url('src/assets/footerbackground.png')] bg-cover bg-center bg-no-repeat text-white overflow-hidden">
    <div className="bg-Blur">
      <div className="max-w-[1280px] mx-auto px-6 pt-40">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" class=" lg:text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-md invert">
                            < img src="src/assets/logo-original-Photoroom.png" className="h-20" />
                        </a>

            <p className="text-gray-400 text-sm mt-4 max-w-sm leading-7">
              Smarter Shopping. Better Living.
              Discover quality products, amazing deals
              and a seamless shopping experience.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {["f", "𝕏", "▶", "in"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`Social media ${item}`}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-[#F56900] hover:border-[#F56900] hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#F56900] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              {customerLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#F56900] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:support@shopconsole.com"
                  className="hover:text-[#F56900] transition-colors"
                >
                  ✉ support@shopconsole.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#F56900] transition-colors"
                >
                  ☎ +91 98765 43210
                </a>
              </li>

              <li className="flex items-start gap-2">
                <span>⌖</span>
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} ShopConsole. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="font-bold italic text-blue-400">VISA</span>
            <span className="font-bold text-white">Mastercard</span>
            <span className="font-bold italic text-white">PayPal</span>
            <span className="font-bold text-[#F56900]">UPI</span>
          </div>

        </div>

      </div>
    </div>

    </footer>
  );
};

export default Footer;
