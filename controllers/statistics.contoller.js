const statisticService = require('../services/statistics.service');
const { success, error } = require('../utils/responses.js');

const saveStatistic = async (req, res) => {

    // Validation

    const { params, method } = req;

    if (!params && !method) {
        res.send(error('Error occurred with db interaction'));
    }

    try {
        const result = await statisticService.saveStatisic(params, method);

        if (!result) {
            console.log(result);
            res.send(success('Information has been updated', { result }));
        }
    } catch(err) {
        console.log(err);
        res.send(error('Error occurred with db interaction'));
    }

}

module.exports = {
    saveStatistic
}