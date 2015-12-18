myApp.controller('productController', function($scope, productFactory) {
	
	function showProducts() {
		productFactory.showProduct(function(data) {
			$scope.products = data.data;
			console.log($scope.products);
		});
	};

	showProducts();

	$scope.addProduct = function() {
		productFactory.addProduct($scope.product, showProducts);
		$scope.product = {};
	};
})