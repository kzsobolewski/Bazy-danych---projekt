-- Wersja alpha (liczy tylko dla jednego dnia)
DELIMITER //
 CREATE or REPLACE PROCEDURE Liczenie_godzin(OUT godziny int) -- Procedura wyliczajaca ilosc przepracowanych godzin dla konkretnego pracownika
   BEGIN
   
   -- DANE PRACOWNIKA ----------------------------------------------------------------------------------
SET @prac_id = 10; -- zmienna podawana na wejsciu
SET @stanowisko_id = (SELECT stanowisko_id FROM `pracownicy` WHERE pracownik_id=@prac_id);

-- PODAWANIE DATY --------------------------------------------------------------------------------
--  set @licznik = 1;
-- set @data = (SELECT godzina FROM `odbicia` WHERE pracownik_id=@prac_id and We_Wy='We');
-- set @data = "2018-05-31";
-- set @data_in = (ADDDATE(@data, INTERVAL @licznik DAY));
-- SELECT @data_in;

SET @wejscie = (SELECT godzina FROM `odbicia` WHERE pracownik_id=@prac_id and We_Wy='We'); -- pobiera i przypisuje date wejscia
SET @wyjscie = (SELECT godzina FROM `odbicia` WHERE pracownik_id=@prac_id and We_Wy='Wy'); -- pobiera i przypisuje date wyjscia
SET @konwert1 = (EXTRACT(Hour FROM @wejscie)); -- pobiera same godziny 
SET @konwert2 = (EXTRACT(Hour FROM @wyjscie)); -- 
SET @liczba_godzin = @konwert2-@konwert1; -- oblicza roznice

Set @start = (SELECT godz_rozpoczecia_naliczania_oplaty From stanowiska WHERE stanowisko_id = @stanowisko_id); 
Set @koniec =(SELECT godz_zakonczenia_naliczania_oplaty From stanowiska WHERE stanowisko_id = @stanowisko_id); 
SELECT IF(@konwert1>@start and @konwert2<@koniec,
          (SELECT @liczba_godzin), -- miesci sie w ramach
          ("Blad odbicia, prosze udac sie do administracji")); -- nie miesci sie w ramach, 
          -- ogolnie zawsze bedzie poprawne bo odbicie bedzie sprawdzane przy odbiciu (na wejsciu funkcji zawsze beda poprawne wartosci)
   Set godziny = @liczba_godzin;
   END //
 DELIMITER ;


-- wywolanie CALL Liczenie_godzin (@godziny);

- SELECT @godziny;
