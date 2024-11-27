import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import "./index.css";

// Main App Component
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  return (
    <>
      <Header onSearch={handleSearchChange} />
      <div className="min-h-screen bg-gray-100 pt-24">
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
