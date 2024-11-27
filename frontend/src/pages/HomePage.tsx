import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../index.css";
import "../App.css";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the products from the backend
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched products:", data); // Add logging here
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full p-4 flex justify-between items-center fixed top-0 left-0 bg-white shadow-md">
        <Link to="/" className="text-2xl font-bold text-gray-900 ml-4">
          ChurchMerch
        </Link>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for apparel..."
          className="px-4 py-2 border border-gray-300 rounded-lg text-lg mr-4"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full mt-20">
        <div className="container max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} item={product} />
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
