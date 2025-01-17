const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/.next')));
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle requests to the root URL and client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/.next/server/pages/index.html'));
});

// Endpoint to serve the scraped products
app.get("/api/products", (req, res) => {
  fs.readFile(
    path.join(__dirname, "scraped_products.json"),
    "utf8",
    (err, data) => {
      if (err) {
        res.status(500).json({ error: "Unable to read product data" });
      } else {
        const products = JSON.parse(data);
        res.json(products);
      }
    }
  );
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});