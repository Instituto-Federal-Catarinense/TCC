const Usuarios = require('../models/usuariosModel');

const usuariosController = {
    createUsuarios: (req, res) => {
        const { nome, email, dataNasc, gender, senha, csenha } = req.body;

        if (senha !== csenha) {
            return res.status(400).render('usuarios/create', { error: 'Senhas não coincidem' });
        }

        const newUsuarios = { nome, email, dataNasc, gender, senha };

        Usuarios.create(newUsuarios, (err, usuariosId) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    getUsuariosById: (req, res) => {
        const usuariosId = req.params.id;

        Usuarios.findById(usuariosId, (err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuarios) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.render('usuarios/show', { usuarios });
        });
    },

    getAllUsuarios: (req, res) => {
        Usuarios.getAll((err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.render('usuarios/index', { usuarios });
        });
    },

    renderCreateForm: (req, res) => {
        res.render('usuarios/create', { error: null });
    },

    renderEditForm: (req, res) => {
        const usuariosId = req.params.id;

        Usuarios.findById(usuariosId, (err, usuarios) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (!usuarios) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            res.render('usuarios/edit', { usuarios });
        });
    },

    updateUsuarios: (req, res) => {
        const usuariosId = req.params.id;
        const updatedUsuarios = {
            nome: req.body.nome,
            email: req.body.email,
            dataNasc: req.body.dataNasc,
            gender: req.body.gender,
            senha: req.body.senha,
        };

        Usuarios.update(usuariosId, updatedUsuarios, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },

    deleteUsuarios: (req, res) => {
        const usuariosId = req.params.id;

        Usuarios.delete(usuariosId, (err) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.redirect('/usuarios');
        });
    },
};

module.exports = usuariosController;
