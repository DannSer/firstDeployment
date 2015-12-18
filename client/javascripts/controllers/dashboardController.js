myApp.controller('dashboardController', function($scope, dashboardFactory) {
	$scope.limitProducts = 5;
	$scope.limitOrders = 3;
	$scope.limitCustomers = 3;


	function getCustomers() {
		dashboardFactory.getCustomers(function(data) {
			$scope.customers = data.data;
			console.log($scope.customers);
		});
	};

	getCustomers();

	function getOrders() {
		dashboardFactory.getOrders(function(data) {
			$scope.orders = data.data;
			console.log($scope.orders);
		});
	};
	
	getOrders();

	function showProducts() {
		dashboardFactory.showProduct(function(data) {
			$scope.products = data.data;
			console.log($scope.products);
		});
	};

	showProducts();

	$scope.moreProducts = function() {
		console.log("hello");
		$scope.limitProducts += 5;
	};

	$scope.moreCustomers = function() {
		$scope.limitCustomers += 3;
	};

	$scope.moreOrders = function() {
		$scope.limitOrders += 3;
	};


});