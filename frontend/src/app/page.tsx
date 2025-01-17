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
  const [selectedChurch, setSelectedChurch] = useState("");

  useEffect(() => {
    // Fetch the products from the backend
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Get unique church names
  const churchNames = Array.from(
    new Set(products.map((product) => product.churchName))
  );

  // Filter products by search query and selected church
  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesChurch = selectedChurch
      ? product.churchName === selectedChurch
      : true;
    return matchesSearchQuery && matchesChurch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CategoryTabs
          categories={churchNames}
          selectedCategory={selectedChurch}
          onSelectCategory={setSelectedChurch}
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
