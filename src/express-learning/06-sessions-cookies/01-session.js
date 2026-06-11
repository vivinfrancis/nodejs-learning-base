const express = require('express');
const session = require('express-session');

const app = express();

app.use(
  session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: false
  })
);

app.get('/login', (req, res) => {

  req.session.user = {
    id: 1,
    name: 'Vivin'
  };

  res.send('Login Success');
});

app.get('/profile', (req, res) => {

  console.log(req.session);

  res.json(req.session.user);
});

app.get('/logout', (req, res) => {

  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.send('Logout Success');
  });
});

app.listen(3000, () => {
  console.log('Server Running');
});