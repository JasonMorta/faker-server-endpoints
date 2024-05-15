module.exports = (app) => {
    const U = require('../controllers/initialUser');
    console.log('initialUser.js')
    app.get('/initialUser', U.initialUser)
}