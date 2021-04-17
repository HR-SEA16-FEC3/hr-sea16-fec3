const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const QandA = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';

QandA.get('/qa/questions/:product_id/:page?/:count?/', (req, res) => {
  axios.get(`${apiUrl}/qa/questions?product_id=${req.params.product_id}`, {
    headers: {
      Authorization: config.TOKEN,
    },
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
});

module.exports = QandA;
