
import React from "react";
import {
  Users,
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand Section */}
          <div>
            <a
              href="/"
              className="inline-block text-3xl font-extrabold tracking-tight"
            >
              Shop<span className="text-[#F56900]">Console</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Your one-stop destination for quality products,
              smart shopping and unbeatable value. Discover
              products that make everyday living better.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-all duration-300 hover:border-[#F56900] hover:bg-[#F56900] hover:text-white"
              >
                <Users size={18} strokeWidth={1.7} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gray-400 transition-all duration-300 hover:border-[#F56900] hover:bg-[#F56900] hover:text-white"
              >
                <Camera size={18} strokeWidth={1.7} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-[#F56900]" />

            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              {[
                ["Home", "/"],
                ["Shop", "/shop"],
                ["New Arrivals", "/new-arrivals"],
                ["Best Sellers", "/best-sellers"],
                ["About Us", "/about"],
                ["Contact Us", "/contact"],
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="inline-flex items-center gap-1 transition-colors duration-300 hover:text-[#F56900]"
                  >
                    {name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Customer Support
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-[#F56900]" />

            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              {[
                ["Shipping Information", "/shipping"],
                ["Returns & Refunds", "/returns"],
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
                ["FAQs", "/faq"],
              ].map(([name, link]) => (
                <li key={name}>
                  <a
                    href={link}
                    className="transition-colors duration-300 hover:text-[#F56900]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-[#F56900]" />

            <ul className="mt-6 space-y-5 text-sm text-gray-400">

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-[#F56900]"
                />
                <a
                  href="tel:+910000000000"
                  className="transition-colors hover:text-[#F56900]"
                >
                  +91 00000 00000
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-[#F56900]"
                />
                <a
                  href="mailto:support@example.com"
                  className="break-all transition-colors hover:text-[#F56900]"
                >
                  support@example.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="shrink-0 text-[#F56900]"
                />
                <span>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 text-[#F56900]"
                />
                <span>
                  Your Business Address,
                  <br />
                  India
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Shop<span className="text-[#F56900]">Console</span>
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <a
              href="/privacy"
              className="transition-colors hover:text-[#F56900]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-[#F56900]"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
