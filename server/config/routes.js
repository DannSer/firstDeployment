var customer = require('./../controllers/customers.js');
var order = require('./../controllers/orders.js');
var product = require('./../controllers/products.js');
module.exports = function(app) {
	app.post('/customers', function(req, res) {
		customer.create(req, res);
	});

	app.get('/customers', function(req, res) {
		customer.show(req, res);
	});

	app.delete('/customers/:id', function(req, res) {
		customer.delete(req, res);
	});

	app.post('/orders', function(req, res) {
		order.create(req, res);
	});

	app.get('/orders', function(req, res) {
		order.show(req, res);
	})

	app.post('/products', function(req, res) {
		product.create(req, res);
	})

	app.get('/products', function(req, res) {
		product.show(req, res);
	})

	//get orders
};


