import 'dotenv/config';
import express from 'express';
import https from 'https';
import fs from 'fs';

import { configureServer } from './server.js';

const app = express();
configureServer(app);

const port = process.env.PORT ?? 8443;
const httpsOptions = {
  key: fs.readFileSync('./src/localhost.key'),
  cert: fs.readFileSync('./src/localhost.crt')
};

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Fastlane Sample Application - Server listening at https://localhost.paypal.com:${port}`);
});
