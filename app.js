const http = require('http');

const PORT = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Dockerized Jenkins CI/CD!\n');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
