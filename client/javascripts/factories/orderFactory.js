myApp.factory('orderFactory', function($http) {
			var factory = {};
			factory.getCustomers = function(callback) {
				$http.get('/customers').then(function(output) {
					callback(output);
				})
			}

			factory.showProduct = function(callback) {
				$http.get('/products').then(function(output) {
			callback(output);
				})
			}
			
			factory.getOrders = function(callback) {
				$http.get('/orders').then(function(output) {
					callback(output);
				})
			}

			factory.addOrder = function(data, callback) {
				$http.post('/orders', data).then(callback); 
			}

			//deleteOrder
			return factory;
		})