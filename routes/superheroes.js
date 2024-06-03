module.exports = (app) => {
    const U = require('../controllers/superHeroesController');
    console.log('superHeroes.js 🎯')
    app.get('/superheroes', U.superHeroes)
}