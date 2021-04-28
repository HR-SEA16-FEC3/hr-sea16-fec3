const express = require('express');
const axios = require('axios');

const config = require('../../../config');

const QandA = express.Router();
const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const header = { Authorization: config.TOKEN };

QandA.get('/qa/questions/:question_id/answers', (req, res) => {
  axios.get(`${apiUrl}/qa/questions/${req.params.question_id}/answers?count=20`, {
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

QandA.get('/qa/questions/:question_id/', (req, res) => {
  axios.get(`${apiUrl}/qa/questions?product_id=${req.params.question_id}&count=20`, {
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
});

QandA.post('/qa/questions/:question_id/answers', (req, res) => {
  axios.post(`${apiUrl}/qa/questions/${req.params.question_id}/answers`, req.body, {
    headers: header,
  })
    .then(() => res.sendStatus(201))
    .catch((error) => res.status(500).send(error));
});

QandA.post('/qa/questions', (req, res) => {
  axios.post(`${apiUrl}/qa/questions`, req.body, {
    headers: header,
  })
    .then(() => res.sendStatus(201))
    .catch((error) => res.status(500).send(error));
});

module.exports = QandA;
