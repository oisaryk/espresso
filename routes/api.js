const express = require('express');
const router = express.Router();
const axios = require('axios');

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





router.get('/countries', async (req, res) => {
	try {
		let countries = req.params.countries;
			if(!countries){
				countries = 'Ukraine'
			}
		axios.get('http://universities.hipolabs.com/search?country=' + countries)
			.then(function (data) {
				// res.send(success('This is country', {data}))
				console.log(data);
				res.json(data.data);
				res.end();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	} catch (e) {
		res.json(error('Something went wrong'));
	}
});


// axios.get('/api/country')
// 	.then(function (response) {
// 		response.status(200);
// 		console.log(response);
// 	})
// 	.catch(function (error) {
// 		// handle error
// 		console.log(error);
// 	})
// 	.then(function () {
// 		// always executed
// 	});


// router.get('/countries=', (req,res) => {
// 	req.params
// 	let array = req.body;
// 	res.status(200).send(array);
// })






// const dataObtain = (req,res) => {
// 	if(req.url.match('http://universities.hipolabs.com/search?country=Ukraine')){
// 		let array = req.body.params;
// 		res.status('200').send(array);
// 	}else{
// 		throw err
// 		res.send("Error")
// 	}
//


module.exports = router;
