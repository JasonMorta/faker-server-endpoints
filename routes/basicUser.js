module.exports = (app) => {
    const U = require('../controllers/basicUser');
    console.log('basicUser.js')
    app.get('/', U.basicUser)
}