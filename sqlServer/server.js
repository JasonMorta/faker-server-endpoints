const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '55226611',
  database: 'jsa'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
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
  const { name, model, year, topspeed, prev } = req.body;
  const sql = 'UPDATE your_table_name SET name = ?, model = ?, year = ?, topspeed = ?, prev = ? WHERE id = ?';
  const values = [name, model, year, topspeed, prev, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, ...req.body });
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
