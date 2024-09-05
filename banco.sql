create database beatsync;

use beatsync;

create table usuarios (
	id int auto_increment primary key,
	nome varchar(35) not null,
    dataNasc date,
    email varchar(50) not null,
    senha varchar(20) not null
);


SELECT * FROM beatsync.usuarios;