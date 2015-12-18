myApp.factory('customerFactory', function($http) {
	var factory = {};
	
	factory.getCustomers = function(callback) {
		$http.get('/customers').then(function(output) {
			callback(output);
		})
	}

	factory.addCustomer = function(data, callback) {
		$http.get('/customers').then(function(output) {
			var customers = output.data;

			if (customers.length == 0) {
				$http.post('/customers', data).then(callback);
			} else {
				console.log(data);
				for(var i = 0; i <customers.length; i++) {
					if(customers[i].name == data.name) {
						alert("You can't use that name!");
						return;
					}
				}
			}
			$http.post('/customers', data).then(callback);
		});
	}

	factory.deleteCustomer = function(data, callback) {
		$http.delete('/customers/'+data._id).then(callback);
	}
	return factory;
});