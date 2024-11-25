import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "../index.css";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-stained-glass flex flex-col items-center justify-start">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
            churchmerch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Product Cards */}
            <ProductCard
              item={{
                id: "1",
                name: "Faith Hoodie",
                price: "$35.00",
                imageURL: "https://via.placeholder.com/300",
                linkToPurchase: "https://examplechurch.com/store/faith-hoodie",
              }}
            />
            <ProductCard
              item={{
                id: "2",
                name: "Hope T-Shirt",
                price: "$25.00",
                imageURL: "https://via.placeholder.com/300",
                linkToPurchase: "https://examplechurch.com/store/hope-tshirt",
              }}
            />
            <ProductCard
              item={{
                id: "3",
                name: "Love Cap",
                price: "$20.00",
                imageURL: "https://via.placeholder.com/300",
                linkToPurchase: "https://examplechurch.com/store/love-cap",
              }}
            />
          </div>
        </div>
        <footer className="w-full text-center py-6 mt-auto bg-gray-900 text-white">
          © 2024 churchmerch - Apparel For The Body of Christ
        </footer>
      </div>
    </>
  );
};

export default HomePage;
