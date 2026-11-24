const http = require('http');

// Version and color are passed as environment variables
const VERSION = process.env.APP_VERSION || 'v1';
const COLOR = process.env.APP_COLOR || 'blue';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    version: VERSION,
    color: COLOR,
    message: `Hello from ${COLOR} environment (${VERSION})`,
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`${COLOR} (${VERSION}) listening on port ${PORT}`);
});

