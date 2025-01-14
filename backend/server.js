
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Endpoint to serve the scraped products
app.get("/api/products", (req, res) => {
  const filePath = path.join(__dirname, "scraped_products.json");
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Product data file not found" });
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading product data:", err);
      return res.status(500).json({ error: "Unable to read product data" });
    }

    try {
      const products = JSON.parse(data);
      res.json(products);
    } catch (parseError) {
      console.error("Error parsing product data:", parseError);
      res.status(500).json({ error: "Invalid product data format" });
    }
  });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
