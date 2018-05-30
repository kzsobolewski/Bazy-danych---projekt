INSERT INTO Dzialy (nazwa)
VALUES ('LOGISTYKA'); -- id_1

INSERT INTO Dzialy (nazwa)
VALUES ('SPRZEDAZ');  -- id_2

INSERT INTO Dzialy (nazwa)
VALUES ('PRODUKCJA');  -- id_3

-- LOGISTYKA --------------------
INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'SPECJALISTA DO SPRAW LOGISTYKI',
   20.00,
  '8:00:00',
  '22:00:00',
   1 );

INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'KIEROWCA',
   15.00,
  '3:00:00',
  '24:00:00',
   1 );

INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'MECHANIK SAMOCHODOWY',
   10.00,
  '7:00:00',
  '17:00:00',
   1 );

-- SPRZEDAZ--------------------
INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'SPRZEDAWCA',
   13.00,
  '7:00:00',
  '17:00:00',
   2 );

INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'KONSULTANT',
   13.00,
  '7:00:00',
  '17:00:00',
   2 );

INSERT INTO Stanowiska (
  nazwa_stanowiska,
  stawka_godz,
  godz_rozpoczecia_naliczania_oplaty,
  godz_zakonczenia_naliczania_oplaty,
  dzial_id )
VALUES (
  'TLUMACZ',
   19.00,
  '7:00:00',
  '17:00:00',
   2 );
