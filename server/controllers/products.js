var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		create: function(req, res) {
			console.log("made it here");
			var product = new Product({Name: req.body.name, Picture: req.body.picture, Description: req.body.description, Quantity: req.body.quantity});
			product.save(function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(true);
				}
			})
		},

		show: function(req, res) {
			Product.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		}
	}
})();