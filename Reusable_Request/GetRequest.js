'use strict';
	var request = require('postman-request');
	var fs = require('fs');
	var createHTML = require('create-html');
	var html = createHTML({
         title: 'example'
        })
	module.exports = {
	getRequest : function(urlRequest) {
	 request.get(urlRequest, function (error, response, body) {
         var htmlContent = '<html><h1>Get Request Status - PostMan Request Framework </h1> <b> Request URL :'+urlRequest+'<b> </br> Response Code : ' + response.statusCode +'</b> </br> <b> Response:'+ response+'</b> </html>';

	fs.writeFile('GetRequestReport.html', htmlContent, (error) => { /* handle error */ });
	  console.log('error:', error); 
	  console.log('statusCode:', response && response.statusCode); 
	  console.log('body:', body); 
	});

	    }
      }