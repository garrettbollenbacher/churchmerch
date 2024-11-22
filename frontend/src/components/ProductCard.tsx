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
    <div className="card">
      <img src={item.imageURL} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <a href={item.linkToPurchase} target="_blank" rel="noopener noreferrer">
        Buy Now
      </a>
    </div>
  );
};

export default ProductCard;
