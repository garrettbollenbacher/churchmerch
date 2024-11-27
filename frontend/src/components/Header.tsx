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
    onSearch(e.target.value); // Call the parent's onSearch function
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white p-6 shadow-md z-50 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-4xl font-bold text-gray-900 title-link">
          ChurchMerch
        </Link>
        <input
          type="text"
          placeholder="Search for apparel..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </nav>
  );
};

export default Header;
