CREATE DATABASE IF NOT EXISTS muebles;
USE muebles;

--Users table
CREATE TABLE users2(
    id INT(11) NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL,
    pago VARCHAR(60) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);
INSERT INTO users2 (id, firstName, lastName, pago) values (1, 'Ismael', 'Carvajal', 'En Efectivo');

--Products table
CREATE TABLE products(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) NOT NULL,
    category VARCHAR(60) NOT NULL,
    precio FLOAT(11) NOT NULL,
    descuento FLOAT(11) NOT NULL,
    image VARCHAR(90) NOT NULL,
    PRIMARY KEY(id),
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

DESCRIBE users;
DESCRIBE products;

INSERT INTO products (id, name, category, precio, descuento, image) values (1, 'Alacena', 'Cocina', 8000, 300, 'https://i.ibb.co/PhFW70K/computador.jpg');
INSERT INTO products (id, name, category, precio, descuento, image) values (1, 'Armario', 'Habitacion', 9000, 500, 'https://i.ibb.co/PhFW70K/computador.jpg');
SELECT * FROM users2;
SELECT * FROM products;


