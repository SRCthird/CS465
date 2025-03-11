import 'dotenv/config';
import process from 'node:process';

import express from 'express';
import https from 'node:https';
import http from 'node:http';
import fs from 'node:fs';

// *** Constants *** //
const PORT = process.env.PORT;
const CERT = process.env.CERT;
const KEY = process.env.KEY;

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Check if SSL certificate and key exist
if (fs.existsSync(CERT) && fs.existsSync(KEY)) {
  // Create SSL Options object
  const sslOptions = {
    cert: fs.readFileSync(CERT),
    key: fs.readFileSync(KEY),
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
