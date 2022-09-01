const {plannets} = require('../../models/plannets.model')

function getPlannets(req,res) {
    return res.status(200).json(plannets)
}

module.exports = getPlannets
    