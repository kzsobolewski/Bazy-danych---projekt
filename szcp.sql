-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: SZCP
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Dzialy`
--

DROP TABLE IF EXISTS `Dzialy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Dzialy` (
  `dzial_id` int(11) NOT NULL AUTO_INCREMENT,
  `nazwa` varchar(30) NOT NULL,
  PRIMARY KEY (`dzial_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dzialy`
--

LOCK TABLES `Dzialy` WRITE;
/*!40000 ALTER TABLE `Dzialy` DISABLE KEYS */;
INSERT INTO `Dzialy` VALUES (1,'Logistyka'),(2,'Sprzedaz'),(3,'Produkcja');
/*!40000 ALTER TABLE `Dzialy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Odbicia`
--

DROP TABLE IF EXISTS `Odbicia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Odbicia` (
  `odbicie_id` int(11) NOT NULL AUTO_INCREMENT,
  `godzina` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `We_Wy` varchar(2) NOT NULL,
  `pracownik_id` int(11) NOT NULL,
  PRIMARY KEY (`odbicie_id`),
  KEY `Odbica_Pracownicy` (`pracownik_id`),
  CONSTRAINT `Odbica_Pracownicy` FOREIGN KEY (`pracownik_id`) REFERENCES `Pracownicy` (`pracownik_id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Odbicia`
--

LOCK TABLES `Odbicia` WRITE;
/*!40000 ALTER TABLE `Odbicia` DISABLE KEYS */;
INSERT INTO `Odbicia` VALUES (24,'2018-06-04 17:01:43','Wy',29),(25,'2018-06-04 17:02:05','Wy',20),(33,'2018-06-04 17:08:12','We',5),(34,'2018-06-04 17:08:15','Wy',29),(36,'2018-06-04 17:08:19','Wy',5),(37,'2018-06-04 17:08:21','We',5),(38,'2018-06-04 17:08:22','Wy',5),(39,'2018-06-04 17:08:23','Wy',5),(40,'2018-06-04 17:08:25','Wy',5),(41,'2018-06-04 17:08:27','We',8),(42,'2018-06-04 17:08:28','Wy',5),(44,'2018-06-04 17:08:58','We',29),(46,'2018-06-04 17:09:02','We',21),(47,'2018-06-05 14:47:39','We',25),(48,'2018-06-05 14:47:44','Wy',25),(49,'2018-06-05 14:47:46','We',25),(50,'2018-06-05 14:47:47','Wy',25),(51,'2018-06-05 14:47:47','We',25),(52,'2018-06-05 14:47:48','Wy',25),(53,'2018-06-05 14:47:48','We',25),(54,'2018-06-05 14:47:49','Wy',25),(55,'2018-06-05 14:47:50','We',25),(56,'2018-06-05 14:47:50','Wy',25),(74,'2018-06-05 20:04:15','We',20),(81,'2018-06-05 20:06:44','We',21),(82,'2018-06-05 20:06:47','Wy',21),(83,'2018-06-05 20:06:48','We',21),(84,'2018-06-05 20:06:49','Wy',21),(85,'2018-06-05 20:47:08','We',33),(86,'2018-06-05 20:47:09','Wy',33),(87,'2018-06-05 20:47:10','We',33),(88,'2018-06-05 20:47:11','Wy',33),(89,'2018-06-05 20:47:11','We',33),(90,'2018-06-05 20:47:12','Wy',33),(92,'2018-06-06 15:53:31','We',34),(93,'2018-06-06 21:52:43','Wy',34);
/*!40000 ALTER TABLE `Odbicia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pracownicy`
--

DROP TABLE IF EXISTS `Pracownicy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pracownicy` (
  `pracownik_id` int(11) NOT NULL AUTO_INCREMENT,
  `imie` varchar(30) NOT NULL,
  `nazwisko` varchar(30) NOT NULL,
  `data_urodzenia` date NOT NULL,
  `data_dodania` date NOT NULL,
  `plec` char(1) NOT NULL,
  `stanowisko_id` int(11) NOT NULL,
  PRIMARY KEY (`pracownik_id`),
  KEY `Pracownicy_Stanowisko` (`stanowisko_id`),
  CONSTRAINT `Pracownicy_Stanowisko` FOREIGN KEY (`stanowisko_id`) REFERENCES `Stanowiska` (`stanowisko_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pracownicy`
--

LOCK TABLES `Pracownicy` WRITE;
/*!40000 ALTER TABLE `Pracownicy` DISABLE KEYS */;
INSERT INTO `Pracownicy` VALUES (5,'Bartlomiej','Babuski','1996-12-30','2011-04-14','m',4),(8,'Monika','Wiernacka','2000-08-01','2010-07-10','k',4),(9,'Roksana','Roniek','2000-01-23','2013-10-05','k',4),(10,'Wiktoria','Mikulska','1999-03-08','2012-11-14','k',5),(19,'Bartlomiej','Babuski','1996-12-30','2011-04-14','m',4),(20,'Czarek','Cebulski','1976-05-10','2010-01-05','m',2),(21,'Stanislaw','Moniuszko','1967-10-13','2011-04-11','m',2),(22,'Monika','Wiernacka','2000-08-01','2010-07-10','k',4),(23,'Roksana','Roniek','2000-01-23','2013-10-05','k',4),(24,'Wiktoria','Mikulska','1999-03-08','2012-11-14','k',5),(25,'Adam','Mickiewicz','1976-06-25','2011-04-19','m',6),(29,'Czeslaw','Milosz','1980-04-21','2011-02-13','m',9),(33,'t432q',' 3','2018-05-28','2018-06-06','m',4),(34,'Wszedlem o 16','Wyjde okolo 21','2018-05-28','2018-06-07','m',2),(35,'Test przed 10-','423','2018-06-11','2018-06-07','m',5);
/*!40000 ALTER TABLE `Pracownicy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stanowiska`
--

DROP TABLE IF EXISTS `Stanowiska`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Stanowiska` (
  `stanowisko_id` int(11) NOT NULL AUTO_INCREMENT,
  `nazwa_stanowiska` varchar(30) NOT NULL,
  `stawka_godz` double(5,2) NOT NULL,
  `godz_rozpoczecia_naliczania_oplaty` time NOT NULL,
  `godz_zakonczenia_naliczania_oplaty` time NOT NULL,
  `dzial_id` int(11) NOT NULL,
  PRIMARY KEY (`stanowisko_id`),
  KEY `Stanowisko_Dzial` (`dzial_id`),
  CONSTRAINT `Stanowisko_Dzial` FOREIGN KEY (`dzial_id`) REFERENCES `Dzialy` (`dzial_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stanowiska`
--

LOCK TABLES `Stanowiska` WRITE;
/*!40000 ALTER TABLE `Stanowiska` DISABLE KEYS */;
INSERT INTO `Stanowiska` VALUES (1,'Specjalista do spraw logistyki',20.00,'08:00:00','22:00:00',3),(2,'KIEROWCA',15.00,'03:00:00','24:00:00',1),(3,'MECHANIK SAMOCHODOWY',10.00,'07:00:00','17:00:00',1),(4,'SPRZEDAWCA',13.00,'07:00:00','17:00:00',2),(5,'KONSULTANT',13.00,'07:00:00','18:00:00',2),(6,'TLUMACZ',19.00,'00:00:00','08:00:00',2),(7,'PRACOWNIK FIZYCZNY',10.00,'07:00:00','17:00:00',3),(8,'KIEROWNIK PRODUKCJI',15.00,'07:00:00','17:00:00',3),(9,'Monter',21.00,'06:30:00','23:00:00',1);
/*!40000 ALTER TABLE `Stanowiska` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Wynagrodzenie`
--

DROP TABLE IF EXISTS `Wynagrodzenie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Wynagrodzenie` (
  `wynagrodzenia_id` int(11) NOT NULL AUTO_INCREMENT,
  `pracownik_id` int(11) NOT NULL,
  `wyplata` double(11,2) NOT NULL,
  PRIMARY KEY (`wynagrodzenia_id`),
  KEY `Wynagrodzenie_Pracownicy` (`pracownik_id`),
  CONSTRAINT `Wynagrodzenie_Pracownicy` FOREIGN KEY (`pracownik_id`) REFERENCES `Pracownicy` (`pracownik_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Wynagrodzenie`
--

LOCK TABLES `Wynagrodzenie` WRITE;
/*!40000 ALTER TABLE `Wynagrodzenie` DISABLE KEYS */;
/*!40000 ALTER TABLE `Wynagrodzenie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'Zenek','krzyzacy','foo bar');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-06 21:55:33
