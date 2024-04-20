//import in the court model
const Court = require('../models/court.model');

module.exports = {
    //test backend connection
    index: (request, response) => {
        response.json({
            message: 'Hello World'
        });
    },

    //Create - uses the court module to create a new court in the collection
    createCourt: (req, res) => {
        Court.create(req.body)
            .then(newCourt => res.json(newCourt))
            .catch(err => response.json(err))
    }
}