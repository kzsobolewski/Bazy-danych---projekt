const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('../mySqlConfig');
var connection = mysql.createConnection(mySqlConfig);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const router = express.Router();


router.get('/', (req, res) => {
  connection.query('SELECT * FROM Odbicia', (err, result) => {
    if(err){
      console.log("[MySql] " + err);
      res.sendStatus(404);
    }else {
      res.status(200);
      res.json(result);
    }
  });
});


router.post('/', jsonParser,(req, res) => {
  if (!req.body){
      res.sendStatus(400);
      return;
   }
  var datetime = new Date();
  datetime.setHours(datetime.getHours()+2);
  Object.assign( req.body, {godzina : datetime});
  connection.query('insert into Odbicia set ?', req.body, (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Entry record added");
    res.sendStatus(201);
  });
});



router.delete('/:id', (req, res) =>{
  connection.query('DELETE FROM Odbicia WHERE odbicie_id = ?',req.params.id , (err, result) => {
    if(err) {
      console.error("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Deleted");
    res.sendStatus(200);
  });
});

router.put('/:id',jsonParser , (req, res) =>{
  if(!req.body){
    res.sendStatus(400);
    return;
  }
  connection.query('UPDATE Odbicia SET ? WHERE odbicie_id = ?', [req.body, req.params.id] , (err, result) => {
    if(err){
      console.log("[MySql]" + err);
      res.sendStatus(409);
      return;
    }
    console.log("[MySql] Entry edited");
    res.sendStatus(200);
 });
});

module.exports = router;
