module.exports = (app) => {
    const U = require('../controllers/update_user_controller');
    console.log('updateuser.js')
    app.post('/updateuser', U.update_user)
}