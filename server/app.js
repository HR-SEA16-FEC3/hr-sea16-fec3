const express = require('express');
const axios = require('axios');
const path = require('path');
const products = require('./components/products/products');
const QandA = require('./components/Q&A/Q&A');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(products);
app.use(QandA);

app.get('/', (req, res) => {
  res.sendStatus(200);
  console.log('Response from GET console');
});

module.exports = app;
