myApp.controller('orderController', function($scope, orderFactory) {
	// $scope.numOfOrders = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	// $scope.products = ['Sword', "Hammer", "Hammersword", "sponge"];
	console.log(orderFactory);
	function getCustomers() {
		orderFactory.getCustomers(function(data) {
			$scope.customers = data.data;
		});
	};

	getCustomers();

	function getOrders() {
		orderFactory.getOrders(function(data) {
			$scope.orders = data.data;
		});
	};
	
	getOrders();

	function showProducts() {
		orderFactory.showProduct(function(data) {
			$scope.products = data.data;
			console.log($scope.products);
		});
	};

	showProducts();

	$scope.saveOrder = function () {
		console.log($scope.order);
		orderFactory.addOrder($scope.order, getOrders);
	}
})