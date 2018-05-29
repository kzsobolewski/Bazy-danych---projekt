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
