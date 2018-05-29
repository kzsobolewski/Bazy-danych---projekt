// Modules
const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('./mySqlConfig');
const path = require('path'); // path is installed with node.js | DON'T USE 'npm i path'

// Initializing express
const app = express();

// Mysql connection
var connection = mysql.createConnection(mySqlConfig);


connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});


/*
var article = {
  author: 'SampleAuthor',
  title: 'dupa',
  body: 'foo bar'
};


var query = connection.query('insert into test set ?', article, function (err, result) {
  if(err) {
    console.error(err);
    return;
  }
  console.error(result);
});

var myResult;

connection.query('SELECT * FROM test', function(err,result) {
  if (err){
    console.error(err);
    return;
  }
    myResult = result;
} )
*/
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

app.get('/worker/get', (req, res) => {
  connection.query('SELECT * FROM test', (err, result) => {
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
