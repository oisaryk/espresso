const express = require('express');
const router = express.Router();

const { success, error } = require('../utils/responses.js');
const App  = require('../models/app.model');
const axios = require('axios');

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

router.get('/crypto', async (req, res) => {

	 // axios.get('https://api2.binance.com/api/v3/ticker/24hr')
		// .then(function (response) {
		// 	// handle success
		// 	let result = response.data
	 //
		// 	res.json('ok');
		// })
		// .catch(function (error) {
		// 	// handle error
		// 	console.log(error);
		// 	res.end('no ok');
		// })
		// .finally(function () {
		// 	res.end('ok')
		// 	// always executed
		// });

	async function getCtypto() {
		try {
			const response = await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
			let result = response.data

			res.json(result)
			res.end()
		} catch (error) {
			res.end('error', error)
		}
	}

	await getCtypto()
})


router.get('/records', async (req, res) => {
	try {
		const result = await App.find().exec();
		if (res) res.json(success('Success!', { data: result }));
	} catch (e) {
		res.json(error('Something went wrong'));
	}
});

module.exports = router;
