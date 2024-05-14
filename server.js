const express = require('express')
const app = express()
require('dotenv').config()// allows us to use .env file
const cors = require("cors"); // allows cross-site HTTP request
const bodyParser = require('body-parser');// allows JSON transfers between client and server.
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded. Extended means that the object can contain nested objects.
app.use(bodyParser.json())
const corsOptions = { origin: "*" };
app.use(cors(corsOptions));
const port = process.env.PORT || 3003
/* ===========================DB Connection============================= */

//* Connect to DB
// const URL = ''
// const dbConnection = mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
// dbConnection.then(() => {
//     console.log('Connected to MongoDB')
// }).catch((err) => {
//     console.log('Error while connecting to MongoDB', err)
//     mongoose.disconnect()
// })

/* ===========================API Routes=============================== */
app.get('/', (req, res) => {
    res.send('Hello World!')
})

require('./routes/basicUser')(app);
require('./routes/accountSummaryUsers')(app);

/* ===========================Port Listener============================= */
app.listen(port, () => console.log(`Listening on port port!`))


/* npm installs
npm install express mongoose dotenv nodemon body-parser cors
*/

