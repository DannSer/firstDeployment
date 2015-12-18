myApp.controller('customerController', function($scope, customerFactory) {

		function getCustomers() {
			customerFactory.getCustomers(function(data) {
				$scope.customers = data.data;
			});
		};

		getCustomers();

		$scope.saveCustomer = function() {
			customerFactory.addCustomer($scope.newCustomer, getCustomers);
			$scope.newCustomer = {}
		};

		$scope.deleteCustomer = function (data, callback) {
			customerFactory.deleteCustomer(data, getCustomers);
		};
	});