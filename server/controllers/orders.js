var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');


module.exports = (function() {
	return {
		create: function(req, res) {
			console.log(req.body);
			var qty = -1 * req.body.quantity
			// Product.findOne({Name: req.body.product}, function(err,results){
			// 	console.log("RESULTS: ", results);
			// })
			// var query = {Name:req.body.product};
			// var update = {$inc:{Quantity: qty}};
			// var options = {multi:false};
			// var callback = function(err, results) {
			// 	if(err) {
			// 		console.log("Nope");
			// 	} else {
			// 		console.log(results)
			// 	}
			// }
			Product.update({Name:req.body.product}, {$inc:{Quantity: qty}}, {multi:false}, function(err, results) {
				if(err) {
					console.log("Nope");
				} else {
					console.log(results)
				}
			});

			var order = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity});
			order.save(function(err, results) {
				if(err) {
					console.log(err);
				} else { var decrement = req.body.quantity * -1;
					Product.update({name: req.body.product }, {$set: {}})
					res.json(true);
				}
			})
		},

		show: function(req, res) {
			Order.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}
	}
})();