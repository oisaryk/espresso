const App  = require('../models/app.model');

const saveStatisic = async (params, method) => {
    const message = new App({
		time: new Date(),
		method,
		params
	});

    return await message.save();
};

module.exports = {
    saveStatisic
}