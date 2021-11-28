const { success, error } = require('../utils/responses.js');

const mainRoute = (req, res, next) => {
    res.render('index', { title: "Espresso" });
}

const demoRoute = (req, res, next) => {
    res.status(200).send({ message: 'Hello' });
}

module.exports = {
    mainRoute,
    demoRoute
}