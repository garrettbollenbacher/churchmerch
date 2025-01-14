const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

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

      $("div.product-item").each((_, element) => {
      const product = {};
      
      const productLink = $(element).find("a.product-item__title");
      if (productLink.length) {
        product.name = productLink.text().trim();
        product.churchUrl = "https://upperroom.store" + productLink.attr("href");
      }

      const priceTag = $(element).find("span.price");
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }

      const imgTag = $(element).find("img.product-item__image");
      if (imgTag.length) {
        product.imageUrl = imgTag.attr("src")?.startsWith("https:") 
          ? imgTag.attr("src") 
          : "https:" + imgTag.attr("src");
      }

      product.category = "Upper Room";

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });

    return products;
  } catch (error) {
    console.error("Error scraping Upper Room merchandise:", error);
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
      product.category = product.category || "uncategorized";

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });

    return products;
  } catch (error) {
    console.error("Error scraping merchandise:", error);
    return [];
  }
};

const scrapeAllStores = async () => {
  try {
    const jesusImageProducts = await scrapeJesusImage();
    const upperRoomProducts = await scrapeUpperRoom();
    
    const allProducts = [...jesusImageProducts, ...upperRoomProducts];
    
    fs.writeFileSync(
      "scraped_products.json",
      JSON.stringify(allProducts, null, 2),
      "utf-8"
    );
    console.log("Scraping completed successfully. Data saved to scraped_products.json");
  } catch (error) {
    console.error("Error scraping stores:", error);
  }
};

scrapeAllStores();
