var express = require('express');
var router = express.Router();
const db = require('../db'); 

router.get('/formulario', function(req, res, next) {
    
    const {nome, email, dataNasc, senha} = req.body;
    
    const sql = 'INSERT INTO usuarios (nome, email, dataNasc, senha) VALUES (nome, email, dataNasc, senha)';
    
    db.query(sql, [nome, email, dataNasc, senha], (err, results) => {
        if (err) {
        console.error('Erro ao inserir dados:', err.stack);
        res.status(500).send('Erro ao salvar dados');
        return;
        }

    // Responder ao usuário
    res.send('Dados enviados com sucesso!');
  });
});

module.exports = router;