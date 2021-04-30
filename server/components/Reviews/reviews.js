const express = require('express');
const axios = require('axios');
const config = require('../../../config');

const reviews = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

reviews.get('/reviews', (req, res) => {
  axios.get(`${apiUrl}/reviews`, {
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

reviewMeta.get('/reviews/meta', (req, res) => {
  axios.get(`${apiUrl}/reviews/meta/`, {
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

reviews.post('/reviews', (req, res) => {
  axios.post(`${apiUrl}/qa/questions/${req.params.question_id}/answers`, req.body, {
    headers: header,
  })
    .then(() => res.sendStatus(201))
    .catch((error) => res.status(500).send(error));
});

reviewHelpful.put('/reviews/:review_id/helpful, (req, res) => {
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
});

reviewReport.put('/reviews/:review_id/report', (req, res) => {
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
});

module.exports = reviews;
