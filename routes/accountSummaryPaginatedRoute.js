module.exports = (app) => {
    console.log('accountSummaryPaginated Route hit🎯')
    const U = require('../controllers/accountSummaryPaginated');

    app.get('/accountSummaryPaginatedRoute', U.accountSummaryPaginated)
}