const express = require('express');
const path = require('path');
const QandA = require('./components/Q&A');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.use(QandA);
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
