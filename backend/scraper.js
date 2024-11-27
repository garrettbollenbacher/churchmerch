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
        product.name = productLink.text().trim();
        product.link = "https://jesusimage.store" + productLink.attr("href");
      }

      // Extract product price
      const priceTag = $(element).find("span.price-item--regular");
      if (priceTag.length) {
        product.price = priceTag.text().trim();
      }

      // Extract product image
      const imgTag = $(element).find("img.motion-reduce");
      if (imgTag.length) {
        product.image = "https:" + imgTag.attr("src");
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
