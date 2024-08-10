create database bancoTeste;

use bancoTeste;

create table usuarios (
	id int auto_increment primary key,
	nome varchar(35) not null,
    dataNasc date,
    email varchar(50) not null,
    senha varchar(20) not null
);

INSERT INTO usuarios (nome, dataNasc, email, senha)
VALUES ('Fulano de Tal', '1990-05-15', 'fulano@email.com', 'senha123');


SELECT * FROM bancoTeste.usuarios;