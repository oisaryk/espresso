const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
	time: Date,
	method: String,
	params: Object
});

module.exports = mongoose.model("App", AppSchema);
