module.exports = (app) => {
    const U = require('../controllers/hardcodedUsers');
    console.log('hardUsersRoute.js')
    app.get('/hardUsers', U.hardUsers)
}