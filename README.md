# pES.js

<img src="./src/img/time-consuming.png" alt="time-consuming.png" style="width:200px;height:auto;"/>
<img src="./src/img/spider-web.png" alt="spider-web.png" style="width:200px;height:auto;"/>

## Situation:
  Suppliers are always challenged by having to fill out Product Spec Sheet to add their products to new partner sites (i.e [amazon.com](https://baymard.com/ecommerce-design-examples/45-product-spec-sheet/4852-amazon), [wayfair.com](https://baymard.com/ecommerce-design-examples/45-product-spec-sheet/4900-wayfair), [overstock](https://baymard.com/ecommerce-design-examples/45-product-spec-sheet/4843-overstock).com, and [more](https://baymard.com/product-page/benchmark/page-designs/product-spec-sheet)) It is a time consuming tedious task.  

## Action:
  To build an app that crawls over the supplier products from any website, given a ULR, and store that data so that it is available at any time for any website. Additionally, build API feature so supplier reduces the time spent adding the products on a partner website.

## Expected Outcome:
  To automatically systematically crawl website and store only valuable information such as supplier information (address, contacts, and product info). And build easy prod management. 



# Stack: 
- Node (ES6+)
- Express
- Webpack
- React
- Jest and Enzyme 

## Stack Features
- Hot Module Reloading 
- Deployement to Google App Engine with a single command
- Dev and Prod builds where the prod build outputs a minified, uglified bundle where images are encoded in Base64 directly into the css file.
- Can be run locally on your machine, or pushed to Google App Engine Flexible Environment.

## Installation

    npm install

## Create a Development build

    npm run buildDev

## Create a Production build

    npm run buildProd

## Run the code on a local webserver

    npm start

Then navigate to `http://localhost:8080`

## Deploy to Google App Engine Flex

    npm run deploy

## Run test

    npm test

## Generate coverage report

    npm run coverage

