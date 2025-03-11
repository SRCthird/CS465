import express from 'express';
import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';

// *** Constants *** //
const app = express();
const PORT = 8080;

// SSL files
const certPath = 'ssl/server.cer';
const keyPath = 'ssl/server.key';

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Check if SSL certificate and key exist
if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
  // Create SSL Options object
  const sslOptions = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
  };

  // Start HTTPS server
  https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`HTTPS Server running at https://localhost:${PORT}`);
  });

} else {
  // Start HTTP server if no certificate is found
  console.warn("Warning: server.key and server.cert not found. Place items in ssl folder to start as https")
  http.createServer(app).listen(PORT, () => {
    console.log(`HTTP Server running at http://localhost:${PORT}`);
  });
}

