import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface HeaderProps {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="w-full bg-gray-900 p-4 shadow-md flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className="text-5xl font-bold text-white title-link flex items-center"
        >
          <span>church</span>
          {/* <img
            src="/churchmerch-cross.png"
            alt="Cross"
            className="mx-2 h-6 w-6"
          /> */}
          <span>merch</span>
        </Link>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 rounded ml-4"
        />
      </div>
      {/* <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div> */}
    </nav>
  );
};

export default Header;
