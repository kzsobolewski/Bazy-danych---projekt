const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('./mySqlConfig');

var connection = mysql.createConnection(mySqlConfig);

connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});


var sql = {
  nazwa: 'Stocznia'
};

connection.query('insert into Dzialy set ?', Stocznia, function (err, result) {
  if(err) {
    console.error(err);
    return;
  }
  console.error(result);
});


var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  // create user in req.body
})
