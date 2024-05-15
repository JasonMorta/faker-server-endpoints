module.exports = (app) => {
    console.log('accountSummaryUsers Route hit🎯')
    const U = require('../controllers/accountSummaryUsers');

    app.get('/accountSummaryUsers', U.accountSummaryUsers)
}