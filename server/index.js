const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));


app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
