const CourtController = require('../controllers/court.controller'); //import controller

module.exports = (app) => {
    app.get('/api', CourtController.index);
    app.post('/api/courts', CourtController.createCourt);
}