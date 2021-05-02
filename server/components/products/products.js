const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const products = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';

// LIST PRODUCTS:  Retrieves the list of products
products.get('/products', (req, res) => {
  axios.get(`${apiUrl}/products`, {
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      page: 10,
      count: 100,
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.sendStatus(500);
    });
});

// PRODUCT INFO:  Returns all product level information for a specified product id
products.get('/products/:product_id/', (req, res) => {
  axios.get(`${apiUrl}/products/${req.params.product_id}`, {
    headers: {
      Authorization: config.TOKEN,
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.sendStatus(500);
    });
});

// PRODUCT STYLES:  Returns the all styles available for the given product
products.get('/products/:product_id/styles', (req, res) => {
  const productId = req.params.product_id;
  axios.get(`${apiUrl}/products/${productId}/styles`, {
    headers: {
      Authorization: config.TOKEN,
    },
  })
    .then((response) => {
      if (response.data.results.length === 0) {
        res.status(500).send(`No styles found for selected productId: ${productId}`);
      } else { res.status(200).send(response.data); }
    })
    .catch((error) => {
      console.log('Error:', error);
      res.sendStatus(500);
    });
});

module.exports = products;
