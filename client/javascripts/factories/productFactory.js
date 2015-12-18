myApp.factory('productFactory', function($http) {
	var factory = {};
	
	factory.addProduct = function(data, callback) {
		$http.post('/products', data).then(callback);
	}

	factory.showProduct = function(callback) {
		$http.get('/products').then(function(output) {
			callback(output);
		})
	}
	return factory;
})