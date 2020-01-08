DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
item_id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (30),
devoured BOOLEAN DEFAULT TRUE,
PRIMARY KEY (item_id)

);
