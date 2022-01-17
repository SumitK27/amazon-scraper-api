# **Amazon Scraper API**

JavaScript based Amazon Scraping API that allows you to get product details directly from Amazon.

## **Setup**

1. Rename `sample.env` to `.env`.
2. Open `.env` file and add your ScraperAPI key [Found here](https://dashboard.scraperapi.com/signup)
3. Start the server by `npm start`.

## **Product ID**

![productID](./images/product%20ID.png)

## **Endpoints**

### **Product Details**

```
"Method": GET
"Parameter": Product ID
"Endpoint": /products/{productID}
```

**Example**
`localhost:3000/products/B08L5T3S7T`

**Response**

```json
{
    "name": "Apple iPhone 12 (64GB) - Black",
    "product_information": {},
    "brand": "Visit the Apple Store",
    "brand_url": "https://www.amazon.in/stores/Apple/page/88D59F86-9161-4804-A524-0A5B39CD714A?ref_=ast_bln",
    "full_description": "",
    "pricing": "₹53,999.00",
    "list_price": "",
    "availability_status": "In stock.",
    "images": [
        "https://m.media-amazon.com/images/I/31SOygUjpUL.jpg",
        "https://m.media-amazon.com/images/I/91ewXAzTtGL.png",
        "https://m.media-amazon.com/images/I/319XFhh9FDL.jpg",
        "https://m.media-amazon.com/images/I/41LGQ7JRlVL.jpg",
        "https://m.media-amazon.com/images/I/41LGQ7JRlVL.jpg",
        "https://m.media-amazon.com/images/I/31Flw7jJHRL.jpg",
        "https://m.media-amazon.com/images/I/41whFEzDzvL.jpg",
        "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif"
    ],
    "product_category": "",
    "average_rating": 4.6,
    "small_description": "About this item 6.1-inch (15.5 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance Supports MagSafe accessories for easy attach and faster wireless charging iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
    "total_reviews": 7665,
    "total_answered_questions": 659
}
```

### **Product Reviews**

```
"Method": GET
"Parameter": Product ID
"Endpoint": /products/{productID}/reviews
```

**Example**
`localhost:3000/products/B08L5T3S7T/reviews`

**Response**

```json
{
    "average_rating": 4.6,
    "total_ratings": 7665,
    "filtered_total_ratings": 7665,
    "total_reviews": 1160,
    "filtered_total_reviews": 1160,
    "5_star_ratings": 6055,
    "5_star_percentage": 0.79,
    "4_star_ratings": 1073,
    "4_star_percentage": 0.14,
    "3_star_ratings": 230,
    "3_star_percentage": 0.03,
    "2_star_ratings": 77,
    "2_star_percentage": 0.01,
    "1_star_ratings": 307,
    "1_star_percentage": 0.04,
    "product": {
        "url": "https://www.amazon.in/New-Apple-iPhone-12-64GB/dp/B08L5T3S7T",
        "name": "Apple iPhone 12 (64GB) - Black",
        "brand": "Apple",
        "price": null,
        "image": "https://m.media-amazon.com/images/I/31SOygUjpUL.jpg",
        "variation": {
            "Colour": "Black",
            "Size name": "64GB",
            "Pattern name": "iPhone 12"
        }
    },
    "top_positive_review": {...},
    "top_critical_review": {...},
    "reviews": [],
    "pagination": [
        "https://www.amazon.in/New-Apple-iPhone-12-64GB/product-reviews/B08L5T3S7T?pageNumber=2"
    ]
}
```

### **Product Offers**

```
"Method": GET
"Parameter": Product ID
"Endpoint": /products/{productID}/offers
```

**Example**
`localhost:3000/products/B08L5T3S7T/offers`

**Response**

```json
{
    "item": {
        "name": "",
        "brand": "",
        "product_information": {},
        "image": "",
        "average_rating": 4.6,
        "total_reviews": null
    },
    "listings": [],
    "pagination": []
}
```

### **Search Products**

```
"Method": GET
"Parameter": Product ID
"Endpoint": /search/{productName}
```

**Example**
`localhost:3000/products/Apple Iphone 12 64GB`

**Response**

```json
{
    "ads": [],
    "amazons_choice": [],
    "results": [
        {
            "type": "search_product",
            "name": "Apple iPhone 12 (64GB) - Blue",
            "image": "https://m.media-amazon.com/images/I/71ZOtNdaZCL.jpg",
            "has_prime": true,
            "is_best_seller": false,
            "is_amazon_choice": false,
            "is_limited_deal": false,
            "stars": 4.6,
            "total_reviews": null,
            "url": "https://www.amazon.in/New-Apple-iPhone-12-64GB/dp/B08L5WHFT9/ref=sr_1_1?keywords=Apple+iPhone+12+64GB&qid=1642412925&sr=8-1",
            "availability_quantity": null,
            "spec": {},
            "price_string": "₹56,999",
            "price_symbol": "₹",
            "price": 56999
        },
        ...
    ],
    "explore_more_items": [],
    "pagination": [
        "https://www.amazon.in/s?k=Apple+iPhone+12+64GB&qid=1642412925&ref=sr_pg_1&page=2",
        ...
    ]
}
```

## **Technologies Used**

-   **ExpressJS** - HTTP Server
-   **DotENV** - Use environmental variable values
-   **response-promise** - fetch request from API
-   **ScraperAPI** - for Web Scraping
