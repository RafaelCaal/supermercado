DROP DATABASE IF EXISTS supermercadoUno;
CREATE DATABASE supermercadoUno;
USE supermercadoUno;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario(
	idusuario INT NOT NULL AUTO_INCREMENT,
    nomusuario VARCHAR(60) NOT NULL UNIQUE,
    passusuario VARCHAR(60) NOT NULL,
    PRIMARY KEY(idusuario)
);

DROP TABLE IF EXISTS proveedor;
CREATE TABLE proveedor(
	idproveedor INT NOT NULL AUTO_INCREMENT,
    nombreproveedor VARCHAR(255) NOT NULL,
    contactoproveedor VARCHAR(255) NOT NULL,
    telefonoproveedor VARCHAR(8) NOT NULL,
    correoproveedor VARCHAR(255) NOT NULL,
    PRIMARY KEY (idproveedor)
);

DROP TABLE IF EXISTS productos;
CREATE TABLE productos(
	idproducto INT NOT NULL AUTO_INCREMENT,
    nombreproducto VARCHAR(255) NOT NULL,
    descripcionproducto VARCHAR(255) NOT NULL,
    precioproducto DECIMAL(7,2) NOT NULL,
    categoria VARCHAR(255) NOT NULL,
    idproveedor INT NOT NULL,
    existencia INT NOT NULL,
    PRIMARY KEY(idproducto),
    FOREIGN KEY(idproveedor) REFERENCES proveedor(idproveedor)
);

DROP TABLE IF EXISTS pedido;
CREATE TABLE pedido(
	idpedido INT NOT NULL AUTO_INCREMENT,
    idproducto INT NOT NULL,
    nombreproducto VARCHAR(255) NOT NULL,
    idproveedor INT NOT NULL,
	nombreproveedor VARCHAR(255) NOT NULL,
    cantidadpedido INT NOT NULL, 
    usuariopedido VARCHAR(255) NOT NULL,
    PRIMARY KEY(idpedido),
    FOREIGN KEY(idproducto) REFERENCES producto(idproducto),
    FOREIGN KEY(idproveedor) REFERENCES proveedor(idproveedor)
);

-- TABLA pruebas
DROP TABLE IF EXISTS pruebas;
CREATE TABLE pruebas(
	idpruebas INT NOT NULL UNIQUE AUTO_INCREMENT,
    datoUno VARCHAR(255),
    datoDos VARCHAR(255)
);
TRUNCATE TABLE pruebas;
INSERT INTO pruebas(datoUno, datoDos)
VALUES('1','2'),('a','b'),('hola','mundo');
SELECT * FROM pruebas;

UPDATE pruebas SET 
	datoUno = 'cambio',
    datoDos = 'otro cambio'
    WHERE idpruebas = '1';
	


