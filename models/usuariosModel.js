const db = require('../config/db');

const Usuarios = {
    create: (usuarios, callback) => {
        const query = 'INSERT INTO usuarios (nome, email, dataNasc, gender, senha) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.dataNasc, usuarios.gender, usuarios.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },
};


module.exports = Usuarios;