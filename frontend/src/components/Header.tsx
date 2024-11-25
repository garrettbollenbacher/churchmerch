import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gray-900 p-4 shadow-md flex items-center justify-between">
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
      <header className="header flex-grow text-center">
        <Link to="/" className="text-5xl font-bold mb-8 text-white">
          church merch
        </Link>
      </header>
    </nav>
  );
};

export default Header;
