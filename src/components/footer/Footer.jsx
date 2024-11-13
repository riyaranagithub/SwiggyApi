// src/components/footer/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer className=" text-white py-8 bg-footer-bg" >
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-500">
        {/* Company Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Swiggy Blog</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with Us</li>
            <li>Ride with Us</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="#" >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#" >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-700 mt-8 pt-4 ">
        <p className="text-gray-500">© 2024 Swiggy Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
