const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    name: 'Vivin',
    role: 'Backend Learner'
  }));

});

server.listen(3001);