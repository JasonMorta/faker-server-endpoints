module.exports = (app) => {
    console.log('accountSummaryStream Route hit🎯')
    const U = require('../controllers/accountSummaryStream');

    app.get('/accountSummaryStream', U.accountSummaryStream)
}