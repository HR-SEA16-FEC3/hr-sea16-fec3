const express = require('express');
const axios = require('axios');
const path = require('path');
const QandA = require('./components/Q&A');

const app = express();

// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(QandA);

app.get('/', (req, res) => {
  res.sendStatus(200);
  console.log('Response from GET console');
})
.then((response) => {
    console.log(response.status);
  });

module.exports = app;
