import React from "react";
import logo from "../assets/logo.png";
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm pt-12 pb-8 px-6">
      <div className="container mx-auto">
        {/* Top Links */}
        <div className="grid grid-cols-2 justify-center md:grid-cols-4 lg:grid-cols-6 gap-6 border-b border-gray-700 pb-8">
          <div>
            <h6 className="text-white font-semibold mb-3">Product</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  What's New
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-3">Company</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-3">Resources</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-semibold mb-3">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="mb-4">
              <a className="flex justify-center items-center text-md font-semibold mx-auto">
                <img className="w-8" src={logo} alt="Logo Image" />
                <span>HERO.IO</span>
              </a>
            </div>

            <div className="flex gap-4 mt-6 justify-center">
              <button className="border cursor-pointer flex items-center gap-2 transition relative z-10">
                <div className="w-[120px] overflow-hidden">
                  <img
                    src={playStore}
                    alt="Play Store"
                    className=" rounded-md w-full hover:scale-125 transition duration-300"
                  />
                </div>
              </button>
              <button className="border cursor-pointer flex items-center gap-2 active:bg-gray-200 transition relative z-10">
                <div className="w-[120px] overflow-hidden">
                  <img
                    src={appStore}
                    alt="Play Store"
                    className=" rounded-md w-full hover:scale-125 transition duration-300"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          {/* Logo & Country */}

          {/* Copyright */}
          <p className="">Copyright © 2025 - All right reserved</p>

          {/* Social Icons */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
