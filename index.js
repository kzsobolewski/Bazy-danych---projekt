// Modules
const express = require('express');
const mysql = require('mysql');
const path = require('path'); // path is installed with node.js | DON'T USE 'npm i path'

// Initializing express
const app = express();

// Mysql connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'bazydanych',
  database: "mainDB"
});

connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});



// Paths
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/admin', (req, res) => {
  // Rendering STATIC html file
  // path.join() creates absolute path to file connecting __dirname
  // (path to dir (?)) with path RELATIVE to index.js (this file)
  res.sendFile(path.join(__dirname, './public/admin.html'));
});

app.get('/worker', (req, res) => {
  res.sendFile(path.join(__dirname, './public/worker.html'))
});


var port = 3306 + 9;
app.listen(port, function() {
  console.log('SZCPP is listening on port', port);
});

// public is dir with our page (frontend)
// everything outside is server (backend)
