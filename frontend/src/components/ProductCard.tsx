import React from "react";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: string;
    imageURL: string;
    linkToPurchase: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-64 object-cover"
        src={item.imageURL}
        alt={item.name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-2xl mb-2 text-gray-900">{item.name}</h3>
        <p className="text-gray-700 text-lg mb-4">{item.price}</p>
        <a
          href={item.linkToPurchase}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
