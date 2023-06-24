-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: tutoria
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alturas`
--

DROP TABLE IF EXISTS `alturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alturas` (
  `id` int(11) NOT NULL,
  `altura` varchar(10) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alturas`
--

LOCK TABLES `alturas` WRITE;
/*!40000 ALTER TABLE `alturas` DISABLE KEYS */;
INSERT INTO `alturas` VALUES (1,'pequena',NULL,NULL),(2,'media',NULL,NULL),(3,'alta',NULL,NULL);
/*!40000 ALTER TABLE `alturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pets` (
  `cod_pet` int(11) NOT NULL AUTO_INCREMENT,
  `nome_pet` varchar(30) DEFAULT NULL,
  `genero_pet` varchar(20) DEFAULT NULL,
  `tutor` int(11) DEFAULT NULL,
  `altura` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`cod_pet`),
  KEY `altura` (`altura`),
  KEY `pets_ibfk_1` (`tutor`),
  CONSTRAINT `pets_ibfk_1` FOREIGN KEY (`tutor`) REFERENCES `tutors` (`id`),
  CONSTRAINT `pets_ibfk_2` FOREIGN KEY (`altura`) REFERENCES `alturas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
INSERT INTO `pets` VALUES (1,'juju','cachorro',1,1,NULL,NULL),(3,'joquinha','tatu',1,2,'2023-06-17 15:15:05','2023-06-17 15:15:05'),(4,'Chico','Macho',5,2,'2023-06-19 01:56:01','2023-06-19 01:56:01'),(5,'Clara','Femea',5,3,'2023-06-19 02:00:27','2023-06-19 02:00:27'),(6,'Fada','Femea',3,1,'2023-06-19 02:01:22','2023-06-19 02:01:22'),(7,'kaiu','macho',4,2,'2023-06-19 21:00:31','2023-06-19 21:00:31'),(8,'kliniuçu','ambidestro',5,1,'2023-06-19 21:15:49','2023-06-19 21:15:49'),(9,'chico','Binario',5,3,'2023-06-19 22:12:31','2023-06-19 22:12:31'),(10,'chumbina','feme',7,2,'2023-06-19 22:31:20','2023-06-19 22:31:20'),(11,'thor','Macho',7,1,'2023-06-20 21:32:31','2023-06-20 21:32:31'),(12,'marcola','macho',9,2,'2023-06-20 22:16:01','2023-06-20 22:16:01');
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutors`
--

DROP TABLE IF EXISTS `tutors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tutors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(20) DEFAULT NULL,
  `email` varchar(35) DEFAULT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `senha` varchar(60) DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutors`
--

LOCK TABLES `tutors` WRITE;
/*!40000 ALTER TABLE `tutors` DISABLE KEYS */;
INSERT INTO `tutors` VALUES (1,'Gustavo','gus@gmail.com','00000000000','jnjn##ss',NULL,NULL),(2,'Geraldo','geraldo@gmail.com','00000e93493','9283','2023-06-17 19:45:09','2023-06-17 15:25:43'),(3,'Marcio','marcio@gmail.com','00000e934d3','lucas123','2023-06-17 19:46:11','2023-06-17 15:26:11'),(4,'jorge amaro','jorge@gmail.com','09898734576','123','2023-06-19 00:15:20','2023-06-19 00:15:20'),(5,'giovanna santiago','giogsantoss@gmail.com','9058908590','12345678','2023-06-19 01:36:54','2023-06-19 01:36:54'),(6,'humberto','humberto@gmail.com','09459384009','1234','2023-06-19 21:01:50','2023-06-19 21:01:50'),(7,'marlon','marlondesouzajlle@hotmail.com','77777777777','marlon123','2023-06-19 22:10:36','2023-06-19 22:10:36'),(8,'Lucas','lucasreidelas@hotmail.com','8848484848','sougay','2023-06-19 22:14:27','2023-06-19 22:14:27'),(9,'GUSTAVO','geraldo@gmail.com','09898734576','123','2023-06-20 21:31:22','2023-06-20 21:31:22'),(10,'Edicarsia','edicarsia@gmail.com','11223344','1335555','2023-06-22 22:07:46','2023-06-22 22:07:46');
/*!40000 ALTER TABLE `tutors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-24 20:49:52
