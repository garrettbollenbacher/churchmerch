const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const ApparelItem = require("./models/ApparelItem");
const Church = require("./models/church");

async function scrapeChurchWebsite(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "domcontentloaded" });

    const content = await page.content();
    const $ = cheerio.load(content);

    // Example scraping logic
    const apparelItems = [];
    $(".apparel-item").each((index, element) => {
      const name = $(element).find(".item-name").text();
      const price = $(element).find(".item-price").text();
      const imageURL = $(element).find("img").attr("src");
      const linkToPurchase = $(element).find("a").attr("href");

      apparelItems.push({ name, price, imageURL, linkToPurchase });
    });

    // Save apparel items to the database
    for (let item of apparelItems) {
      const newItem = new ApparelItem({
        name: item.name,
        price: item.price,
        imageURL: item.imageURL,
        linkToPurchase: item.linkToPurchase,
        churchId: "some-church-id", // Replace with actual church ID
      });
      await newItem.save();
    }

    await browser.close();
    console.log("Scraping complete");
  } catch (error) {
    console.error("Error scraping website:", error);
  }
}

scrapeChurchWebsite("https://examplechurch.com/apparel");
