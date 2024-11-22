// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";

// const HomePage: React.FC = () => {
//   const [apparelItems, setApparelItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/apparel")
//       .then((response) => setApparelItems(response.data))
//       .catch((error) => console.error("Error fetching apparel items:", error));
//   }, []);

//   const mockApparelItems = [
//     {
//       id: '1',
//       name: 'Faith Hoodie',
//       price: '$35.00',
//       imageURL: 'https://via.placeholder.com/150',
//       linkToPurchase: 'https://examplechurch.com/store/faith-hoodie',
//     },
//     {
//       id: '2',
//       name: 'Hope T-Shirt',
//       price: '$25.00',
//       imageURL: 'https://via.placeholder.com/150',
//       linkToPurchase: 'https://examplechurch.com/store/hope-tshirt',
//     },
//     {
//       id: '3',
//       name: 'Love Cap',
//       price: '$20.00',
//       imageURL: 'https://via.placeholder.com/150',
//       linkToPurchase: 'https://examplechurch.com/store/love-cap',
//     },
//   ];

//   useEffect(() => {
//     setApparelItems(mockApparelItems);
//   }, []);

//   return (
//     <div className="container">
//       <h1>Church Merch</h1>
//       <div className="product-list">
//         {apparelItems.map((item) => (
//           <ProductCard key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">{/* Your HomePage content here */}</div>
    </>
  );
};

export default HomePage;
