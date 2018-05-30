// Modules
const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('./mySqlConfig');
const path = require('path'); // path is installed with node.js | DON'T USE 'npm i path'
var bodyParser = require('body-parser');

// Initializing express
const app = express();

// Mysql connection
var connection = mysql.createConnection(mySqlConfig);

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});


// Paths

// Settings static files (It is necessarry to link css/js/img to html files)
app.use(express.static('public'));

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


//Getting list of all records in Dzialy table
app.get('/dzialy/get', (req, res) => {
  connection.query('SELECT * FROM Dzialy', (err, result) => {
    if(err)
      console.log("[MySql] " + err);
    else {
      res.json(result);
    }
  });
});

//Getting list of all records in Stanowiska table
app.get('/stanowiska/get', (req, res) => {
  connection.query('SELECT * FROM Stanowiska', (err, result) => {
    if(err)
      console.log("[MySql] " + err);
    else {
      res.json(result);
    }
  });
});

//Getting list of all records in Pracownicy table
app.get('/pracownicy/get', (req, res) => {
  connection.query('SELECT * FROM Pracownicy', (err, result) => {
    if(err)
      console.log("[MySql] " + err);
    else {
      res.json(result);
    }
  });
});



var port = 8000;
app.listen(port, function() {
  console.log('SZCPP is listening on port', port);
});
// public is dir with our page (frontend)
// everything outside is server (backend)
