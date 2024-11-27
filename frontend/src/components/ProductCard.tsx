import React from "react";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: string;
    image: string;
    link: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105">
      <img
        className="w-full h-64 object-cover"
        src={item.image}
        alt={item.name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-900">{item.name}</h3>
        <p className="text-gray-700 text-lg mb-4">{item.price}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
