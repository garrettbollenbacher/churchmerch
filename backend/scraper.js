const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const scrapeElevationChurch = async () => {
  try {
    const url = "https://store.elevationchurch.org/collections/apparel";
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);
    const products = [];

    $("div.product-grid-item").each((_, element) => {
      const product = {};

      const productLink = $(element).find("a.product-grid-item__title");
      if (productLink.length) {
        product.name = productLink.text().trim();
        product.churchUrl =
          "https://store.elevationchurch.org" + productLink.attr("href");
      }

      const priceTag = $(element).find("a.product-grid-item__price");
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }

      const imgTag = $(element).find(".product-grid-item__image img");
      if (imgTag.length) {
        const src = imgTag.attr("src");
        product.imageUrl = src.startsWith("//") ? "https:" + src : src;
      }

      product.churchName = "ELEVATION CHURCH";

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });

    return products;
  } catch (error) {
    console.error("Error scraping Elevation Church:", error);
    return [];
  }
};

const scrapeUpperRoom = async () => {
  try {
    const url = "https://upperroom.store/collections/all";
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
      },
    });

    const html = response.data;
    const $ = cheerio.load(html);
    const products = [];

    $("div.card-wrapper.product-card-wrapper").each((_, element) => {
      const product = {};

      const productLink = $(element).find("h3.card__heading a");
      if (productLink.length) {
        product.name = productLink.text().trim().split("\n")[0]; // Extract only the first line of the name
        product.churchUrl =
          "https://upperroom.store" + productLink.attr("href");
      }

      const priceTag = $(element).find("span.price-item--regular").first();
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }

      const imgTag = $(element).find(".card__media img");
      if (imgTag.length) {
        const src = imgTag.attr("src");
        product.imageUrl = src.startsWith("//") ? "https:" + src : src;
      }

      product.churchName = "UPPERROOM";

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });

    return products;
  } catch (error) {
    console.error("Error during scraping Upper Room:", error);
    return [];
  }
};

const scrapeJesusImage = async () => {
  try {
    const url = "https://jesusimage.store/collections/all";
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36",
      },
    });
    const html = response.data;
    const $ = cheerio.load(html);
    const products = [];
    $("li.grid__item").each((_, element) => {
      const product = {};
      // Extract product name and link
      const heading = $(element).find("h3.card__heading");
      const productLink = heading.find("a");
      if (productLink.length) {
        const nameText = productLink
          .text()
          .split("\n")
          .map((text) => text.trim())
          .filter((text) => text.length > 0);
        product.name = nameText[0];
        product.churchUrl =
          "https://jesusimage.store" + productLink.attr("href");
      }
      // Extract product price
      const priceTag = $(element).find("span.price-item--regular");
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }
      // Extract product image
      const imgTag = $(element).find("img");
      if (imgTag.length) {
        if (imgTag.attr("src")) {
          product.imageUrl = "https:" + imgTag.attr("src");
        } else if (imgTag.attr("srcset")) {
          const srcset = imgTag.attr("srcset").split(",");
          product.imageUrl = "https:" + srcset[0].split(" ")[0].trim(); // Extract the first URL from srcset
        }
      }
      // Set default category if not present
      product.churchName = "JESUS IMAGE";

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });
    return products;
  } catch (error) {
    console.error("Error scraping JesusImage:", error);
    return [];
  }
};

const scrapeAll = async () => {
  const upperRoomProducts = await scrapeUpperRoom();
  const jesusImageProducts = await scrapeJesusImage();
  const elevationChurchProducts = await scrapeElevationChurch();

  const allProducts = [
    ...upperRoomProducts,
    ...jesusImageProducts,
    ...elevationChurchProducts,
  ];

  fs.writeFileSync(
    path.join(__dirname, "scraped_products.json"),
    JSON.stringify(allProducts, null, 2),
    "utf-8"
  );

  console.log("Scraping completed. Data saved to scraped_products.json");
};

scrapeAll();
