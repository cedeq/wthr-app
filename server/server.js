'use strict';

var express = require('express'),
	path = require('path'),
	compression = require('compression'),
	yahoo = require('./lib/yahoo.js');

var app = express();
var srcDir = '../app';

app.use(compression());
app.use('/', express.static(path.join(__dirname, srcDir)));

app.get('/forecast/zipcode/:zipcode', function (req, res) {
	yahoo.getForecast(req.params.zipcode).then(function(forecast){
		res.send(forecast);
	});
});

app.get('/forecast/zipcodes/:zipcodes', function (req, res) {
	var zipcodes = req.params.zipcodes.split(',');
	yahoo.getForecasts(zipcodes).then(function(forecast){
		res.send(forecast);
	});
});

app.listen(8000, function () {
  console.log('App running at http://localhost:8000');
});
