DROP USER IF EXISTS 'conexion_pruebas'@'localhost';
CREATE USER 'conexion_pruebas'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON supermercadoUno.* TO 'conexion_pruebas'@'localhost';

SHOW CREATE USER 'conexion_pruebas'@'localhost';
SHOW GRANTS FOR 'conexion_pruebas'@'localhost';