
INSERT INTO Dzialy (nazwa)
VALUES ('Zarzadzanie');


INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'Dyrektor',
   42.00,
  '8:00:00',
  '22:00:00',
   1 );



INSERT INTO Pracownicy (
 imie,
 nazwisko ,
 data_urodzenia,
 data_dodania ,
 plec ,
 stanowisko_id )
VALUES (
 'Krzysztof',
 'Sobolewski',
 '1996-04-30',
 '2018-05-29',
 'm',
 1 );
