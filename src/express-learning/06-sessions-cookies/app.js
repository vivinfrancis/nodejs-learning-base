const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('username', 'Vivin');
  res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
  const username = req.cookies.username;
  res.send(`Cookie value: ${username}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});