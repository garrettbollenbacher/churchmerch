
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

// Serve static files from the Next.js build
app.use('/_next', express.static(path.join(__dirname, '../frontend/.next')));
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(express.static(path.join(__dirname, '../frontend/.next/static')));

// API endpoint for products
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

// Handle all other routes by serving the Next.js app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/.next/server/app/page.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
