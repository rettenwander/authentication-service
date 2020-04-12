/**
 * @author Nikals Rettenwander
*/
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use('/register', bodyParser.json());
app.use('/register', require('./controller/register'));


const serverOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certificate/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificate/certificate.pem')),
};


const server = https.createServer(serverOptions, app);

server.listen(9443);
