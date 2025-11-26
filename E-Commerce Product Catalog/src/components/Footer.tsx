import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">E-Commerce Shop</h3>
          <p className="mt-4">
            Your one-stop shop for all your needs. Shop with us and enjoy the
            best online experience.
          </p>
        </div>

        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className=" mt-4 space-y-1">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold ">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Your email"
              className="p-1 rounded text-black"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 rounded-r-lg border-gray-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
