module.exports = (app) => {
    const U = require('../controllers/loginController');
    console.log('loginRoute.js 🎯')
    app.get('/login', U.loginController)
}