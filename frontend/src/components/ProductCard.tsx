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
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity duration-300"
      >
        <img
          className="w-full h-64 object-cover"
          src={item.image}
          alt={item.name}
        />
      </a>
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{item.name}</h3>
        <p className="text-gray-700 text-lg mb-4">{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
