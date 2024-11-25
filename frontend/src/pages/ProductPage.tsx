import Header from "../components/Header";
import React from "react";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <Header />
      <div className="container">
        <h1>Product Details for ID: {id}</h1>
        {/* More detailed information about the product goes here */}
      </div>
    </>
  );
};

export default ProductPage;
