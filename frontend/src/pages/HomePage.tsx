import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
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
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearch={handleSearchChange} />
      <div className="flex flex-col items-center justify-center min-h-screen w-full mt-32">
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
