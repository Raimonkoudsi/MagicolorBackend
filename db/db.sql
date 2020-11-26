CREATE DATABASE IF NOT exists dbMagicolor;

USE dbMagicolor;

CREATE TABLE trabajador (
	idTrabajador INT(11) NOT NULL auto_increment,
    nombre VARCHAR(45) NOT NULL,
    apellidos VARCHAR(80) NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    fechaNacimiento date NOT NULL,
    cedula VARCHAR(12) NOT NULL,
    direccion VARCHAR(80) DEFAULT NULL,
    telefono VARCHAR(12) DEFAULT NULL,
    email VARCHAR(80) DEFAULT NULL,
    acceso INT(1) NOT NULL,
    usuario VARCHAR(20) NOT NULL,
    contraseña VARCHAR(20) NOT NULL,
    pregunta VARCHAR(80) NOT NULL,
    respuesta VARCHAR(80) NOT NULL,
    primary key(idTrabajador)
);

ALTER TABLE trabajador
	ADD pregunta VARCHAR(80) NOT NULL,
    ADD respuesta VARCHAR(80) NOT NULL;

INSERT INTO trabajador values
	(3, 'Admin', 'Perez', 'M', '1997-07-04', 'V-26038078', null, null, null, 1, 'raimon', '123456', 'pregunta', 'respuesta');

describe trabajador;