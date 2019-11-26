const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./index');
const personRoute = require('./route');
app.use('/', index);
app.use('/route', personRoute);
module.exports = app;