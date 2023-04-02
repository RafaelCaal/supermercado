USE supermercadouno;
TRUNCATE TABLE usuario;

-- registramos el nombre de usuario y password
TRUNCATE usuario;
INSERT INTO usuario(nomusuario, passusuario) 
VALUES ('tds', '$2b$10$8eC5neaeQ9xgSWu0Ieqziu7ymJgJgq4OulHpEtfSOiW9ECmNVMsJi');
SELECT * FROM usuario;
 
TRUNCATE proveedor;
INSERT INTO proveedor(nombreproveedor, contactoproveedor, telefonoproveedor, correoproveedor)
VALUES('FEMSA','Ana Rosales','54890987','anarosales@femsa.com'),
	  ('Pepsi Centroamerica','Josue Gomez','46573829','josuegomez@pepsica.com'),
      ('Rabinal','Patricia Lima','44567898','patricialima@rabinal.com'),
      ('Pastas INA','Luis Rojas','44676555','luisrojas@ina.com'),
      ('Azucar Cana Real','FLor Morales','44090987','flormorales@canareal.com'),
      ('Cerveceria Centroamericana','Pedro Martinez','44010102','pedromartinez@cerveceriaca.com'),
      ('Fillers','Ruth Cordon','4112987','ruthcordon@fillers.com'),
      ('Ducal S,A.','Fernando Torres','5009876','fertorres@ducal.com'),
      ('Del Monte S,A.','Maria Pinto','41123432','mariapinto@delmonto.com');
SELECT * FROM proveedor;

TRUNCATE productos;
INSERT INTO productos(nombreproducto, descripcionproducto, precioproducto, categoria, idproveedor, existencia)    
VALUES ('Coca cola Lata 8 oz','Coca Cola Sabor Original','6.80','Bebidas Carbonatadas','1','400'),
	   ('Raptor 12 oz','Raptor Lata Mediana','9.80','Bebidas Energeticas','2','200'),
       ('Jugo de Naranja 1L','Jugo natural naranja c/pulpa','14.10','Bebidas naturales','3','100'),
       ('Fideos Rabioli 50g','Pasta Italiana Rabioli','4.60','Pastas','4','200'),
       ('1L Azucar Morena','Azucar Cana Real','3.90','Granos Basicos','5','500'),
       ('Cerveza Gallo Lata 10oz','Cerveza Lata','7.60','Bebidas Alcoholicas','6','700'),
       ('Tortrix Limon 20g','Tortrix Grande','11.20','Frituras','7','400'),
       ('Frijoles Lata 15g','Frijoles Volteamos Negros','18.90','Comida enlatada','8','100'),
       ('Frijoles Lata 7g','Frijoles parados con chorizo','7.00','Comida enlatada','9','200');
SELECT * FROM productos;  

-- no funciona
SET @pruebas = (SELECT p.nombreproveedor FROM proveedor AS p INNER JOIN productos AS pr ON p.idproveedor = pr.idproveedor);

-- obtenemos todos los proveedores en una sola lista
SELECT  p.idproveedor, p.nombreproveedor FROM proveedor AS p INNER JOIN productos AS pr ON p.idproveedor = pr.idproveedor;

