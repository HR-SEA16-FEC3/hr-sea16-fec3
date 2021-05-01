const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const reviews = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

reviews.get('/reviews/:product_id/', (req, res) => {
  axios.get(`${apiUrl}/reviews/?product_id=${req.params.product_id}&count=20`, {
    headers: header,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.sendStatus(500);
    });
});

reviews.get('/reviews/meta/:product_id/', (req, res) => {
  axios.get(`${apiUrl}/reviews/meta/?product_id=${req.params.product_id}`, {
    headers: header,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:', error);
      res.sendStatus(500);
    });
});

reviews.post('/reviews/:product_id/', (req, res) => {
  axios.post(`${apiUrl}/reviews/${req.params.product_id}`, req.body, {
    headers: header,
  })
    .then(() => res.sendStatus(201))
    .catch((error) => res.status(500).send(error));
});

reviews.put('/reviews/:review_id/helpful', (req, res) => {
  axios.put(`${apiUrl}/reviews/${req.params.id}/helpful`, {}, {
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

reviews.put('/reviews/:review_id/report', (req, res) => {
  axios.put(`${apiUrl}/reviews/${req.params.id}/report`, {}, {
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

module.exports = reviews;
