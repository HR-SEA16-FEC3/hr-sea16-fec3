const express = require('express');
const axios = require('axios');
<<<<<<< HEAD

const app = express();
const path = require('path');

// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
=======
const path = require('path');
const QandA = require('./components/Q&A/Q&A');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(QandA);
>>>>>>> 89a1e8bbec66f0b7c4be6cd05d54252ede8aac0c

app.get('/', (req, res) => {
  res.sendStatus(200);
  console.log('Response from GET console');
});

<<<<<<< HEAD

  .then((response) => {
    console.log(response.status);
  });

=======
>>>>>>> 89a1e8bbec66f0b7c4be6cd05d54252ede8aac0c
module.exports = app;
