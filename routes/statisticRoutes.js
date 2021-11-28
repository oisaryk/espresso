const express = require('express');
const router = express.Router();
const statisticController = require('../controllers/statistics.contoller');

const { success, error } = require('../utils/responses.js');
const App  = require('../models/app.model');

/* Main statistic point */
router.get('/', (req, res) => {
	statisticController.saveStatistic(req, res);
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
