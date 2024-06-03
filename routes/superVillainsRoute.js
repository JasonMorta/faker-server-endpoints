module.exports = (app) => {
    const U = require('../controllers/superVillainsController');
    console.log('superVillainsController.js 🎯')
    app.get('/supervillains', U.superVillains)
}