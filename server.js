const express = require('express')
const app = express()

const cors = require("cors"); // allows cross-site HTTP request
const bodyParser = require('body-parser');// allows JSON transfers between client and server.

app.use(bodyParser.urlencoded({ extended: false }))// parse application/x-www-form-urlencoded. Extended means that the object can contain nested objects.
app.use(bodyParser.json())
const corsOptions = { origin: "*" };
app.use(cors(corsOptions));

/* ===========================DB Connection============================= */
console.log('Starting server...')
//* Connect to DB


require('./routes/basicUser')(app);
require('./routes/accountSummaryUsers')(app);
//require('./routes/accountSummaryPaginatedRoute')(app);
require('./routes/accountSummaryStream')(app);
require('./routes/update_user')(app);
require('./routes/hardUsersRoute')(app);
require('./routes/superheroes')(app);
require('./routes/superVillainsRoute')(app);
require('./routes/paginatedQueryRoute')(app);

/* ===========================Port Listener============================= */
app.listen(process.env.PORT || 3003, () => {
    console.log(`Listening on port port 3003!`)
})


/* npm installs
npm install express mongoose dotenv nodemon body-parser cors
*/

