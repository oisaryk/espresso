const express = require('express');
const router = express.Router();

const { success, error } = require('../utils/responses.js');
const App  = require('../models/app.model');

/* Main API point */
router.get('/', (req, res, next) => {
	const message = new App({
		time: new Date(),
		method: req.method,
		params: req.params
	});

	message.save().then((data) => {
		console.log(data)
		res.send(success('Information has been updated', { data }))
	}).catch((err) => {
		res.send(error('Error occurred with db interaction'));
	})
});

router.get('/records', async (req, res) => {
	try {
		const result = await App.find().exec();
		if (res) res.json(success('Success!', { data: result }));
	} catch (e) {
		res.json(error('Something went wrong'));
	}
});

module.exports = router;
