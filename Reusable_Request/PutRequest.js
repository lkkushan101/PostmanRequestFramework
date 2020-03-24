'use strict';
	var request = require('postman-request');
	module.exports = {
	putRequest : function(urlRequest, parameters_json) {
	request({
	    method: 'PUT',
	    uri: urlRequest,
	    form:parameters_json
	},  function(err,httpResponse,body){
	 
	  console.log('statusCode:',  httpResponse.statusCode); 
	  console.log('body:', body); 
	});
	    }
	}