const express = require('express');
const axios = require('axios');

const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendStatus(200);
  console.log('Response from GET console');
});


  .then((response) => {
    console.log(response.status);
  });

module.exports = app;
