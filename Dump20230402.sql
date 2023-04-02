CREATE DATABASE  IF NOT EXISTS `supermercadouno` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `supermercadouno`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: supermercadouno
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `idpedido` int NOT NULL AUTO_INCREMENT,
  `idproducto` int NOT NULL,
  `nombreproducto` varchar(255) NOT NULL,
  `idproveedor` int NOT NULL,
  `nombreproveedor` varchar(255) NOT NULL,
  `cantidadpedido` int NOT NULL,
  `usuariopedido` varchar(255) NOT NULL,
  PRIMARY KEY (`idpedido`),
  KEY `idproducto` (`idproducto`),
  KEY `idproveedor` (`idproveedor`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`idproducto`) REFERENCES `producto` (`idproducto`),
  CONSTRAINT `pedido_ibfk_2` FOREIGN KEY (`idproveedor`) REFERENCES `proveedor` (`idproveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombreproducto` varchar(255) NOT NULL,
  `descripcionproducto` varchar(255) NOT NULL,
  `precioproducto` decimal(7,2) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `idproveedor` int NOT NULL,
  `existencia` int NOT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `idproveedor` (`idproveedor`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`idproveedor`) REFERENCES `proveedor` (`idproveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Coca cola Lata 8 oz','Coca Cola Sabor Original',6.80,'Bebidas Carbonatadas',1,400),(2,'Raptor 12 oz','Raptor Lata Mediana',9.80,'Bebidas Energeticas',2,200),(3,'Jugo de Naranja 1L','Jugo natural naranja c/pulpa',14.10,'Bebidas naturales',3,100),(4,'Fideos Rabioli 50g','Pasta Italiana Rabioli',4.60,'Pastas',4,200),(5,'1L Azucar Morena','Azucar Cana Real',3.90,'Granos Basicos',5,500),(6,'Cerveza Gallo Lata 10oz','Cerveza Lata',7.60,'Bebidas Alcoholicas',6,700),(7,'Tortrix Limon 20g','Tortrix Grande',11.20,'Frituras',7,400),(8,'Frijoles Lata 15g','Frijoles Volteamos Negros',18.90,'Comida enlatada',8,100),(9,'Frijoles Lata 7g','Frijoles parados con chorizo',7.00,'Comida enlatada',9,200);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedor` (
  `idproveedor` int NOT NULL AUTO_INCREMENT,
  `nombreproveedor` varchar(255) NOT NULL,
  `contactoproveedor` varchar(255) NOT NULL,
  `telefonoproveedor` varchar(8) NOT NULL,
  `correoproveedor` varchar(255) NOT NULL,
  PRIMARY KEY (`idproveedor`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
INSERT INTO `proveedor` VALUES (1,'FEMSA','Ana Rosales','54890987','anarosales@femsa.com'),(2,'Pepsi Centroamerica','Josue Gomez','46573829','josuegomez@pepsica.com'),(3,'Rabinal','Patricia Lima','44567898','patricialima@rabinal.com'),(4,'Pastas INA','Luis Rojas','44676555','luisrojas@ina.com'),(5,'Azucar Cana Real','FLor Morales','44090987','flormorales@canareal.com'),(6,'Cerveceria Centroamericana','Pedro Martinez','44010102','pedromartinez@cerveceriaca.com'),(7,'Fillers','Ruth Cordon','4112987','ruthcordon@fillers.com'),(8,'Ducal S,A.','Fernando Torres','5009876','fertorres@ducal.com'),(9,'Del Monte S,A.','Maria Pinto','41123432','mariapinto@delmonto.com');
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pruebas`
--

DROP TABLE IF EXISTS `pruebas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pruebas` (
  `idpruebas` int NOT NULL AUTO_INCREMENT,
  `datoUno` varchar(255) DEFAULT NULL,
  `datoDos` varchar(255) DEFAULT NULL,
  UNIQUE KEY `idpruebas` (`idpruebas`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pruebas`
--

LOCK TABLES `pruebas` WRITE;
/*!40000 ALTER TABLE `pruebas` DISABLE KEYS */;
INSERT INTO `pruebas` VALUES (1,'cambio','otro cambio'),(2,'a','b'),(3,'hola','mundo');
/*!40000 ALTER TABLE `pruebas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nomusuario` varchar(60) NOT NULL,
  `passusuario` varchar(60) NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE KEY `nomusuario` (`nomusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'tds','$2b$10$8eC5neaeQ9xgSWu0Ieqziu7ymJgJgq4OulHpEtfSOiW9ECmNVMsJi');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-02 17:06:22
