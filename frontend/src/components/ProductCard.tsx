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
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white">
      <img
        className="w-full h-64 object-cover"
        src={item.image}
        alt={item.name}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{item.name}</h3>
        <p className="text-gray-700 text-lg mb-4">{item.price}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
