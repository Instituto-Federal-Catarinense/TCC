const usuarios = require('../models/usuariosModel');

const usuariosController = {
    createUsuarios: (req, res) => {
        const { nome, email, dataNasc, gender, senha, csenha } = req.body;

        if (senha !== csenha) {
            return res.status(400).render('usuarios/create', { error: 'Senhas não coincidem' });
        }

        const newUsuarios = { nome, email, dataNasc, gender, senha };

        usuarios.create(newUsuarios, (err, usuariosId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },
};

module.exports = usuariosController;