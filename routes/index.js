const express = require('express');
const router = express.Router();

const { success, error } = require('../utils/responses.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Espresso" });
});

module.exports = router;
