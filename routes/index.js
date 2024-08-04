
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index',{ title: 'Bem-Vindo' });
});

router.get('/sobreNos', function(req, res, next) {
  res.render('sobreNos', { title: 'Sobre Nós' });
});

router.get('/cadastro', function(requ, res, next){
  res.render('cadastro', { title: 'Cadastro' });
});

router.post('/form', function(req, res, next){
  let nome = req.body.nome;
  let email = req.body.email;
  let dataNasc = req.body.dataNasc;
  let gender = req.body.gender;
  let senha = req.body.senha;

  let sql = `INSERT INTO usuarios (nome, email, dataNasc, gender, senha) VALUES ('${nome}', '${email}', ${dataNasc}, '${gender}', '${senha}')`;

  conexao.query(sql, [nome, email, dataNasc, gender, senha], function(erro, retorno){
    if (erro) {
      console.error('Erro ao inserir dados:', erro);
      res.status(500).send('Erro ao processar sua solicitação.');
    } else {
      console.log('Registro inserido com sucesso:', resultado);
      res.redirect('/'); // Redireciona o usuário para a página inicial ou outra página
    }
  });
});

module.exports = router;
