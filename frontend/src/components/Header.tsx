import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar bg-white border-b border-gray-200 p-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-2xl font-bold text-gray-900" to="/">
          churchmerch
        </Link>
        <div>
          <Link
            className="text-lg font-medium text-gray-700 hover:text-gray-900"
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
