const express = require("express");
const request = require("request-promise");
const router = express.Router();

const apiKey = process.env.SCRAPER_API_KEY;
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

router.get("/", (req, res) => {
    res.send("Welcome to Amazon Scarper API");
});

// GET Product Details
router.get("/products/:productId", async (req, res) => {
    const productId = req.params.productId;

    try {
        const response = await request(
            `${baseUrl}&url=https://www.amazon.in/dp/${productId}`
        );

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Reviews
router.get("/products/:productId/reviews", async (req, res) => {
    const productId = req.params.productId;

    try {
        const response = await request(
            `${baseUrl}&url=https://www.amazon.in/product-reviews/${productId}`
        );
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// GET Product Offers
router.get("/products/:productId/offers", async (req, res) => {
    const productId = req.params.productId;

    try {
        const response = await request(
            `${baseUrl}&url=https://www.amazon.in/gp/offer-listing/${productId}`
        );
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

// GET Searched Products
router.get("/search/:searchQuery", async (req, res) => {
    const searchQuery = req.params.searchQuery;

    try {
        const response = await request(
            `${baseUrl}&url=https://www.amazon.in/s?k=${searchQuery}`
        );
        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;
