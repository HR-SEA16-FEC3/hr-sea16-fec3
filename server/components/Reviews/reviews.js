const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const reviews = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

reviews.get('/reviews', (req, res) => {
  axios.get(`${apiUrl}/reviews`, {
    headers: {
      Authorization: header,
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

reviewMeta.get('/reviews/meta', (req, res) => {
  axios.get(`${apiUrl}/reviews/meta/`, {
    headers: {
      Authorization: header,
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
