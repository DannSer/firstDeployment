var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
	Name: String, 
	Picture: String, 
	Description: String,
	Quantity: Number
});
mongoose.model('Product', ProductSchema);