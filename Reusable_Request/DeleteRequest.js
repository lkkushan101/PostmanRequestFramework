'use strict';
	var request = require('postman-request');
	var fs = require('fs');
	var createHTML = require('create-html');
	module.exports = {
	deleteRequest : function(urlRequest) {
	request({
	    method: 'DELETE',
	    uri: urlRequest},  function(err,httpResponse,body){
	  var htmlContent = '<html><h1>Delete Request Status - PostMan Request Framework </h1> <b> Request URL :'+urlRequest+'<b> </br> Response Code : ' + httpResponse.statusCode +'</b> </html>';

	fs.writeFile('DeleteRequestReport.html', htmlContent, (error) => { /* handle error */ });
	  console.log('statusCode:',  httpResponse.statusCode); 
	 
	});
	    }
	}