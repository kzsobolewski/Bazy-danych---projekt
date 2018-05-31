const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('../mySqlConfig');
var bodyParser = require('body-parser');

// Mysql connection
var connection = mysql.createConnection(mySqlConfig);

// create application/json parser
var jsonParser = bodyParser.json();

const router = express.Router();

connection.connect(function(err){
  if (err) throw err;
  console.log("[MySql] Connected");
});





/////////////////////////////////////////

////         GET METHODS            ////

/////////////////////////////////////////

//Getting list of all records from dept
router.get('/depts/get', (req, res) => {
  connection.query('SELECT * FROM Dzialy', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
//      return res.sendStatus(404);
    }else {
      res.json(result);
//      return res.sendStatus(200);
    }
  });
});

//Getting list of all records in Stanowiska table
router.get('/jobs/get', (req, res) => {
  connection.query('SELECT * FROM Stanowiska', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
  //    return res.sendStatus(404);
    }else {
      res.json(result);
//      return res.sendStatus(200);
    }
  });
});

//Getting list of all records in Pracownicy table
router.get('/workers/get', (req, res) => {
  connection.query('SELECT * FROM Pracownicy', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
    //  return res.sendStatus(404);
    }else {
      res.json(result);
    //  res.sendStatus(200);
  }
  });
});






/////////////////////////////////////////

////         POST METHODS            ////

/////////////////////////////////////////

router.post('/workers/add', jsonParser,(req, res) => {
  if (!req.body){
  //   return res.sendStatus(204);
   }
  connection.query('insert into Pracownicy set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
//return res.sendStatus(409);

    }
    console.log("[MySql] Worker record added");
    console.log(result);
  //  return res.sendStatus(201);
  });
});


router.post('/jobs/add', jsonParser,(req, res) => {
  if (!req.body){
  //   return res.sendStatus(204);
   }
  connection.query('insert into Stanowiska set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
  //    return res.sendStatus(409);
    }
    console.log("[MySql] Job record added");
    console.log(result);
  //  return res.sendStatus(201);

  });
});


router.post('/depts/add', jsonParser,(req, res) => {
  if (!req.body){
  //   return res.sendStatus(204);
   }
  connection.query('insert into Dzialy set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
  //    return res.sendStatus(409);
    }
    console.log("[MySql] Departament record added");
    console.log(result);
//    return res.sendStatus(201);
  });
});



/////////////////////////////////////////

////       DELETE METHODS            ////

/////////////////////////////////////////

router.delete('/depts/delete/:id',jsonParser, (req, res) =>{
  connection.query('DELETE FROM Dzialy WHERE dzial_id = ?', (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
    }
    console.log("[MySql] Deleted");
    console.log(result);
  });
});

module.exports = router;
