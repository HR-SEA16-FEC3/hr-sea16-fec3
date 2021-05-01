const express = require('express');
const axios = require('axios');
const path = require('path');
const config = require('../config');
const products = require('./components/products/products');
const QandA = require('./components/Q&A/Q&A');

const app = express();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

const distPath = path.resolve(__dirname, '..', 'public');

app.use(express.json());
app.use('/', express.static(distPath));
app.use(/\/\d*(?![A-Za-z])/, express.static(distPath));
app.use(products);
app.use(QandA);

app.get('/products', (req, res) => {
  axios.get(`${apiUrl}/qa/questions?product_id=${req.params.product_id}`, {
    headers: header,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
});

module.exports = app;
