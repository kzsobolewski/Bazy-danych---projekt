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
router.get('/depts', (req, res) => {
  connection.query('SELECT * FROM Dzialy', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
      res.status(404);
    }else {
      res.json(result);
      res.status(200);
    }
  });
});

//Getting list of all records in Stanowiska table
router.get('/jobs', (req, res) => {
  connection.query('SELECT * FROM Stanowiska', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
      res.status(404);
    }else {
      res.json(result);
      res.status(200);
    }
  });
});
/*
router.post('/jobs',jsonParser, (req, res) => {
  console.log(req.body.ids.join());
  connection.query("SELECT nazwa_stanowiska FROM Stanowiska WHERE stanowisko_id IN (?)" , req.body.ids.join(), (err, result) => {
    if(err){
      console.log("[MySql] " + err);
      res.status(404);
    }else {
      res.json(result);
      res.status(200);
    }
  });
});
*/
//Getting list of all records in Pracownicy table
router.get('/workers', (req, res) => {
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

router.post('/workers', jsonParser,(req, res) => {
  if (!req.body){
     res.status(204);
     return;
   }
  let data = Object.assign(req.body,{data_dodania: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 1) });
  connection.query('insert into Pracownicy set ?', req.body, (err, result) => {
  if(err){
    console.error("[MySql]" + err);
    res.sendStatus(409);
    return;
  }
  console.log("[MySql] Worker record added");
  console.log(result);
  res.sendStatus(201);
  });
});


router.post('/jobs', jsonParser,(req, res) => {
  if (!req.body){
      res.sendStatus(204);
      return;
   }
  connection.query('insert into Stanowiska set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Job record added");
    console.log(result);
    res.sendStatus(201);
  });
});


router.post('/depts', jsonParser,(req, res) => {
  if (!req.body){
      res.sendStatus(204);
      return;
   }
  connection.query('insert into Dzialy set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Departament record added");
    console.log(result);
    res.sendStatus(201);
    return;
  });
});



/////////////////////////////////////////

////       DELETE METHODS            ////

/////////////////////////////////////////

router.delete('/depts/:id', (req, res) =>{
  connection.query('DELETE FROM Dzialy WHERE dzial_id = ?',req.params.id , (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Deleted");
    console.log(result);
    res.sendStatus(200);
  });
});


router.delete('/workers/:id', (req, res) =>{
  connection.query('DELETE FROM Pracownicy WHERE pracownik_id = ?',req.params.id , (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Deleted");
    console.log(result);
    res.sendStatus(200);
  });
});


router.delete('/jobs/:id', (req, res) =>{
  connection.query('DELETE FROM Stanowiska WHERE stanowisko_id = ?',req.params.id , (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Deleted");
    console.log(result);
    res.sendStatus(200);
  });
});




module.exports = router;
