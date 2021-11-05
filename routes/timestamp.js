const express = require('express');
const router = express.Router();
const moment =require('moment');

const { success, error } = require('../utils/responses.js');

router.post('/', (req, res) => {
  if (!req.body) return res.json(error("error!"));
  let timestamp = req.body.timestamp
  let myMoment = moment(timestamp).format("MMMM Do YYYY_HH-mm-ss.SSSS");
  console.log(myMoment)
  res.json(success("sucess!", { date: myMoment }));
});
 


module.exports = router;


