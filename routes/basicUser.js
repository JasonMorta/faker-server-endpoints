module.exports = (app) => {
    const U = require('../controllers/initialUser');
    app.get('/initialUser', U.initialUser)
}