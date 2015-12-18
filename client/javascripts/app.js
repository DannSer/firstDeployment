var myApp = angular.module('myApp', ['ngRoute']);
    	
myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/customers.html'
        })
        .when('/partial2',{
            templateUrl: 'partials/orders.html'
        })
        .when('/partial3', {
            templateUrl: 'partials/products.html'
        })
        .when('/partial4', {
            templateUrl: 'partials/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});