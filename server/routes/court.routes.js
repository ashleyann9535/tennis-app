const CourtController = require('../controllers/court.controller'); //import controller

module.exports = (app) => {
    app.get('/api', CourtController.index);
    app.get('/api/courts', CourtController.getCourts);
    app.post('/api/courts', CourtController.createCourt);
}