const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
	time: Date,
	method: String,
	params: Object,
	name: String
});

module.exports = mongoose.model("App", AppSchema);
