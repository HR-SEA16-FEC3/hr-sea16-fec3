const app = require('./app.js');

const PORT = 3000;

app.use(QandA);
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});
