const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const mySqlConfig = require('./mySqlConfig');
var connection = mysql.createConnection(mySqlConfig);



connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});


// Using api router
app.use('/api', require('./routes/api') );


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



app.listen(process.env.port || 8000, function() {
  console.log('SZCPP is listening on port 8000');
});
