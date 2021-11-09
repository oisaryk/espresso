const express = require('express');
const router = express.Router();

const { success, error } = require('../utils/responses.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Espresso" });
});

router.get('/demo', (req, res, next) => {
  res.status(200).send({ message: 'Hello' });
});

module.exports = router;
