'use strict';

var https = require('https'),
	Q = require('q');

var apiBasePath = 'https://query.yahooapis.com/v1/public/yql?format=json&q=';
var select = 'select * from weather.forecast where woeid in (select woeid from geo.places WHERE placetype="Postal Code" and country.code="US" and ';
var singleWhere = 'text='; 
var multipleWhere = 'text IN (';

var buildQuery = function(zipcodes) {
	var query = select;

	if (zipcodes.length === 1) {
		query += singleWhere + zipcodes[0];
	} else {
		query += multipleWhere + zipcodes.toString() + ')';
	}

	return query + ')';
};

var requestData = function(url) {
	var deferred = Q.defer();
	var response = '';

	https.get(url, function(res) {
		res.on('data', function(chunk) {
			response += chunk;
		});

		res.on('end', function() {				
			deferred.resolve(JSON.parse(response));
		});

	}).on('error', function(e) {
		deferred.reject('${e.message}');
	});

	return deferred.promise;
};

module.exports = {
	getForecast: function(zipcode) {
		var query = apiBasePath + encodeURIComponent(buildQuery([zipcode]));
		return requestData(query);
	},
	getForecasts: function(zipcodes) {
		var query = apiBasePath + encodeURIComponent(buildQuery(zipcodes));
		return requestData(query);
	}
};