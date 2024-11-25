import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="h-48 bg-gray-200 flex items-center justify-center mb-4">
        <span className="text-gray-500 text-lg">Image Placeholder</span>
      </div>
      <div className="font-bold text-xl mb-2">Product Name</div>
      <p className="text-gray-700 text-base">Price: $00.00</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;

// import React from "react";

// interface ProductCardProps {
//   item: {
//     id: string;
//     name: string;
//     price: string;
//     imageURL: string;
//     linkToPurchase: string;
//   };
// }

// const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
//   return (
//     <div className="card">
//       <img src={item.imageURL} alt={item.name} />
//       <h3>{item.name}</h3>
//       <p>{item.price}</p>
//       <a href={item.linkToPurchase} target="_blank" rel="noopener noreferrer">
//         Buy Now
//       </a>
//     </div>
//   );
// };

// export default ProductCard;
