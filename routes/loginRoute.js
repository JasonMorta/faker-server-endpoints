module.exports = (app) => {
    const U = require('../controllers/loginController');
    console.log('loginRoute.js')
    app.post('/login', U.loginController)
}