var express = require('express');
var path = require('path');
var logger = require('morgan');
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);


module.exports = app;
