//Use JWT to get the user's information
const jwt = require('jsonwebtoken');

//Middleware to authenticate the user
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'secret');
        next();

    } catch (error) {
        res.status(401).send({ error: 'Please authenticate' });
    }
}

module.exports = auth;