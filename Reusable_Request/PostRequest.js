'use strict';
	var request = require('postman-request');
	var fs = require('fs');
	var createHTML = require('create-html');
	module.exports = {
	postRequest : function(urlRequest, parameters_json) {
	request({
	    method: 'POST',
	    uri: urlRequest,
	    form:parameters_json
	},  function(err,httpResponse,body){
 var htmlContent = '<html><h1>Post Request Status - PostMan Request Framework </h1> <b> Request URL :'+urlRequest+'<b> </br> Response Code : ' + httpResponse.statusCode +'</b> </br> <b> Request Parameters:'+parameters_json+'</b> </html>';

	fs.writeFile('PostRequestReport.html', htmlContent, (error) => { /* handle error */ });
	 
	  console.log('statusCode:',  httpResponse.statusCode); 
	  console.log('body:', body); 
	});
	    }
	}