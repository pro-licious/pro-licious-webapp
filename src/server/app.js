'use strict';

var express = require('express');
var app = express();

app.set('view', 'view');
app.get('/', function (req, res) {
  console.log('Gotcha success !');
});

app.listen(8080);
module.exports.getApp = app;