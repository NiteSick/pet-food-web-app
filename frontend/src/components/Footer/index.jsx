import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-ds-64 px-ds-24">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-ds-32 mb-ds-48">
          {/* Online Shopping Section */}
          <div>
            <h3 className="text-ds-yellow text-lg font-semibold mb-ds-16">
              Online shopping
            </h3>
            <ul className="space-y-ds-8">
              <li>
                <a href="/dogs" className="footer-link">
                  Dogs
                </a>
              </li>
              <li>
                <a href="/cats" className="footer-link">
                  Cats
                </a>
              </li>
              <li>
                <a href="/shop-by-breed" className="footer-link">
                  Shop by breed
                </a>
              </li>
              <li>
                <a href="/consult-vet" className="footer-link">
                  Consult a vet
                </a>
              </li>
              <li>
                <a href="/pharmacy" className="footer-link">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="/book-trainer" className="footer-link">
                  Book a trainer
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Section */}
          <div>
            <h3 className="text-ds-yellow text-lg font-semibold mb-ds-16">
              Explore
            </h3>
            <ul className="space-y-ds-8">
              <li>
                <a href="/our-story" className="footer-link">
                  Our story
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/expert-vets" className="footer-link">
                  Expert vets
                </a>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-ds-yellow text-lg font-semibold mb-ds-16">
              Account
            </h3>
            <ul className="space-y-ds-8">
              <li>
                <a href="/my-account" className="footer-link">
                  My Account
                </a>
              </li>
              <li>
                <a href="/login" className="footer-link">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="/cart" className="footer-link">
                  Cart
                </a>
              </li>
              <li>
                <a href="/wishlist" className="footer-link">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/shop" className="footer-link">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-ds-yellow text-lg font-semibold mb-ds-16">
              Quick Link
            </h3>
            <ul className="space-y-ds-8">
              <li>
                <a href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="footer-link">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="/faq" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-ds-yellow text-lg font-semibold mb-ds-16">
              Download App
            </h3>
            <p className="text-white text-sm mb-ds-16">
              Save $3 with App New User Only
            </p>

            {/* QR Code and App Store buttons placeholder */}
            <div className="flex items-start gap-ds-12 mb-ds-24">
              <div className="w-[80px] h-[80px] bg-white rounded-ds-8 flex items-center justify-center">
                {/* QR Code placeholder */}
                <span className="text-ds-brand-primary text-xs text-center">
                  QR Code
                </span>
              </div>
              <div className="flex flex-col gap-ds-8">
                <div className="w-[120px] h-[40px] bg-white rounded-ds-6 flex items-center justify-center">
                  <span className="text-ds-brand-primary text-xs">
                    Google Play
                  </span>
                </div>
                <div className="w-[120px] h-[40px] bg-white rounded-ds-6 flex items-center justify-center">
                  <span className="text-ds-brand-primary text-xs">
                    App Store
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-ds-16">
              <div className="w-[32px] h-[32px] bg-white rounded-ds-4 flex items-center justify-center cursor-pointer">
                <span className="text-ds-brand-primary text-xs">YT</span>
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-ds-4 flex items-center justify-center cursor-pointer">
                <span className="text-ds-brand-primary text-xs">FB</span>
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-ds-4 flex items-center justify-center cursor-pointer">
                <span className="text-ds-brand-primary text-xs">X</span>
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-ds-4 flex items-center justify-center cursor-pointer">
                <span className="text-ds-brand-primary text-xs">IG</span>
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-ds-4 flex items-center justify-center cursor-pointer">
                <span className="text-ds-brand-primary text-xs">LI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-ds-gray pt-ds-24">
          <p className="text-ds-gray text-center text-sm">
            © Copyright Sniff n Snack 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
