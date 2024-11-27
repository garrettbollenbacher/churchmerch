const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const scrapeMerchandise = async () => {
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

    $("li.grid__item").each((index, element) => {
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
        product.link = "https://jesusimage.store" + productLink.attr("href");
        console.log("Raw Product Name:", productLink.text().trim());
      }

      // Extract product price
      const priceTag = $(element).find("span.price-item--regular");
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }

      // Extract product image
      // Extract product image
      const imgTag = $(element).find("img");
      if (imgTag.length) {
        if (imgTag.attr("src")) {
          product.image = "https:" + imgTag.attr("src");
        } else if (imgTag.attr("srcset")) {
          const srcset = imgTag.attr("srcset").split(",");
          product.image = "https:" + srcset[0].split(" ")[0].trim(); // Extract the first URL from srcset
        }
      }

      if (Object.keys(product).length > 0) {
        products.push(product);
      }
    });

    // Save scraped data to a JSON file
    fs.writeFileSync(
      "scraped_products.json",
      JSON.stringify(products, null, 2),
      "utf-8"
    );
    console.log(
      "Scraping completed successfully. Data saved to scraped_products.json"
    );
  } catch (error) {
    console.error("Error scraping merchandise:", error);
  }
};

scrapeMerchandise();
