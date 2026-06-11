const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Express Server is running!');
});

app.get('/vivin', (req, res) => {
  res.send('vivin Server is running!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});