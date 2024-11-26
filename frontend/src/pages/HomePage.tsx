import React from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";
import "../App.css";

const HomePage: React.FC = () => {
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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Apparel For The Body of Christ
      </h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
