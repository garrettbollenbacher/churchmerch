"use client";

import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { CategoryTabs } from "../components/CategoryTabs";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the products from the backend
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CategoryTabs
          categories={["t-shirts", "hoodies", "caps"]}
          selectedCategory=""
          onSelectCategory={(category) => setSearchQuery(category)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No products found. Try adjusting your search or filters.
          </div>
        )}
      </main>
    </div>
  );
}
