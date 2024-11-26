import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import "./index.css";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full p-4 fixed top-0 left-0 bg-white shadow-md flex justify-between items-center">
          <Header />
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
