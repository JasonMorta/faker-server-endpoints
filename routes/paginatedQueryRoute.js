module.exports = (app) => {
    const U = require('../controllers/paginatedQueryController');
    console.log('paginatedQueryRoute.js 🎯')
    app.get('/paginated', U.paginated)
}