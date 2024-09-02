// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello World!" to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Vamshi, Docker is Suceessfully Running!\n');
});

// Listen on port 3000, IP defaults to 0.0.0.0
const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
