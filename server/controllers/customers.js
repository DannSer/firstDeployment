var mongoose = require('mongoose');
var Customer = mongoose.model('User');

module.exports = (function() {
	return {
		create: function(req, res) {
			var customer = new Customer({name: req.body.name});
			customer.save(function(err, results) {
				if(err) {
					console.log(err);
				} else {
					res.json(true);
				}

			})
		},

		show: function(req, res) {
			Customer.find({}, function(err, results) {
				if(err) {
					console.log(err);
				} else { 
					res.json(results);
				}
			})
		},

		delete: function(req, res) {
			Customer.remove({_id: req.params.id}, function(err) {
				if(err) {
					console.log(err);
				} else {
					res.json(true);
				}
			})
		}
	}
})();