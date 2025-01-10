"use client";

import { useState, useMemo } from "react";
import { Product } from "../types/Product";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { CategoryTabs } from "../components/CategoryTabs";

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "First Baptist T-Shirt",
    price: 19.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    churchUrl: "https://www.firstbaptist.com",
    category: "t-shirts",
  },
  {
    id: "2",
    name: "St. Mary's Hoodie",
    price: 34.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    churchUrl: "https://www.stmarys.com",
    category: "hoodies",
  },
  {
    id: "3",
    name: "Grace Community Cap",
    price: 14.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    churchUrl: "https://www.gracecommunity.com",
    category: "caps",
  },
  {
    id: "4",
    name: "Hope Church Sweatshirt",
    price: 29.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    churchUrl: "https://www.hopechurch.com",
    category: "hoodies",
  },
  {
    id: "5",
    name: "Trinity Lutheran Polo",
    price: 24.99,
    imageUrl: "/placeholder.svg?height=400&width=400",
    churchUrl: "https://www.trinitylutheranchurch.com",
    category: "t-shirts",
  },
];

const categories = ["t-shirts", "hoodies", "caps"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  //const [selectedCategory, setSelectedCategory] = useState('')

  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} />
        </div>
        <CategoryTabs
          categories={categories}
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
