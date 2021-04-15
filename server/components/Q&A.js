const express = require('express');

const QandA = express.Router();

QandA.get('/qa/questions/:product_id/:page/:count/');

module.exports = QandA;
