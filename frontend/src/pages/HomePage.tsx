import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const HomePage: React.FC = () => {
  const [apparelItems, setApparelItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/apparel")
      .then((response) => setApparelItems(response.data))
      .catch((error) => console.error("Error fetching apparel items:", error));
  }, []);

  return (
    <div className="container">
      <h1>Church Merch</h1>
      <div className="product-list">
        {apparelItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
