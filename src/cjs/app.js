const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { cors, corsOptions } = require('./configs/cors');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(routes);

module.exports = app;
