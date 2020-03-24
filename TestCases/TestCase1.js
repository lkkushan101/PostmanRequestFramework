var request = require('postman-request');
	var postman_get = require('../Reusable_Request/GetRequest.js');
	var postman_post = require('../Reusable_Request/PostRequest.js');
	var postman_delete  = require('../Reusable_Request/DeleteRequest.js');
	var data = require('../Data/data.json');
	var postman_put = require('../Reusable_Request/PutRequest.js');
	postman_get.getRequest(data.Request_Get);
	postman_post.postRequest(data.Request_Post,{ "email": data.email, "password": data.password });
	postman_delete.deleteRequest (data.Request_Delete);
