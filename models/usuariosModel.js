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

    findById: (id, callback) => {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByUsername: (nome, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ?';
        db.query(query, [nome], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, usuarios, callback) => {
        const query = 'UPDATE usuarios SET nome = ?, email = ?, dataNasc = ?, gender = ?, senha = ? WHERE id = ?';
        db.query(query, [usuarios.nome, usuarios.email, usuarios.dataNasc, usuarios.gender, usuarios.senha, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usuarios';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};

module.exports = Usuarios;
