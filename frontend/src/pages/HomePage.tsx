import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../index.css";
import "../App.css";

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = [
    {
      id: "1",
      name: "Faith Hoodie",
      price: "$35.00",
      imageURL: "https://via.placeholder.com/300",
      linkToPurchase: "https://examplechurch.com/store/faith-hoodie",
    },
    {
      id: "2",
      name: "Hope T-Shirt",
      price: "$25.00",
      imageURL: "https://via.placeholder.com/300",
      linkToPurchase: "https://examplechurch.com/store/hope-tshirt",
    },
    {
      id: "3",
      name: "Love Cap",
      price: "$20.00",
      imageURL: "https://via.placeholder.com/300",
      linkToPurchase: "https://examplechurch.com/store/love-cap",
    },
  ].filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full p-4 flex justify-start items-start">
        <Link to="/" className="text-lg font-bold text-blue-600">
          Home
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-5xl font-bold mb-8 text-gray-900">
            Apparel For The Body of Christ
          </h1>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for apparel..."
            className="mb-8 px-4 py-2 border border-gray-300 rounded-lg w-full max-w-lg text-lg"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} item={product} />
              ))
            ) : (
              <p className="text-lg text-gray-700">No products found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
