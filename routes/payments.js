const express = require('express');
const mysql = require('mysql');
const mySqlConfig = require('../mySqlConfig');
var connection = mysql.createConnection(mySqlConfig);
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const router = express.Router();

function getWorkedHours( worker_id ){
  var przepracowaneGodziny = 0;
  var naleznosc = 0;
  var czyPoprawne = true;
  connection.query(`SELECT Odbicia.pracownik_id ,
                    We_Wy ,
                    godzina,
                    godz_rozpoczecia_naliczania_oplaty,
                    godz_zakonczenia_naliczania_oplaty,
                    stawka_godz
                    FROM Odbicia
                    INNER JOIN Pracownicy
                    ON Odbicia.pracownik_id = Pracownicy.pracownik_id
                    INNER JOIN Stanowiska
                    ON Pracownicy.stanowisko_id = Stanowiska.stanowisko_id
                    WHERE Odbicia.pracownik_id = ?
                    `
                  , worker_id, (err, result) => {
              if(err){
                console.log("MySql: [Error]", err);
                return;
              }

              // Validation of entries
              console.log("ilosc rekordow: ", result.length);
              if(result.length>=1){
                if(result[0].We_Wy == "Wy")
                  czyPoprawne == false;
                for(var i = 1; i < result.length;i++){
                  if(result[i].We_Wy == result[i-1].We_Wy)
                    czyPoprawne = false;
                }
                console.log("czyPoprawne: ", czyPoprawne);
                if(czyPoprawne){
                    const acceptableInHour =
                            Number(JSON.stringify(result[0].godz_rozpoczecia_naliczania_oplaty).slice(1,3)) +
                            Number(JSON.stringify(result[0].godz_rozpoczecia_naliczania_oplaty).slice(4,6))/60;
                    const acceptableOutHour =
                            Number(JSON.stringify(result[0].godz_zakonczenia_naliczania_oplaty).slice(1,3)) +
                            Number(JSON.stringify(result[0].godz_rozpoczecia_naliczania_oplaty).slice(4,6))/60;
                    console.log("start" , acceptableInHour);
                    console.log("koniec" , acceptableOutHour);


                    for(var i = 0; i < result.length - 1; i += 2){
                        var inHour = Number(JSON.stringify(result[i].godzina).slice(12,14)) +
                                     Number(JSON.stringify(result[i].godzina).slice(15,17))/60;
                        var outHour= Number(JSON.stringify(result[i+1].godzina).slice(12,14)) +
                                     Number(JSON.stringify(result[i+1].godzina).slice(15,17))/60;
                        console.log("inHour: " + inHour);
                        console.log("outHour: " + outHour);
                        if(inHour > outHour)
                          czyPoprawne = false;
                        else {
                          if(inHour < acceptableInHour)
                              inHour = acceptableInHour;
                          if(outHour > acceptableOutHour)
                              outHour = acceptableOutHour;
                          console.log("inHour: +margin " + inHour);
                          console.log("outHour: +margin " + outHour);
                          przepracowaneGodziny += outHour - inHour;
                        } // security case - hours are good
                    } // end of every day loop
                    naleznosc = przepracowaneGodziny * Number(result[0].stawka_godz ) ;
                    //console.log("godziny: "+przepracowaneGodziny);
                    //console.log("kasa: " +naleznosc);
                    przepracowaneGodziny = 99;
                    naleznosc = -100;
                } // end of Validation
            } // end of case when lenght > 2
          });

    return resultObj;
}


router.get('/', (req, res) => {
  var endArray;
  /*
  connection.query(`SELECT pracownik_id,imie,nazwisko, nazwa_stanowiska, nazwa, godzin
                    FROM Pracownicy
                    INNER JOIN Stanowiska
                    ON Pracownicy.stanowisko_id = Stanowiska.stanowisko_id
                    INNER JOIN Dzialy
                    ON Stanowiska.dzial_id = Dzialy.dzial_id
                    `, (err, result) => {
    if(err){
      console.log("[MySql] " + err);
      res.sendStatus(404);
      return;
    }
    */
    connection.query(`SELECT DISTINCT pracownik_id FROM Odbicia`, (err, result) => {
      if (err){
         console.log("[MySql] Error : " + err);
         return;
      }
      for(var i = 0; i < result.length; i++){
          var Obj = getWorkedHours(result[i].pracownik_id);
     }
     console.log(Obj);
    });


    /*
      endArray = result;

      for(var i = 0; i < endArray.length; i++){
        endArray[i].przepracowane_godziny = 133;
      }
      res.json(endArray);
      */
});




module.exports = router;
