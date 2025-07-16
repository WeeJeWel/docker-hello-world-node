import http from 'http';
import os, { hostname } from 'os';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    os: {
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      release: os.release(),
      uptime: os.uptime(),
      loadavg: os.loadavg(),
      totalmem: os.totalmem(),
      freemem: os.freemem()
    },
    process,
  }, null, 2));
});

server.listen(PORT, err => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
    return;
  }

  console.log(`Server running at http://0.0.0.0:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  server.close(() => {
    process.exit(0);
  });
});