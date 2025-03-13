const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the database
// const db = mysql.createConnection({
//   // host: 'localhost',
//   // user: 'root',
//   // password: '55226611',
//   // database: 'jsa'
//   host: 'sqljm.loca.lt',
//   port: '3306',
//   user: 'root',
//   password: 'Kingporky@23',
//   database: 'nfs_unbound'
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('MySQL Connected...');
// });



// MySQL connection configuration
const dbConfig = {
  host: 'sqljm.loca.lt',
  port: '3306',
  user: 'root',
  password: 'Kingporky@23',
  database: 'nfs_unbound'

};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  connection.release();
});



// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello SQL!');
});

// Define a route to get data from a table
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM jsa.carlist';

  db.query(sql, (err, results) => {
    if (err) {
      // send table and not json
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});



// Define a route to add a new row to the table
app.post('/data', (req, res) => {
  const { name, model, year, topspeed, prev } = req.query;
  /* 
  This specifies the values to be inserted into the columns.
  The ? placeholders are used to prevent SQL injection and to allow for dynamic values to be inserted.
  These placeholders will be replaced by actual values when the query is executed.
  */
  const sql = 'INSERT INTO jsa.carlist (name, model, year, topspeed, prev) VALUES (?, ?, ?, ?, ?)';
  const values = [name, model, year, topspeed, prev];

  db.query(sql, values, (err, result) => {
    console.log('result', result)
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json(result);
  });
});

// Define a route to update a row in the table
app.put('/data/:id', (req, res) => {
  const { id } = req.params;
  const { name, model, year, topspeed, prev } = req.query;
  const sql = 'UPDATE your_table_name SET name = ?, model = ?, year = ?, topspeed = ?, prev = ? WHERE id = ?';
  const values = [name, model, year, topspeed, prev, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(result);
  });
});

// Define a route to delete a row from the table
app.delete('/data/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM your_table_name WHERE id = ?';
  const values = [id];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Row deleted' });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const cars = [
  // Volume 5
  {
    name: "BMW M2",
    model: "2022",
    year: 2022,
    image: "placeholder_for_image_url",
    hp: 453,
    acceleration: 4.1,
    weight: 3655
  },
  {
    name: "Buick Grand National GNX",
    model: "1987",
    year: 1987,
    image: "placeholder_for_image_url",
    hp: 276,
    acceleration: 4.7,
    weight: 3600
  },
  // Volume 4
  {
    name: "Porsche Taycan Turbo S",
    model: "2022",
    year: 2022,
    image: "placeholder_for_image_url",
    hp: 750,
    acceleration: 2.6,
    weight: 5141
  },
  {
    name: "Porsche 911 Legendary Custom",
    model: "Custom",
    year: "N/A",
    image: "placeholder_for_image_url",
    hp: 500,
    acceleration: 3.5,
    weight: 3200
  },
  // Volume 3
  {
    name: "DMC Delorean",
    model: "1981",
    year: 1981,
    image: "placeholder_for_image_url",
    hp: 130,
    acceleration: 10.5,
    weight: 2712
  },
  {
    name: "Dodge Viper Legendary Custom",
    model: "2014",
    year: 2014,
    image: "placeholder_for_image_url",
    hp: 645,
    acceleration: 3.4,
    weight: 3297
  },
  // Volume 2
  {
    name: "Lotus Emira Balmain Edition",
    model: "2021",
    year: 2021,
    image: "placeholder_for_image_url",
    hp: 400,
    acceleration: 4.3,
    weight: 3100
  },
  {
    name: "Nissan Fairlady ZG Epic Custom",
    model: "1971",
    year: 1971,
    image: "placeholder_for_image_url",
    hp: 160,
    acceleration: 8.8,
    weight: 2400
  },
  {
    name: "Mercedes-Maybach S 680",
    model: "2021",
    year: 2021,
    image: "placeholder_for_image_url",
    hp: 621,
    acceleration: 4.4,
    weight: 5600
  },
  // Additional Cars
  {
    name: "Acura NSX",
    model: "2017",
    year: 2017,
    image: "placeholder_for_image_url",
    hp: 573,
    acceleration: 3.1,
    weight: 3803
  },
  {
    name: "Acura RSX-S",
    model: "2004",
    year: 2004,
    image: "placeholder_for_image_url",
    hp: 201,
    acceleration: 6.4,
    weight: 2800
  },
  {
    name: "Alfa Romeo Giulia Quadrifoglio",
    model: "2016",
    year: 2016,
    image: "placeholder_for_image_url",
    hp: 505,
    acceleration: 3.8,
    weight: 3500
  },
  {
    name: "Aston Martin DB5",
    model: "1964",
    year: 1964,
    image: "placeholder_for_image_url",
    hp: 282,
    acceleration: 8.1,
    weight: 3285
  },
  {
    name: "Bugatti Chiron Sport",
    model: "2017",
    year: 2017,
    image: "placeholder_for_image_url",
    hp: 1479,
    acceleration: 2.4,
    weight: 4360
  },
  {
    name: "Chevrolet Corvette Stingray",
    model: "2020",
    year: 2020,
    image: "placeholder_for_image_url",
    hp: 495,
    acceleration: 3.0,
    weight: 3366
  },
  {
    name: "Ford Mustang GT",
    model: "2015",
    year: 2015,
    image: "placeholder_for_image_url",
    hp: 435,
    acceleration: 4.3,
    weight: 3705
  },
  // Continue adding the rest of the cars...
];
