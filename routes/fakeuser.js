const express = require('express');
const axios = require('axios');
const router = express.Router();

const { success, error } = require('../utils/responses.js');


router.post('/', async (req, res) => {
    // try {
    //     let firstName = req.body?.firstname;
    //     let lastName = req.body?.lastname;

    //     axios.get('https://randomuser.me/api/')
    //     .then(response => {
    //         let data = response.data.results;
    //         if(!data) res.send(error('No data found!'))
    //         data[0].name.first = !firstName || (firstName === '""') || (+firstName) || (firstName.trim() === '')
    //         ? data[0].name.first
    //         : firstName.trim();
    //         data[0].name.last = !lastName || (lastName === '""') || (+lastName) || (lastName.trim() === '')
    //         ? data[0].name.last
    //         : lastName.trim();
    //         res.send(success('User found and has been modified', { data }))
    //     })
    //     .catch(err => {
    //         res.send(error(err))
    //     })
    // }
    // catch(e) {
    //     res.send(error(err))
    // }
});

module.exports = router;
