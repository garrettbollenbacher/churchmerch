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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
        <img
          src={item.imageURL}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="font-bold text-xl mb-2">{item.name}</div>
      <p className="text-gray-700 text-base">Price: {item.price}</p>
      <a
        href={item.linkToPurchase}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </a>
    </div>
  );
};

export default ProductCard;
