const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const scraper = require("./scraper");

app.get("/api/scrape", async (req, res) => {
  try {
    await scraper.scrapeChurchWebsite("https://examplechurch.com/apparel");
    res.status(200).send("Scraping initiated");
  } catch (err) {
    res.status(500).send("Error initiating scraper");
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Sample Route
app.get("/", (req, res) => {
  res.send("Welcome to ChurchMerch Backend");
});

const apparelRoutes = require("./routes/apparel");

app.use("/api/apparel", apparelRoutes);

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
