const express = require('express');
const axios = require('axios');

const config = require('../../../config');
const exampleData = require('./questions_example');

const QandA = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

QandA.get('/qa/questions/:product_id/:page?/:count?/', (req, res) => {
  res.status(200).send(exampleData);

  // axios.get(`${apiUrl}/qa/questions?product_id=${req.params.product_id}`, {
  //   headers: header,
  // })
  //   .then((response) => {
  //     res.status(200).send(response.data);
  //   })
  //   .catch((error) => {
  //     res.sendStatus(500);
  //     throw error;
  //   });
});

// Answer api things
QandA.put('/qa/:QorA/:answer_id/helpful', (req, res) => {
  // axios.put(`${apiUrl}/qa/answers/${req.params.answer_id}/helpful`, {}, {
  //   headers: header,
  // })
  //   .then(() => {
  //     res.status(204).send();
  //   })
  //   .catch((error) => {
  //     res.sendStatus(500);
  //     throw error;
  //   });
  res.status(204).send();
});

QandA.put('/qa/:QorA/:answer_id/report', (req, res) => {
  // axios.put(`${apiUrl}/qa/answers/${req.params.answer_id}/report`, {}, {
  //   headers: header,
  // })
  //   .then(() => {
  //     res.status(204).send();
  //   })
  //   .catch((error) => {
  //     res.sendStatus(500);
  //     throw error;
  //   });
  res.status(204).send();
});

module.exports = QandA;
