const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(express.static(path.join(__dirname, '../frontend/.next')));

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