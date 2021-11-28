const express = require('express');
const router = express.Router();
const { mainRoute, demoRoute } = require('../controllers/app.controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  mainRoute(req, res, next);
});

router.get('/demo', (req, res, next) => {
  demoRoute(req, res, next);
});

module.exports = router;
