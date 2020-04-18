/**
 * @author Nikals Rettenwander
*/
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use('/register', require('./controller/register/register'));



/** 
 * error handler
*/

app.use(require('./errorHandler/internal'));
app.use(require('./errorHandler/notFound'));


const serverOptions = {
  key: fs.readFileSync(path.join(__dirname, '../certificate/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificate/cert.pem')),
  passphrase: 'test',
};


const server = https.createServer(serverOptions, app);

server.listen(9443);
