module.exports = (app) => {
    console.log('tradingAccounts Route hit🎯')
    const U = require('../controllers/tradingAccounts');

    function checkRequest(req, res, next) {
        if (req.params.count > 1000) {
            res.status(400).send('1k limit')
        } else {
            next()
        }
    }

     // Use query or params
    app.get('/tradingaccounts/:count', checkRequest, U.tradingAccounts) // Use params
    app.get('/tradingaccounts/',checkRequest,U.tradingAccounts) // Use query
}