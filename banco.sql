<<<<<<< HEAD
create database beatsync;

use beatsync;
=======
CREATE DATABASE BeatSync;

USE BeatSync;
>>>>>>> 2e60fc1695814098f55975b5d6ca355328143c40

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(35) NOT NULL,
    email VARCHAR(35) NOT NULL,
    dataNasc DATE,
    gender VARCHAR(35) NOT NULL,
    senha VARCHAR(20) NOT NULL
);

<<<<<<< HEAD

SELECT * FROM beatsync.usuarios;
=======
CREATE TABLE music (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    artista VARCHAR(200) NOT NULL,
    genderM VARCHAR(200) NOT NULL,
    album VARCHAR(200) NOT NULL
);
>>>>>>> 2e60fc1695814098f55975b5d6ca355328143c40
