const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

// MySQL connection configuration
const dbConfig = {
  host: 'https://sqljm.loca.lt',
  port: 3306,
  user: 'root',
  password: 'Kingporky@23',
  database: 'nfs_unbound',
  connectTimeout: 60000 // 60 seconds
  
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

// Example route to test the database connection
app.get('/', (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) {
      return res.status(500).send('Error querying the database');
    }
    res.send('Database connection successful. Solution: ' + results[0].solution);
  });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
