module.exports = (app) => {
    const U = require('../controllers/initialUser');
    console.log('initialUser.js')

    // Middleware
    const checkRequest = (req, res, next) => {
        const { email, password } = req.headers;

        console.log('checkRequest =====');
        console.log('req.headers', req.headers);

        // Check if the email and password match
        if (email === "jasonmortadev@gmail.com" && password === "mortadev") {
            next(); // Credentials are correct, proceed to the next middleware/route handler
        } else if (email !== "jasonmortadev@gmail.com" || password !== "mortadev") {
            res.status(401).json({ error: 'Incorrect login details' }); // Incorrect login details
        } else {
            res.status(500).json({ error: 'An unexpected error occurred' }); // Custom message for any other error
        }
    }

    app.get('/initialUser', checkRequest, U.initialUser)
}
