const Server = require('./server');
const express = require('express');
const app = express();

require('dotenv').config()
const port = process.env.PORT || 2023;
const index = new Server(app, port);
index.run();
console.log('sdds')