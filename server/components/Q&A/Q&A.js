const express = require('express');
const axios = require('axios');
/* istanbul ignore next */
const config = require('../../../config');

const QandA = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

QandA.get('/qa/questions/:product_id/:page?/:count?/', (req, res) => {
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

// Answer api things
QandA.put('/qa/answers/:answer_id/helpful', (req, res) => {
  axios.put(`${apiUrl}/qa/answers/${req.params.answer_id}/helpful`, {}, {
    headers: header,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
});

QandA.put('/qa/answers/:answer_id/report', (req, res) => {
  axios.put(`${apiUrl}/qa/answers/${req.params.answer_id}/report`, {}, {
    headers: header,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
});

module.exports = QandA;
