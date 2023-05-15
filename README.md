# NutriScan Readme File

Welcome to NutriScan! 
NutriScan is an innovative full stack app, designed to help you make informed purchasing decisions based on your nutritional, dietary and environmental preferences. It does that by simply scanning products' barcode. It is easy to use, and is accessible as a web version and as a mobile app. It is powered by cutting-edge technologies such as React, Node.js, and MongoDB, and is integrated with several features to make the user experience seamless.

## How to Run the App

### Web Version

To access the web version, simply visit the following link:

https://nutri-scan.netlify.app/

### Install as an App

To install NutriScan as an app, follow these steps:

1. Visit the web version of NutriScan at the following link: https://nutri-scan.netlify.app/
2. Click on the computer logo on the right side of the URL box.
3. Click the "Install" button.

## How to Use the App

To use the NutriScan app, simply follow these steps:

1. Open the app on your device.
2. Scan a product's barcode using the integrated barcode scanner.
3. The app will show you if the product matches your diet, environment, and nutrition preferences.
4. Set your preferences in the app by going to the preferences page.
5. View detailed information about each product, including ingredients and nutritional values.

## Features

NutriScan comes with the following features:

- Scan products' barcode and see if they match your diet, environment, and nutrition preferences.
- Set your diet, environment, and nutrition preferences in the app.
- View detailed information about each product, including ingredients and nutritional values.
- Search products from the products you scanned by name, barcode number, category, or manufacturer.
- Create a user to have all your scans saved, or use without logging in and directly start scanning.
- Authentication with JSON Web Tokens (JWT).
- Dynamically created database, with products scraped from multiple supermarket chains' websites.
- Microsoft Azure API integration for translation of products' information from Hebrew to English.
- Quagga barcode scanner integration.
- Progressive web app: use the app as a web version, or install it with a click and use as an app from every device.
- Responsive UI.

## Technologies Used

NutriScan was developed using the following technologies:

- React
- Node.js
- Express
- JSON Web Tokens (JWT)
- MongoDB
- Puppeteer (scraping)
- Microsoft Azure (translation)
- Quagga barcode scanner

## Deployment Services Used

NutriScan was deployed using the following services:

- Server deployed to Render
- Client (UI) deployed to Netlify

## Planned Features

We are continually improving the app and have several planned features in the pipeline. The following features are planned for the near future of NutriScan:

- Search from products, instead of scanning.
- In the product's page, a carousel of similar products.

## Challenges

The development of NutriScan presented several challenges, including:

- Writing the logic for the products and the users to find if each of the options match to the user preferences was the apps main challenge and the core of its logic. 
- Scraping: writing a scraping function that scrolls to load all the products, opens each product page, opens the ingredients section of each product, and gets all the information. If the function fails due to a fail on the website side, it will reload and start again, until it succeeds. The function also waits a bit after every step, to mimic user behavior.
- Dynamically creating the database, embedding translation and many functions that test the products' scraped data took a lot of planning and structured work.

### Thank you for checking out NutriScan, and I hope you find it useful!
