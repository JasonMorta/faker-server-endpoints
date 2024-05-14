module.exports = (app) => {
    const U = require('../controllers/accountSummaryUsers');
    app.get('/accountSummaryUsers', U.accountSummaryUsers)
}