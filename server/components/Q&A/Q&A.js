const express = require('express');
const axios = require('axios');

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
QandA.put('/qa/:QorA/:id/helpful', (req, res) => {
  axios.put(`${apiUrl}/qa/${req.params.QorA}/${req.params.id}/helpful`, {}, {
    headers: header,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
  res.status(204).send();
});

QandA.put('/qa/:QorA/:id/report', (req, res) => {
  axios.put(`${apiUrl}/qa/${req.params.QorA}/${req.params.id}/report`, {}, {
    headers: header,
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.sendStatus(500);
      throw error;
    });
  res.status(204).send();
});

QandA.post('/qa/questions/:product_id/answers', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

module.exports = QandA;
